var state = ['Sydney','Berlin','Newyork','Kathmandu'];
var layout = "<div class='clockbox'>"+
			"</div>"+
    	"<div class='digital'>"+
    	"<h3 id='place'></h3>"+
        "<h4 id='time'></h4>"+
    		"</div>";

// call for the div

function main(){
	for (var i = 0; i < state.length; i++) {
		var element = document.getElementsByClassName(state[i])[0].innerHTML = layout;
	}
}

document.addEventListener('DOMContentLoaded', main);

var TIME, PLACE;

//get time and place id

function count(){
	TIME = document.querySelectorAll('#time');
	PLACE = document.querySelectorAll('#place'); 
}
var counter = setInterval(count, 10);
setTimeout(function(){
	clearInterval(counter);
	for (var i = 0; i < state.length; i++) {
		PLACE[i].innerHTML = state[i];
	}
	setInterval(function(){
		getDate(+10, 0);
	}, 1000);
	setInterval(function(){
			getDate(+2, 1);
		}, 1000);
	setInterval(function(){
			getDate(-4, 2);
		}, 1000);
	setInterval(function(){
			getDate(+5.75, 3);
		}, 1000);
},  1000);

//convert time from utc to gmt

function getDate(x, y){	
	var time = new Date();
	var utc = time.getTime() + time.getTimezoneOffset() * 60000;
	var stateTime = new Date(utc + (3600000*(x)))
	var minutes = stateTime.getMinutes();
	var seconds = stateTime.getSeconds();
	var hr = stateTime.getHours();
	var session="AM";
	if (hr==0) {
				hr==12;
			}
			if (hr>12) {
				hr=hr-12;
				session="PM"
			}
			hr=(hr<10) ? "0" + hr : hr;
			minutes=(minutes<10) ? "0" + minutes : minutes;
			seconds=(seconds<10) ? "0" + seconds : seconds;
	TIME[y].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds + ''+''+session;
}
