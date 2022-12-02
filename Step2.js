// 1) Sum Zero

let array = []

function twoNums (array){
 if(array[i] + array[i] === 0){
    return true
 } else{
     return false
 }
}
// RUNTIME: O(1)
// SPACE COMPLEXITY: O(1)

// 2) Unique Characters

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

// RUNTIME: O(N)
// SPACE COMPLEXITY: O(N)

// 3) Pangram Sentence

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  // RUNTIME: O(N)
  // SPACE COMPLEXITY: O(N)


  // 4) Longest Word

  function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

  // RUNTIME:  O(n^2)
  // SPACE COMPLEXITY: O(n^2)
 

