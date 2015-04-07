/**
 * Scripts for Base5Child Theme
 * 
 * @package base5
 * @subpackage base5child
 */



//RESIZE VIDEO CONTAINER
function resizeDiv() {
      //vpw = $(window).width() - 105;
	  
	  
	
      vph = $('#mast video').height() - 25; 
      $('#mast').css({'height': vph + 'px'});
	  
	  
	  /*
	  vph4 = $('#mast img#mast_inner-2 ').height() - 25; 
      $('#mast').css({'height': vph4 + 'px'});
	  */
	  
	  
  }
  
  $(window).load(function(){
      resizeDiv();
  });
   $(document).ready(function(){
      resizeDiv();
  });
  window.onresize = function(event) {
      resizeDiv();
  }
  

  

  