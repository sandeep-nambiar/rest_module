<?php

namespace App\Policies;

use App\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;

class AdminPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        dd('this much');
    }
    public function viewProfile()
    {        
        return Auth::guard('admin')->user()->can('view-profile');
    }
    
}
