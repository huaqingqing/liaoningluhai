$(function(){
	
   $('.ipo i').mouseover(function(){
   	var j=$(this).index();
   	  $(this).addClass('active');
   	  $('strong').eq(j).addClass('font')
   });
   $('.ipo i').mouseout(function(){
   		var j=$(this).index();
       $(this).removeClass('active');
     $('strong').eq(j).removeClass('font');
   });
});