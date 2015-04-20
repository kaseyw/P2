//Project 2

//req 4-A

var  isArmstrong = function(n){
	"use script";
//convert to string
	n= String(n);
//transverse n
		sum = 0;
	for(var i = 0; i<n.length; i++)
		sum = sum + Math.pow(n[i],n.length);


if(n == sum)
	return true;

else
	return false;

}

//must TEST the armstrong property!!

//req 4-B

var  isArmstrong = function(n){
	"use script";
//convert to string
	n= String(n);
//transverse n
		sum = 0;
	for(var i = 0; i<n.length; i++)
		sum = sum + Math.pow(n[i],n.length);


if(n == sum)
	return true;

else
	return false;

}

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




//req 4-C

var allSubstrings1= function(s){
	"use strict"
	var result = "";
var newresult="";
	for(i=0;i<=mystring.length;i++){
for(j=i+1;j<=mystring.length;j++){
sub=mystring.substring(i,j);

	result = result + sub + ", ";

}
}

	for(i=0;i<result.length-2;i++){
		newresult=newresult+ result[i];
	}
	return newresult;

}



//req 4-D


var allSubstrings2= function(s){
	"use strict"
	var result =[];
	for(i=0;i<=mystring.length;i++){
for(j=i+1;j<=mystring.length;j++){
sub=mystring.substring(i,j);

	result.push(sub) ;

}
}

	return result;

}




//req 4-E
function maxWord(mystring){
var maxword="";
var maxLength=0;
mystring=mystring.split(" ");
for(i=0;i<mystring.length;i++){
if(mystring[i].length>maxLength){
maxword=mystring[i];
maxLength=mystring[i].length;
console.log("the longest word so far is: " + maxword + " It has length " + maxLength)
}
}
return maxword;}




