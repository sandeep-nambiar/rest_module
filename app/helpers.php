<?php

/**
 * Function to initiate flash message
 * @param  string $title   title for the message
 * @param  string $message content of the message
 * @return void          taking value form App\Http\Flash.php 
 */
function flash($title = null, $message = null)
{
	$flash 	=	app('App\Http\Flash');
	if(func_num_args()==0){
		return $flash;
	}
	return $flash->info($title, $message);
}
function adminFlashMessage($message,$status='info')
{
	session()->flash('adminFlashMsg',$message);
	session()->flash('adminFlashStatus',$status);
}
function clientFlashMessage($message,$status='info')
{
	session()->flash('clientFlashMsg',$message);
	session()->flash('clientFlashStatus',$status);
}
function convertToHoursMins($time, $format = '%02d:%02d') {
    if ($time < 1) {
        return;
    }
    $hours = floor($time / 60);
    $minutes = ($time % 60);
    return sprintf($format, $hours, $minutes);
}
function explodeTime($time){
	$timeArr			=	explode("T",$time);
	$time 				=	$timeArr[1];
	return date('G:i', strtotime($time));
}