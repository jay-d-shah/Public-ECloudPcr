/*
 * BootBiz - Multi Purpose Bootstrap Theme v1
 * Bootstrap v2.2.2
 * Author : Raj (www.madebyraj.com)
 * Copyright 2013 DoozyPixels
 * Designed and Created For Designers and Developers.
 * Easily Built Corporate, Product, Blog, Client Admin and more... templates
 * more option in future updates
 */

//on click show Tab content
bb_tabs = function(tabs_selector){
$(tabs_selector).on('click',function(e) {
	  e.preventDefault();
	  $(this).tab('show');
});		
}

//add arrow up/down for accordion panel
bb_accordion = function(accordion_selector){
$(accordion_selector).on({
	shown :function(e){
	$(e.target).siblings(".accordion-heading").find(".accordion-toggle i").removeClass("icon-chevron-right").addClass("icon-chevron-down");
	},
	hidden :function(e){
	$(e.target).siblings(".accordion-heading").find(".accordion-toggle i").removeClass("icon-chevron-down").addClass("icon-chevron-right");
	}
});
}

//on scroll navbar fixedTop 
bb_navbar_affix = function(affix_selector){
	$(affix_selector).affix(function(){
		offset: 0
	});
}
bb_maps_initialize = function() {
	//Google maps
var place = new google.maps.LatLng(40.459760, -79.928076),//Change your Lat and Long
	custom_marker = 'assets/img/pin.png',//Change your marker_icon
	contentString = '<div id="content">'+
            '<address><b>eCLOUDpcr</b><br/>'+
            '5877 Commerce St<br/>'+
			'Pittsburgh<br/>'+
            'PA - 15206.</address>'+
            '</div>',
   	marker,
	map;
	
	var mapOptions = {
	  zoom: 13,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  center: place
	};
	map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});		
	marker = new google.maps.Marker({
	  map:map,
	  draggable:false,
	  position: place,
	  title: 'Our Office',
	  icon: custom_marker
	  
	});
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
}

//Contact form submission
$("#contact-form").submit(function(){
		var info = $(this).serialize();
		var name = $('input[name=name]').val();
		$('#submit').text('Sending...');
		
		
		$.ajax({
			url : 'http://www.brightthoughtdesign.com/access/sendemail.php', 
			dataType:"text",
			type: 'POST',
			crossDomain:true,
			data : info, 
			success : function(result){ 
				$('#submit').text('SUBMIT');
				$('#contact-name').val('');
				$('#contact-email').val('');
				$('#contact-message').val('');
				$('.message-success').fadeIn(300).delay(10000).fadeOut(300);
			},
			error : function(result){
				$('.message-error').fadeIn(300).delay(10000).fadeOut(300);
			}
		});	
		
		return false;
});

//News Slide Out
var minusDefault = '-40%',
	positiveDefault = '40%',
	side = 0, cal = '40%', windowWidth = $(window).width();
	
	if(windowWidth <= 650){
		minusDefault = '-100%';
		positiveDefault = '100%';
		cal = '100%';
		$('.news-tab').css('right', minusDefault);
		$('.news-tab').append('<div class="exit-image"></div>');
	}else{
		minusDefault = '-40%',
		positiveDefault = '40%',
		side = 0, cal = '40%';
	}
	$(window).resize(function(e) {
		windowWidth = $(window).width();
		console.log(windowWidth);
        if(windowWidth <= 650){
			minusDefault = '-100%';
			positiveDefault = '100%';
			cal = '100%';
			$('.news-tab').css('right', minusDefault);
			$('.news-tab').append('<div class="exit-image"></div>');
		}else{
		minusDefault = '-40%',
		positiveDefault = '40%',
		side = 0, cal = '40%';
		$('.exit-image').remove();
		}
    });
	
	$('body').delegate('.exit-image', 'click', function(){
		$('.news-tab').animate({right: side},{
				duration: 300,
				step: function(){
					$(this).removeClass('news-tab-shd');
				}
			});
			$('.side-tab').animate({right : cal}, 300);
			side = 0;
			cal = positiveDefault;
	});
	$('.side-tab').click(function(){		
		if(side == minusDefault && cal == 0){
			$('.news-tab').animate({right: side},{
				duration: 300,
				step: function(){
					$(this).removeClass('news-tab-shd');
				}
			});
			$(this).animate({right : cal}, 300);
			side = 0;
			cal = positiveDefault;
		}else{
			$('.news-tab').animate({right: side}, 300);
			$(this).animate({right : cal}, 300);
			$('.news-tab').addClass('news-tab-shd');
			side = minusDefault;
			cal = 0;
		}
	});
	$(window).scroll(function(){
		if(side == minusDefault && cal == 0){
			$('.news-tab').animate({right: side},{
				duration: 300,
				step: function(){
					$(this).removeClass('news-tab-shd');
				}
			});
			$('.side-tab').animate({right : cal}, 300);
			side = 0;
			cal = positiveDefault;
		}
	})
