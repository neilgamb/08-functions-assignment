
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
let arr2 = phrase.split("");

for (let count = 0; count<array.length; count++){
    let arraytwo = array[count].split("");
    arraytwo.push(arraytwo.shift());
    let pig = arraytwo.join("")+"ay";
    console.log(pig);
}

return phrase;

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

//      08 | weave
//      Write a function called weave that accepts an input string and number. The function should return the 
//      string with every xth character replaced with an 'x'.


console.log("                                                   ")
console.log("---   08  | weave   -------------------------------");
console.log("                                                   ")


function weave(string, num) {

let array = string.split('');

for (let count = num - 1; count < array.length; count = count + num){
     array[count] = 'x';
 
}

return array;

}

console.log(weave('This is a string', 3));    

//      09 | bonus
//      Jeb eats out at restaurants all the time but is horrible at math. He decides to write a 
//      function called bonus that accepts a single parameter (the cost of the meal), and should 
//      return the tip Jeb should give his waiter. Jeb uses two rules to calculate tips:

//      First he always tips 20% on the original bill.
//      He then rounds up to the nearest dollar. For example, if the total with tip is $22.78, he'd round up to $23.00.


console.log("                                                   ")
console.log("---   09  | bonus   -------------------------------");
console.log("                                                   ")


function bonus(bill) {

let tip = bill * .2;
let total = Math.ceil(bill + tip);

return total;

}

console.log(bonus(125.56));    

//      10 | multiples
//      Write a function called multiples that accepts two numbers and returns an array of all 
//      numbers from 1 - 100 that are evenly divisible by both.


console.log("                                                   ")
console.log("---   10  | multiples   ---------------------------");
console.log("                                                   ")


function multiples(num1, num2) {

let array = [];

for (let count = 1; count < 101; count++){
     if(((count/num1) % 1) === 0 && ((count/num2) % 1) === 0){

        // array[count] = count; Want to figure out why this one creates ',' in between "true" iterations
        array.push(count); 
    }
}

return array;

}

console.log(multiples(4, 9));    

//      11 | blackjack
//      Write a function called blackjack that accepts an array containing a hand of cards represented by the 
//      digits 2 - 9 and the values J, Q, K, and A. Return true if the hand busts (the value of the cards is > 21) 
//      or false if it hasn't busted.

//      According to the rules of blackjack, an ace can be worth either 1 or 11. You should make it 11 unless that 
//      causes the hand to bust, in which case it should be 1 (just like if you play in person).


console.log("                                                   ")
console.log("---   11  | blackjack   ---------------------------");
console.log("                                                   ")


function blackjack(cards) {

let sum = 0;
let result = true;

for (let count = 0; count < cards.length; count++){
    if(cards[count] === 'J' || cards[count] === 'Q' || cards[count] === 'K') {
        cards[count] = 10;
        if (cards[count] === 'A') {
            cards[count] = 0;
        }
    }
        sum = sum + cards[count];
}

return sum;

}

console.log(blackjack(['A', 9]));    

//      12 | divisors
//      Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evnely into it.


console.log("                                                   ")
console.log("---   12  | divisors   ----------------------------");
console.log("                                                   ")


function divisors(num) {

let array = [];

for (let count = 0; count <= num; count++){
    if ((num % count) == 0){
            array.push(count); 
    }
}

return array;

}

console.log(divisors(450));    

//      13 | hamming
//      Write a function called hamming that accepts two strings. If the lengths of the strings are not equal, the function 
//      should return zero. Otherwise, return the number of letters that are in the same position in both words.


console.log("                                                   ")
console.log("---   13  | hamming   -----------------------------");
console.log("                                                   ")


function hamming(stringOne, stringTwo) {

let countLetters = 0;

if (stringOne.length === stringTwo.length){

    for (count = 0; count<stringOne.length;  count++){
        if (stringOne[count] === stringTwo[count]){
            countLetters++;
        }
    } 

}

return countLetters;

}

console.log(hamming("Three", "Three"));   


//      14 | pokemon
//      Write a function called pokemon that accepts an array of numbers. Each element in the array represents a day, 
//      and the number represents the number of Pokemon caught on that day. Return an array of the same length that 
//      contains the number of total Pokemon caught up to that day.

console.log("                                                   ")
console.log("---   14  | pokemon   -----------------------------");
console.log("                                                   ")

function pokemon(captures) {

let sum = 0;
let arrayCap = [];

for (let count = 0; count < captures.length; count++){

    sum = sum + captures[count];
    arrayCap.push(sum); 
    
}
return arrayCap;
}

console.log(pokemon([1, 2, 5, 1, 3]));


