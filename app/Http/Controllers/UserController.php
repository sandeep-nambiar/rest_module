<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use DB;
class UserController extends Controller
{
    public function show($id){
    	$users 				=	User::findOrFail($id);
    	return response()->json($users);
    }
    public function create(){
    	return view('auth.register');
    }
    public function login(){
    	return view('auth.login');
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
	    	 return response()->json('succesfully registerd');
	    	}else{
	    		return response()->json('Error found');
	    	}
    }
    public function loginApi(Request $request){
    	//$fieldArray = ['email'=>$request->email, 'password'=>bcrypt($request->password)];
    	//$user = User::where($fieldArray)->first();
    	$pass = $request->password;
    	$user = DB::table('users')
                    ->where('password',$pass)
                    ->get();
    	dd($user);
    	if ($user === null) {
    		return response()->json('Error found');
    	}else{
    		return response()->json($users);
    	}
    }
}
