<?php

namespace App\Http\Controllers\Admin;

use DB;
use App\Admin;
use App\Role;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
	protected $admin;
    public function __construct()
    {
    	$this->admin =	Auth::guard('admin')->user();
        $this->middleware('admin');
        parent::__construct();
    }
    /**
     * Will load the profile page
     * @return view  [Load profile.blade.php]
     */
	public function index()
	{
		return view('administrator.profile.profile');
	}
	/**
	 * will load the profile edit form
	 * @return view [load view with signed admin deteails]
	 */
	public function edit()
	{
		$role	=	$this->admin->roles()->firstOrFail();
		//$role	=	$this->admin->getRole();
		return view('administrator.profile.edit-profile',compact('role'));
	}
	/**
	 * Will update the profile
	 * @param  Request $request [post request from profile edit form]
	 * @return view           [redirect back to profile page]
	 */
	public function update(Request $request)
	{
		$this->validate($request, [
			'name'	=>	'required',
			'email'	=>	'required | email',
			'username'	=>	'required',
		]);
		/*if(auth()->guard('admin')->user()->can('change-role')){
            dd('success');
        }*/
		$this->admin->update($request->all());
			adminFlashMessage('Profile updated successfully', 'success');
		return redirect()->route('admin.profile');
	}
	/**
	 * Will load the change password form
	 * @return view  [load the change password view]
	 */
	public function password()
	{
		return view('administrator.profile.change-password');
	}

	/**
	 * Will update the admin password
	 * @param  Request $request Request from the change password form
	 * @return voin           return back to profile page if success
	 * @return voin           return back to update password page if error
	 */
	public function changePassword(Request $request)
	{
		$this->validate($request, [
			'current_password'	=>	'required',
			'password'	=>	'required | confirmed | min:6',
		]);
		if (Hash::check($request->current_password, $this->admin->getAuthPassword())) {
			$this->admin->fill([
				'password' => Hash::make($request->password)
				])->save();
			adminFlashMessage('Password updated successfully', 'success');
			return redirect()->route('admin.profile');
		}else{
			adminFlashMessage('Current password you entered is wrong', 'danger');
		}
		return back();
	}

	public function otherProfile($username){
		if($this->privilegeToAccess('view-profile')){
			$profile 	=	Admin::where('username',$username)->firstOrfail();
			return view('administrator.profile.other-profile',compact('profile'));
		}else{
			adminFlashMessage('You do not have access for the requested page', 'warning');
			return redirect()->route('admin.profile');
		}
	}

	public function editOtherProfile($username){
		if($this->admin->hasRole('super-admin')){
			$profile 	=	Admin::where('username',$username)->firstOrfail();
			return view('administrator.profile.edit-other-profile',compact('profile'));
		}else{
			adminFlashMessage('You do not have the permission', 'warning');
			return redirect()->route('admin.profile');
		}
	}

	
	public function profileStatus($username){
		if($this->admin->hasRole('super-admin')){
			$profile =	Admin::where('username',$username)->firstOrfail();
			$updateStatus	=	($profile->active)?0:1;
			$returnMessage	=	($profile->active)?'Account deactivated successfully':'Account activated successfully';
			$profile->active =	$updateStatus;
			$profile->update();
			adminFlashMessage($returnMessage, 'success');
			return back();
		}
	}

	public function privilegeToAccess($privilege){
		return $this->admin->can($privilege);
	}
	public function adminUserCreate(){
		$sortedRole				=	$this->admin->getAllRoles();
		return view('administrator.profile.create-admin-user',compact('sortedRole'));
	}
	public function adminUserStore(Request $request)
	{
		$this->validate($request, [
			'name'	=>	'required',
			'email'	=>	'required | email',
			'username'	=>	'required',
			'password'  =>	'required',
		]);
		$user 					=	 Admin::where('username', '=', $request->username)->first();
		if ($user === null) {
			$admin 				=	new Admin;
			$admin->password 	=	Hash::make($request->password);
			$admin->name  		=	$request->name;
			$admin->email  		=	$request->email;
			$admin->username    =	$request->username;
			$filename			=	'admin-users/'.time().'-'.$request->username.'.png';
			Image::make(public_path('images/').'prifile-pic.png')->save(public_path('images/'.$filename));
			$admin->picture 	=	$filename;
			$admin->save();
			$admin->assignRole($request->role_id);
			adminFlashMessage('New admin user has been successfully created','success');
			return redirect()->route('admin.user.list');
		}else{
			adminFlashMessage('Username already exist','danger');
         	return back();
		}
	}
	public function adminUserList()
	{
		$admin 						=	Admin::where('id', '!=', $this->admin->id)->with('roles')->get();
		return view('administrator.profile.admin-user',compact('admin'));
	}	
	public function adminUserDelete($id)
	{
		if(!$this->admin->hasRole('super-admin')){
			adminFlashMessage('You are not authorized for the requested access','warning');
			return redirect()->route('admin.profile');
		}
		Admin::find($id)->delete();
	}
	public function adminUserEdit($id)
	{
		if(!$this->admin->hasRole('super-admin')){
			adminFlashMessage('You are not authorized for the requested access','warning');
			return redirect()->route('admin.profile');
		}
		$sortedRole					=	$this->admin->getAllRoles();
		$admin 						=	Admin::with('roles')->find($id);
		return view('administrator.profile.edit-admin-user',compact('admin','sortedRole'));
	}	
	public function adminUserUpdate($id,Request $request)
	{
		$this->validate($request, [
			'name'	=>	'required',
			'email'	=>	'required | email',
		]);
		$admin              =	Admin::with('roles')->findOrFail($id);
		$admin->password 	=	($request->password!='')? Hash::make($request->password):$admin->password;
		$admin->name  		=	$request->name;
		$admin->email  		=	$request->email;
		$admin->save();
		$admin->roles()->detach($admin->roles[0]);
		$admin->roles()->attach($request->role_id);
		adminFlashMessage('Admin user has been successfully updated','success');
		return redirect()->route('admin.user.list');
	}
	public function updateProfileImage(Request $request){
		$this->validate($request, [
				'profileImage' => 'required | mimes:jpeg,bmp,png,jpg | max:1000'
			]);
		$filePath			=	public_path('images/admin-users/');
		$filename 			=	time().'-'.$this->admin->username.'.'.$request->file('profileImage')->getClientOriginalExtension();
		$profileImage 		= 	Image::make($request->file('profileImage')->getRealPath());
		$profileImage->crop(round($request->w),round($request->h),round($request->x),round($request->y))->save($filePath.$filename);
		if($this->admin->picture !='' && file_exists(public_path('images/'.$this->admin->picture))){
			unlink(public_path('images/'.$this->admin->picture));
		}
		$this->admin->picture	=	'admin-users/'.$filename;
		$this->admin->save();
		adminFlashMessage('Profile picture has been successfully updated','success');
		return back();
	}
	/*public function isSuperAdmin()
    {
        if(!$this->admin->hasRole('super-admin')){
            adminFlashMessage('You are not authorized for the requested access','warning');
            return redirect()->route('admin.profile');
        }
    }*/
}
