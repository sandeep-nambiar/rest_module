<?php

namespace App\Http\Controllers\Admin;


use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function __construct()
    {
		$this->middleware('admin');
		parent::__construct();
	}
	public function index()
	{
		return view('administrator.dashboard');
	}
}