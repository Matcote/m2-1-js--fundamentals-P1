// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500
let total = 0;
for(num = 0; num < 5001; num++){
    if(num % 4 === 0){
        total = total + num;
    }
}
console.log(total);