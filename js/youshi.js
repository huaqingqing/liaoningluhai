var nowFrame = 0;
setInterval(function(){
			nowFrame++;
			if(nowFrame>=$('.sec3 .item').length){
				nowFrame=0;
			}
			for(var i=0;i<$('.sec3 .item').length;i++){
				if(i==nowFrame){
					  $('.item .text01').eq(i).animate({left:'0','transition':'all 0.5s ease','opcity':'0.5'})
					  $('.item .text02').eq(i).animate({left:'0','transition':'all 0.5s ease'}).delay(500);
				}else{
					  $('.item .text01').eq(i).animate({left:'-436px','transition':'all 0.5s ease','opcity':'0.5'});
					  $('.item .text02').eq(i).animate({left:'-900px','transition':'all 0.5s ease'}).delay(500);
				}
			}

		},1800);
$(function(){
	$('._bd li').mouseenter(function(){
		$(this).find('._cover').stop().animate({top:0},'fast');
	}).mouseleave(function(){
		$(this).find('._cover').stop().animate({top:'241px'},'fast');
	});
	$('.side_layer #l1').mouseover(function(){
		$('#text1').stop().animate({right:'60px'});
	});
	$('.side_layer #l1').mouseout(function(){
		$('#text1').stop().animate({right:'-150px'});
	});
	$('.side_layer #l2').mouseover(function(){
		$('#text2').stop().animate({right:'60px'});
	});
	$('.side_layer #l2').mouseout(function(){
		$('#text2').stop().animate({right:'-150px'});
	});
    $('.new li').mouseover(function(){
    	var i=$(this).index();
    	$('._more').eq(i).addClass('act');
    	$('h2').eq(i).addClass('font');
    	$('._text').eq(i).addClass('font');
    });
    $('.new li').mouseout(function(){
    	var i=$(this).index();
    	$('._more').eq(i).removeClass('act');
    	$('h2').eq(i).removeClass('font');
    	$('._text').eq(i).removeClass('font');
    });
});