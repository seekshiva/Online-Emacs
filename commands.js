function execute(command) {
    if(command=="") return;
    $(".buffer").html("Executing '"+command+"'...");
    switch(command) {
    case 'C-X C-S':
	
	break;
    case 'C-X C-F':
	
	break;
    case 'C-X ':
	
	break;
    default:
	alert("Command not found");
    }
}