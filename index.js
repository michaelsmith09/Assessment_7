//Sum Zero
let array = [];
let arrayTwo = [1];
let arrayThree = [1, 2, 3];
let arrayFour = [1, 2, 3, 4];
let value = false;


for(let i = 0; i < array.length; i++) {

    for(let j = 0; j < array.length; j++) {
        if(i !== j) {
            if(array[i] + array[j] === 0) {
                value = true;
            }
        }
    }
}
// I would go with O(n) on Runtime.


// Unique Characters

function hasUniqueChars(word) {
    
    let uniqueChars = new Set([])
   
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    
    return uniqueChars.size === word.length
  }
// This Runtime I think could be an O(1).

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));


// Pangram Sentence

function isPangram(str) {
    mark = new Array(26).fill(false);
    let index;
    for (let i = 0; i < str.length; i++) {
 
        if ('A' <= str[i] && str[i] <= 'Z') {
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        }
        else if ('a' <= str[i] && str[i] <= 'z') {
             index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        } else continue;
 
        mark[index] = true;
    }

    for (let i = 0; i <= 25; i++) {
        if (mark[i] == false)
            return false;
    }
    return true;
}
// this one is going through a lot of factors to run and search through and would probably take long O(n2).

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))


// Longest Word

function longestWord(str){
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    console.log(longestWord(["hi", "hello"]))
  }
// I think this one would be O(n).

longestWord()