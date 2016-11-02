<?php

namespace App\Providers;

use App\Admin;
use App\Privilege;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' =>  'App\Policies\ModelPlicy',
        \App\Admin::class => \App\Policies\AdminPolicy::class,
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate  $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate); 

        foreach ($this->getPrivileges() as $privilege){
            $gate->define($privilege->name, function($admin) use ($privilege){
                //dd($privilege->name);
                return $admin->hasRole($privilege->roles);
            });
        }
        $gate->before(function($admin){
            return $admin->hasRole('super-admin');
        });
    }

    public function getPrivileges()
    {
        return Privilege::with('roles')->get();
    }
}
