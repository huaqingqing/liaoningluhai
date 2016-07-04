var nowFrame = 0;
 
		for(var i=0;i<$('.sec1 li').length;i++){
			if(i==nowFrame){
				$('.sec1 li').eq(i).css('display','block');
			}else{
				$('.sec1 li').eq(i).css('display','none');
			}
		}
		setInterval(function(){
			nowFrame++;
			if(nowFrame>=$('.sec1 li').length){
				nowFrame=0;
			}

			for(var i=0;i<$('.sec1 li').length;i++){
				if(i==nowFrame){
					$('.sec1 li').eq(i).css('display','block');
					$('.pan span').eq(i).show();
					$('.sec1 .text').eq(i).animate({left:'-300px','transition':'all 0.3s ease'});
					$('.sec1 .en').eq(i).animate({left:'100px','transition':'all 0.3s ease'},1000);
					 $('.sec1 .btn').eq(i).animate({left:'100px','transition':'all 0.3s ease'},1000);
			
				}else{
					$('.sec1 li').eq(i).css('display','none');
						$('.pan span').eq(i).hide();
					$('.sec1 .text').eq(i).animate({left:'-1920px','opcity':'0.5'});
					 $('.sec1 .en').eq(i).animate({left:'-1920px','opcity':'0.5'});
					 $('.sec1 .btn').eq(i).animate({left:'-1920px','opcity':'0.5'})
				}
			}

		},3000);