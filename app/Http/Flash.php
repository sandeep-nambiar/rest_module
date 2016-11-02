<?php

namespace App\Http;

class Flash
{

	/**
	 *  Creating a Flash Message
	 * @param  string $title   Title of the message
	 * @param  string $message Message content
	 * @param  string $type    Type of the message (success, erroro etc...)
	 * @param  key | null $key     session of the message (for overlay only can use 'flashMessageOverlay' this session)
	 * @return void          createting session using the given value
	 */
	public function create($title, $message, $type, $key = 'flashMessage'){
		session()->flash($key, [
			'title'	=>	$title,
			'message' => $message,
			'type'	=> $type
		]);
	}
	
	/**
	 * Function to create information message
	 * @param  string $title   title of the message
	 * @param  string $message message content
	 * @return void          activating the create function
	 */
	public function info($title, $message){
		return $this->create($title, $message, 'info');
	}

	/**
	 * Function to create Success message
	 * @param  string $title   title of the message
	 * @param  string $message message content
	 * @return void          activating the create function
	 */
	public function success($title, $message){
		return $this->create($title, $message, 'success');
	}

	/**
	 * Function to create error message
	 * @param  string $title   title of the message
	 * @param  string $message message content
	 * @return void          activating the create function
	 */
	public function error($title, $message){
		return $this->create($title, $message, 'error');
	}

	/**
	 * Function to create warning message
	 * @param  string $title   title of the message
	 * @param  string $message message content
	 * @return void          activating the create function
	 */
	public function warning($title, $message){
		return $this->create($title, $message, 'warning');
	}

	/**
	 * Function to create overlay message (message with a dismiss button)
	 * @param  string $title   title of the message
	 * @param  string $message message content
	 * @param  string $type type of the message (default is success)
	 * @return void          activating the create function
	 */
	public function overlay($title, $message, $type = 'success'){
		return $this->create($title, $message, $type, 'flashMessageOverlay');
	}
}