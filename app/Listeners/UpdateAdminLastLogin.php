<?php

namespace App\Listeners;

use Carbon\Carbon;
use App\Events\AdminHasLogedIn;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateAdminLastLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  AdminHasLogedIn  $event
     * @return void
     */
    public function handle(AdminHasLogedIn $event)
    {
        $event->admin->last_login = Carbon::now();
        $event->admin->save();
    }
}
