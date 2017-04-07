
//      01 | sum
//      Write a function called sum that takes two parameters and returns the sum of those 2 numbers.

console.log("                                                   ")
console.log("---   01  | sum   ---------------------------------");
console.log("                                                   ")

function sum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(sum(5,2));

//      02 | avg
//      Write a function named avg that takes 3 parameters and returns the average of those 3 numbers.

console.log("                                                   ")
console.log("---   02  | avg   ---------------------------------");
console.log("                                                   ")

function avg(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    return avg;
}

console.log(avg(5,2,4));

//      03 | greaterThan
//      Write a function called greaterThan that takes two parameters and returns true if the second 
//      parameter is greater than the first. Otherwise the function should return false.

console.log("                                                   ")
console.log("---   03  | greaterThan   -------------------------");
console.log("                                                   ")

function greaterThan(num1, num2) {
let boolean = false;

    if(num2 > num1){
        boolean = true;
    } else {
        boolean = false;
    }
    return boolean;
}

console.log(greaterThan(3,4));

//      04 | secondLargest
//      Write a function called secondLargest that takes an array and returns the second largest 
//      number. Hint: this is similar to one of the problems you did yesterday.

console.log("                                                   ")
console.log("---   04  | secondLargest   -----------------------");
console.log("                                                   ")

function secondLargest(numbers) {

let largest = 0;

for (let count = 0; count < numbers.length; count++){
    if (numbers[count] > largest){
        largest = count;
    }
}
 
 numbers.splice(largest,1);

 for (let count = 0; count < numbers.length; count++){
    if (numbers[count] > largest){
        largest = numbers[count];
    }
}

    return largest;
}

console.log(secondLargest([45, 12, 50, 104, 23]));

//      05 | containsVowel
//      Write a function called containsVowel that takes a single string and returns true 
//      if there is at least one vowell or false otherwise.

console.log("                                                   ")
console.log("---   05  | containsVowel   -----------------------");
console.log("                                                   ")

function containsVowel(word) {

let vowels = 0;
let result = false;

for (let count = 0; count < word.length; count++){
  if(word[count] === 'a' || word[count] === 'e' || word[count] === 'i' || word[count] === 'o' || word[count] === 'u'){
        result = true;
  }
}

return result;

}

console.log(containsVowel('aero'));

//      06 | pigLatin
//      Write a function called piglatin that takes a single string and returns the piglatin version of that string.

console.log("                                                   ")
console.log("---   06  | pigLatin   ----------------------------");
console.log("                                                   ")

function pigLatin(phrase) {

let array = phrase.split(" ");

for (let count = 0; count<array.length; count++){
    let arraytwo = array[count].split("");
    arraytwo.push(arraytwo.shift());
    let pig = arraytwo.join("")+"ay";
    console.log(pig);
}

return pigLatin;

}

console.log(pigLatin('come now'));

//      07 | longestWord
//      Write a function called longestWord that takes a single string and returns the longest word in the string.

console.log("                                                   ")
console.log("---   07  | longestWord   -------------------------");
console.log("                                                   ")

function longestWord(sentence) {

let array = sentence.split(" ");
longestWord = array[0];

for(let count = 0; count<array.length; count++){
    if (array[count].length > longestWord.length) {
        longestWord = array[count];
    }
}

return longestWord;

}

console.log(longestWord('this is a short sentence'));    

