// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user = prompt("whats the day of the week")
user=user.toLowerCase

if (user === "Saturday"|| user === "Sunday"){
  console.log("Its the weekend, yay!!!")
} else{
  console.log("Its a week day , yay school !!!!")
}




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)

let age = prompt("What is your age?")
age=parseInt(age)
//console.log(typeof Age)
if(age===0){
  console.log("Thats not an age")
} else if (age<=12){
  console.log("you are a child")
} else if (age<=18){
  console.log("You are a teen")
}else{
  console.log("Rip you lived a good life")
}

// WHILE LOOPS
// Print 1 to 5
let i = 1
while(i>=5){
  console.log(I)
  i++
}



// Print from a certain number to 1

let number = prompt("Enter a number")
number=parseInt(number)
while(number>0){
console.log(number)
number--
}

// Summing up to 5

let sum = 0 //We will be adding numbers to this variable
let counter = 1

//sum: 1 + 2 + 3 + 4 + 5
while (counter<=5){
  sum=counter + sum //sum += counter
  counter++
}
console.log("Sum of 1-5",sum)
// Using prompt

let mysterystudent = "Zyaire"
let user2 = prompt("Enter a students name").toLowerCase
//While what the user entered ISN'T my mysteryStudent, keep running
while (mysterystudent !==user2){
  user2 = prompt("Try again, guess a different student")
}
console.log("Good Job")
