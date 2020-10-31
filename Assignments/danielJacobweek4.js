//week four assignment on functions 
function num(p) {
	if (p===1) { return "This is not a prime number ";
	} else if(p === 2) { return "This is a prime number	"}else { for(var x = 2; x < p; x++) { if(p % x ===0){
		return "This is not a prime number"; }
		} return "This is a prime number "; } } console.log(num(49)); 


