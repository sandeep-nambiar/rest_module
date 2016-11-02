<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name', 'label',
    ];
	/**
	 * To get the whole permisssion belongs to the role
	 * @return void 
	 */
    public function privileges(){
    	return $this->belongsToMany(Privilege::class);
    }
    /**
     * To give privilege to the selected role
     * @param  Privilege $privilege  App\Privilege
     * @return Void                 
     */
    public function givePrivilegeTo(Privilege $privilege){
    	return $this->privileges()->save($privilege);
    }
}
