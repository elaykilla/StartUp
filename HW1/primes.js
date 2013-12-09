#!/usr/bin/env node

//function to define is a number is prime

var isPrime = function(n){
	if(n===
 0 || n==1){return false;}
	else if(n==2){return true;}
	else if(n>1){
		var i = 2;
		var prime = true;
		var sqr = Math.ceil(Math.sqrt(n));
		while(prime && i<=sqr){
			var rem = n%i;
			if(rem===0){
				prime = false;
			}
			i++;
		}
		return prime;
	}
};




//For loop to print out prime number
var firstkprime = function(k){
	var i = 2;
	var arr = [];
	while(arr.length<k){
		while(!isPrime(i)){
			i++;
		}
		arr.push(i);
		i++;
	}
	return arr;
};

//Print to console
var fmt = function(arr){
	return arr.join(",");
};

var fs = require('fs');
var k=100;
console.log("firstkprime("+ k +")");
console.log(fmt(firstkprime(k)));
var outfile = "primes.txt";
fs.writeFileSync(outfile, firstkprime(k));
