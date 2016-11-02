<?php

namespace App\Events;

use App\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class AdminHasLogedIn extends Event
{
    use SerializesModels;

    public $admin;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($admin)
    {
        $this->admin   =    $admin;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
