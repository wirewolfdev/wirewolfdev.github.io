			jQuery(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
				});
			});

				
			//botôes de navegação
			$(function () {	
				var filterList = {
					init: function () {	
						// MixItUp plugin
						// http://mixitup.io
						$('#portfoliolist').mixitup({
							targetSelector: '.portfolio',
							filterSelector: '.filter',
							effects: ['fade'],
							easing: 'snap',
							// call the hover effect
							onMixEnd: filterList.hoverEffect()
						});										
					},
					hoverEffect: function () {
						// Simple parallax effect
						$('#portfoliolist .portfolio').hover(
							function () {
								$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
								$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
							},
							function () {
								$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
								$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
							}		
						);					
					}
				};				
				// Run the show!
				filterList.init();
			});
	
			$(document).ready(function() {
				/*
				var defaults = {
					containerID: 'toTop', // fading element id
					containerHoverID: 'toTopHover', // fading element hover id
					scrollSpeed: 1200,
					easingType: 'linear' 
				};
				*/
						
				$().UItoTop({ easingType: 'easeOutQuart' });			
			});
			
			//função do menu encolhido
			$("span.menu").click(function(){
								$(".top-nav ul").slideToggle(500, function(){
								});
							});
							
			//retrair menu quando clicar em algum item
			$(".top-nav ul").click(function(){	

				if($(window).width()<750){	
					$(".top-nav ul").slideToggle(500, function(){
					});
				}
			});
			
			$(window).resize(function(){
				if($(window).width()>750){	
					$(".top-nav ul").show();
				}else{
					$(".top-nav ul").hide();
				}
			});