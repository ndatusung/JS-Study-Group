// magic 8 ball in javascript.
// assignment 1: make a program that generates the following answer when i ask a question.
var answers = ["It is certain", "Yes - definitely", "Most likely", "Yes", "Better not tell you now", "Dont count on it", "Outlook not so good", "It is decidedly so", "You may rely on it", "Outlook good", "Reply hazy, try again", "Cannot predict now", "My reply is no", "Very doubtful", "Without a doubt", "As I see it, yes", "Signs to point yes", "Ask again later", "Concentrate and ask again", "My source say no"]
let yourQuestion;
do{
yourQuestion = prompt("ASK A SENSITIVE QUESTION AND GET A RESPONSE FROM ME")}
while(!yourQuestion){
function randomAnswer(answers){
	return answers[Math.floor(Math.random()*answers. length)];
}
console.log(randomAnswer(answers))}






// assignment 2:  create a function that takes two number as argument (num, length) and returns an array of multiples
// num until the array length reaches length.
function myArray (num, length){
	multiples =[ ]
    for (var i = num; i<= num*length; i += num){
    	multiples.push(i); }
    	return multiples}
  //now call any value with the length of the multiple you need to get. e.g
    console.log(myArray(2,3))

// assignment 3: Fibonacci Sequence ; write a javascript program to get the first n fibonacci numbers.

function fiboSequence (n){
if(n <2){
return [0, 1]
}else{
let p = fiboSequence(n-1);
p.push(p[p.length - 1]+ p[p.length -2]);
return p;}}

// call out to the console the length of the fibSequence out need 
console.log(fiboSequence(5))
