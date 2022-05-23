
// First task

var message;

var question = prompt ("შეიყვანეთ თქვენი ხელფასი");
var salary = parseInt(question);
    output();

function output(){
    if(salary<=1000){
        message = "საშუალოზე დაბალი ხელფასი";
    }
    else if(salary>1000 && salary<5000){
        message = "საშუალო ხელფასი";
    }
    else{
        message = "მაღალი ხელფასი"
    }
    alert(message);
}




// Second task

var people = [ ["Tom", 25, false], ["Bill", 38, true], ["Alice", 23, false] ]; 

var first; 
var second; 
var third; 

first = people[0][2];
second = people[1][1];
third = people[2][2];

console.log(first + ", " + second + ", " + third);