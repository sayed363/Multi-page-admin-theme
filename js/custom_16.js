function currentDate(){
	var today = new Date();
	var day = today.getSeconds();
	// var daylist = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
	document.getElementById("test").innerHTML = day;
}

// new Date()
// getDay()		3
// getHours()	21
// getMinutes()	10	
// getSeconds()	