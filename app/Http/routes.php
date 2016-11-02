<?php
Route::get('/api/v1/image-resize', function()
{
    @$width          =   $_GET['width'];
    @$height         =   $_GET['height'];
    if($width !='' && $height !=''){
        $img = Image::make('assets/uploads/test.jpg')->resize(300, 200);
        $time = time();
        $img->save('assets/uploads/resize/'.$time.'.jpg', 80);
        return response()->json(['imageName'=>'assets/uploads/resize/'.$time.'.jpg','width'=>$width,'height'=>$height]);
    }else{
        return response()->json(['error'=>'Incorrect parameters']);
    }
});
Route::get('/', function () {
    return view('welcome');
});
Route::auth('api');
//Route::get('/home', 'HomeController@index');
//
Route::get('user/create', 'UserController@create')->name('regiterForm');
Route::get('user/login', 'UserController@login')->name('loginForm');
Route::post('api/v1/user/create', 'UserController@store')->name('register');
//Route::post('api/v1/user/login', 'UserController@loginApi')->name('login');
Route::group(['prefix' => 'api/v1','middleware'=>'auth:api'], function () {
        Route::get('/user/{id}', 'UserController@show');
});
/**
 * Admin Login and reset password routes
 */
Route::group(['namespace' => 'Admin','prefix' => 'administrator'], function () {
    Route::get('/login', "Auth\AuthController@loginForm")->name('admin.login');
    Route::post('/login', "Auth\AuthController@login");
    Route::get('/reset-password', "Auth\AuthController@passwordReset")->name('admin.resetPassword');
});
/**
 * Admin Functionality Routes
 */
Route::group(['namespace' => 'Admin','prefix' => 'administrator','middleware'=>'admin'], function () {
    Route::get('/', "AdminController@index")->name('admin.dashBoard');
    /**
     * Routes for Client users
    */
    Route::group(['prefix' => 'users'], function(){
        Route::get('/list', "UsersController@index")->name('clientUserList');
        Route::get('/create', "UsersController@create")->name('clientUserCreate');
        Route::post('/create', "UsersController@store")->name('clientUserStore');
        Route::get('/{id}/delete', "UsersController@delete");
    });
    /**
     * Route for Logout
     */
    Route::get('/logout', "Auth\AuthController@logout")->name('admin.logout');
});