let num=10;

if(num>0){
    //console.log(`${num} is positive number`)
}
else if(num<0){
    //console.log("it is negative number")
}
 else {
    //console.log(" it is 0")
}

// program to check if  person is eligible to vote or not

let age=13

if(age>=18){
    console.log(`person is eligible to vote`)
}
else{
    console.log("person is not eligible to vote")
}

//** nested if -else statement */

let a=4
let b=5
let c=6

if(a>b){
    if(a>c){
        console.log(`${a} is the gratest number of all three`)
    }
    else{
        console.log(`${c} is the greatest number`)
    }
}
else if(b>c){
    console.log(`${b} is the greatest number`)
}
else{
    console.log(`${c} is the gratest number`)
}

// switch case

// determine the day of the week

const day = 3 

switch(day){
    case 1:
        console.log("monday");
        break;
    
    case 2:
        console.log("tuesday") 
        break;   

    case 3:
        console.log("wednesday") 
         break;
    
    case 4:
         console.log("thursday") 
         break;

    case 5:
        console.log("Friday") 
        break;  
        
     case 6:
        console.log("saturday") 
         break;
     

     case 7:
        console.log("sunday") 
        break;
   
    default:
        console.log("invalid day")    
        break;
}


// write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on score and log the grade to the console

const scores=34;

switch (true){

   case (scores>=90 && scores<=100) :

      console.log("grade: A");
        break;
    
    case (scores>=80 && scores<90) :

        console.log("grade: B");
         break;
        
        
    case (scores>=70 && scores<80) :

         console.log("grade: c");
        break;


    case (scores>=60 && scores<70) :

    console.log("grade: D");
    break;


    case ( scores<60) :

    console.log("grade: F");
    break;


    default :
       console.log("invalid score")
       break;

}

// ternary operator


let number=9;

const oddeven = number%2 == 0 ?(`${number} is even`):(`${number} is odd`);
console.log(oddeven)

//leap year question

year=2020

if((year%400==0)|| (year%4==0 && year%100 != 0)){
      console.log(`${year}is a leap year`)
}
else{
    console.log("not a leap year")
}