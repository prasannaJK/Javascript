const randomNumber = Math.random();

if(randomNumber>0.9){
    alert('Greater than or equal to 0.9');
}else{
    alert('Not greater');
}

//Array
const number = [3,2,5,4,1,8];

//Forloop

for(let i=0; i<number.length; i++){
    console.log(number[i]);
}

//while loop
 let counter = 0;
 while(counter < number.length){
    console.log(number[counter]);
    counter++;
 }

 //for loop backward
 for(let i = number.length-1 ; i>=0 ; i--){
    console.log(number[i]);
 }

 //AND operation

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);

if((randomNumber>0.9 && randomNumber2>0.9) || 
   randomNumber<=0.2 || 
   randomNumber2<=0.2)
{
    alert('Greater than 0.9 or Smaller than 0.2');
}
