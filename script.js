var point=0,line=1,isChar=false;isControl=false; isAlt=false; command = "", cursor=String.fromCharCode(9611);
function stopDefault( e ) {
    // Prevent the default browser action (W3C)
    if ( e && e.preventDefault )
	e.preventDefault();
    // A shortcut for stoping the browser action in IE
    else
	window.event.returnValue = false;
    return false;
}
$(document).ready(function() {
    $('.buffer').css('height',function() {
	return $(window).height()-70;
    });
    $(window).resize(function() {
	$('.buffer').css('height',function() {
	    return $(window).height()-70;
	});
	 });
    $('.buffer')[0].innerText = $('.buffer')[0].innerText+cursor; // Acknowledge content and add Cursor
    point=$('.buffer')[0].innerText.length;// Find the Length of the whole preexisting content and set it to point
    $(window).keypress(function(e) {
	ch = e.keyCode;
	if(isControl) {
			return;
	}
	$('.buffer')[0].innerText = $('.buffer')[0].innerText.substr(0,point) + $('.buffer')[0].innerText.substr(point+1); // Removes the Cursor character
	$('.buffer')[0].innerText = $('.buffer')[0].innerText+String.fromCharCode(ch);
	$('.buffer')[0].innerText = $('.buffer')[0].innerText+String.fromCharCode(9611); //Adds the Cursor index character after edit.
	$("#minibuffer").html("");
	point++;
	isChar=false;
	});
    $(window).keydown(function(e) {
	ch = e.keyCode;//alert(ch);
	switch(ch) {
	case 17:
	    isControl = true;
	    return;
	    break;
	};
	if(isControl) {
	    //alert('hi');
	    stopDefault(e);
	    e.cancelBubble = true;
	    if(e.stopPropagation)
		e.stopPropagation();		    
	    return;
	}
	
	if(ch==8) {//backspace
	    if(point==0) return;
	    $('.buffer')[0].innerText = $('.buffer')[0].innerText.substr(0,point-2) + $('.buffer')[0].innerText.substr(point-1);
	    $("#minibuffer").html("");
	    point--;
	    return;
	}
	if(ch==46) {//delete key
	    spos=point+1;
	    if(point==0) return;
	    $('.buffer').html($('.buffer').html().substr(0,spos)+$('.buffer').html().substr(spos+1));
	    $("#minibuffer").html("");
	    point-=point-spos;
	    return;
	}
	if(ch==32) {
	    // $('.buffer').html($('.buffer').html()+'&nbsp;');
	    //point+=6;
	}
    });
    $(window).keyup(function(e) {
	ch = e.keyCode;//alert(ch);
	switch(ch) {
	case 17:
	    //alert(command);
	    execute(command);
	    command = "";
	    isControl = false;
	    break;
	};
	if(isControl) {
	    command += "C-"+String.fromCharCode(ch)+' ';
	    execute(command);
	    $("#minibuffer").html(command);
	    if(ch==71)//G for C-G
		$("#minibuffer").html("Quit");
	    return;
	}
    });
    window.onkeydown=function(e) {
	//alert(e.keyCode);
	if(isControl) {
	    stopDefault(e);
	    e.cancelBubble = true;
	    if(e.stopPropagation)
		e.stopPropagation();		    
	    return;
	}
	//		    stopDefault(e);
    };
    window.onfocus = function() {
	isControl=false; isAlt=false;
    };
});