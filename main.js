window.onload = function () {

	$("#download-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#download").offset().top-75},
			'slow');
	});

	$("#faq-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#faq").offset().top-75},
			'slow');
	});

	$("#benefits-button").click(function() {
		$('html,body').animate({
			scrollTop: $("#benefits").offset().top-75},
			'slow');
	});

	$("#download-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#download").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$("#faq-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#faq").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$("#benefits-button2").click(function() {
		$('html,body').animate({
			scrollTop: $("#benefits").offset().top},
			'slow');
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$("#download-button3").click(function() {
		$('html,body').animate({
			scrollTop: $("#download").offset().top},
			'slow');
	});

	$(window).scroll(function(){
	    var scrollTop = $(window).scrollTop();
		if (scrollTop>35) {
			$('.erasable-header').css({'padding-top':'20px'});
		}
		else if (scrollTop>0) {
			$('.erasable-header').css({'padding-top':(50-scrollTop)});
		}
		else {
			$('.erasable-header').css({'padding-top':50});
		}
  	});

  	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
}
