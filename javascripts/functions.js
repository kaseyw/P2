//Project 2

//req 4-A

var isArmstrong = function(num){
	"use strict"

	var s = String(num);

	var d1 = s[0];
	var d2 = s[1];
	var d3 = s[2];
	var d4 = s[3];
	var d5 = s[4];

	if (Math.pow(d1,num.length) + Math.pow(d2,num.length) + Math.pow(d3,num.length) + Math.pow(d4,num.length) + Math.pow(d5,3) == num) 

		return true;

	else
		return false;
	
};

//must TEST the armstrong property!!

//req 1-C

var isArmstrong = function(num){
	"use strict"

	var s = String(num);

	var d1 = s[0];
	var d2 = s[1];
	var d3 = s[2];

	if (Math.pow(d1,3) + Math.pow(d2,3) + Math.pow(d3,3) == num) 

		return true;

	else

		return false;
	
};
 
var allArmstrongs = function(){
	"use strict"

	var result = '';
	i = '';

	for (var i = 1; i <= 99999; i++) {

		if (isArmstrong(i))
			result = result + i + ' ';
	}
		
			return result;
}


//req 1-D

var formatTelNum = function(x) {
	var result = '(';

	x= String(x);

	result = result + x[0] + x[1] + x[2] + ") " + x[3] + x[4] + x[5] + '-' + x[6] + x[7] + x[8] + x[9];


	return result;
}