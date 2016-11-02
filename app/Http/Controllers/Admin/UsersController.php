<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
class UsersController extends Controller
{
    public function index(){
    	$users 					=	User::orderBy("id","DESC")->get();
    	return view('administrator.users.list',compact('users'));
    }
    public function create(){
    	return view('administrator.users.create');
    }
        public function store(Request $request){
        	 $this->validate($request,[
                'email'=>'required',
                'name'=>'required',
                'password'=>'required',
                'password_confirmation'=>'required'
            ]);
        	$user = User::where('email', '=', $request->email)->first();
        	if ($user === null) {
    	    	 User::create([
    	            'name' => $request->name,
    	            'email' => $request->email,
    	            'api_token' => str_random(60),
    	            'password' => bcrypt($request->password),
    	        ]);
    	    	 adminFlashMessage('New User has been created','success');
    	    	}else{
    	    		adminFlashMessage('Error Found','danger');
    	    	}
    	    	return redirect()->route('clientUserList');
        }
        public function delete($id)
	    {
	         User::find($id)->delete();
	    }
}
