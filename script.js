var point=0,line=1,isChar=false;
$(document).ready(function() {
	$('.buffer').css('height',function() {
		return $(window).height()-70;
	    });
	$(window).resize(function() {
		$('.buffer').css('height',function() {
			return $(window).height()-70;
		    });
	    });
	$(window).keypress(function(e) {
		//if(!isChar) return;
		ch = e.keyCode;
		$('.buffer').html($('.buffer').html()+String.fromCharCode(ch));
		point++;
		//		isChar=false;
	    });
      	$(window).keydown(function(e) {
		ch = e.keyCode;//alert(ch);
		if(ch==8) {
		    if(point==0) return;
		    else if($('.buffer').html()[point-1]==';')
			spos = point-8;
		    /*else if($('.buffer').html()[point-1]=='>')
		      spos = point-5;*/
		    else
			spos = point-1;
		    $('.buffer').html($('.buffer').html().substr(0,spos)+$('.buffer').html().substr(point));
		    point-=point-spos;
		    return;
		}
		if(ch==46) {
		    spos=point;
		    if(point==0) return;
		    $('.buffer').html($('.buffer').html().substr(0,spos)+$('.buffer').html().substr(point+1));
		    point-=point-spos;
		    return;
		}
		if(ch==32) {
		    //$('.buffer').html($('.buffer').html()+'&nbsp;');
		    //point+=6;
		}
	    });
	window.onkeydown=function(e) {
	    //alert(e.keyCode);
	};
    });