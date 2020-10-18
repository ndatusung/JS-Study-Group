// Assignment number one
function gradeInterpreter(grade){
	if (grade<= 39){
		return "GRADE F"
	}else if (grade<=45){
		return " GRADE E"
	}else if (grade <= 49){
		return "GRADE D"
	}else if (grade <= 59){
		return "GRADE C"
	}else if (grade <=69){
		return "GRADE B"
	}else 
	      return "GRADE A"
}
console.log(gradeInterpreter(69)) //call any grade you will get your GRADE



//Assignment number two

function phScale (value ){
	if (value < 7){
		return " ACIDIC"
} else if (value == 7){
		return "NEUTRAL"
		}else 
     return "ALKALINE "
     }
     //give me a phvalue.
console.log(phScale(7))


