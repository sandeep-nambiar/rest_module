$(document).ready(function($) {

	$('.drop-menu').webuiPopover({
		animation:'pop'
	});

	$('.count-increments').TouchSpin({
		min: 1,
        max: 8,
        initval: 1,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
	});

	$('.count-increments-child').TouchSpin({
		min: 0,
        max: 8,
        initval: 0,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
	});

	$('.filter__watchVideo a').click(function(){
		Lobibox.notify('success', {
            msg: 'Comment has been removed.',
            icon: false,
            delay: 5000,
            position: "top right" 
        });
	})
	//@if (slider want to enable)
	// $('.slider-container__slick').slick({
	// 	arrows: false,
	// 	slidesToScroll: 1
	// });
});