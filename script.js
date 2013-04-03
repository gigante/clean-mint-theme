// Called by MDM to disable user input
function mdm_disable() {
	document.getElementById("entry").value = "disabled";
	document.getElementById("entry").disabled = "disabled";
	document.getElementById("ok_button").disabled = "disabled";
}
// Called by MDM to enable user input
function mdm_enable() {
	document.getElementById("entry").value = "";
	document.getElementById("entry").disabled = false;
	document.getElementById("ok_button").disabled = false;
}
// Called by MDM to set the welcome message
function set_welcome_message(message) {	document.getElementById("welcome_message").innerHTML = message; }
// Called by MDM to update the clock
function set_clock(message) { document.getElementById("clock").innerHTML = message; }
// Called by MDM to allow the user to input a username		
function mdm_prompt(message) {	
	mdm_enable();		
	document.getElementById("label").innerHTML = 'user';
	document.getElementById("entry").value = "";
	document.getElementById("entry").type = "text";
	document.getElementById("entry").focus();
}
// Called by MDM to allow the user to input a password
function mdm_noecho(message) {	
	mdm_enable();		
	// message;	
	document.getElementById("label").innerHTML = 'pass';
	document.getElementById("entry").value = "";
	document.getElementById("entry").type = "password";
	document.getElementById("entry").focus();
}
// Called by MDM to show an error		
function mdm_error(message) { document.getElementById("error").innerHTML = 'try again'; }					
// Send user input to MDM
function send_login() {
	// read the value before we disable the field, as it will be changed to "disabled"
	var value = document.getElementById("entry").value;
	mdm_disable(); 
	alert("LOGIN###" + value);
	return false;
}
// Called by MDM if the SHUTDOWN command shouldn't appear in the greeter
function mdm_hide_shutdown() { document.getElementById("shutdown").style.display = 'none'; }	
// Called by MDM if the SUSPEND command shouldn't appear in the greeter
function mdm_hide_suspend() { document.getElementById("suspend").style.display = 'none'; }
// Called by MDM if the RESTART command shouldn't appear in the greeter
function mdm_hide_restart() { document.getElementById("restart").style.display = 'none'; }
// Called by MDM if the QUIT command shouldn't appear in the greeter
function mdm_hide_quit() { document.getElementById("quit").style.display = 'none'; }
// Called by MDM if the XDMCP command shouldn't appear in the greeter
function mdm_hide_xdmcp() { document.getElementById("xdmcp").style.display = 'none'; }