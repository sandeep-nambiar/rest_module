<?php

namespace App;

use Illuminate\Support\Facades\Auth;

trait AdminRoles
{
	/**
	 * to return all the roles assigned for a Admin
	 * @return object [list of roles assigned with this Admin]
	 */
	public function roles(){
	    return $this->belongsToMany(Role::class);
	}
	/**
	 * To check wheter an Admin has the given role
	 * @param  string  $role [name of the role]
	 * @return boolean       
	 */
	public function hasRole($role){
	    if(is_string($role)){
	        return $this->roles->contains('name',$role);
	    }
	    return !! $role->intersect($this->roles)->count();
	}
	/**
	 * Assign a role to the admin
	 * @param  string $role [Role name]
	 * @return void       
	 */
	public function assignRole($roleId)
	{
	    return $this->roles()->save(
	        Role::whereId($roleId)->firstOrFail()
	    );
	}
	public function getRole()
	{
		return $this->roles()->firstOrFail();
	}
	public function getAllRoles(){
		$rolesList 		=	Role::orderBy('name')->lists('label','id');
		$rolesList->put('0','Select Role');// Add default value 
		$sortedRole 	=	$rolesList->sortBy('id');
		return $sortedRole->values()->all();
	}
	
}