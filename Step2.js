// 1) Sum Zero


function addToZero (nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                if(nums[i] + nums[j] === 0){
                    return true
                }
            }
        }

    }
    return false
 }

console.log(addToZero([]))

console.log(addToZero([1]))

console.log(addToZero([1,2,3]))

console.log(addToZero([1,,2,3,-2]))

// TIME COMPLEXCITY: O(n^2)
// SPACE COMPLEXITY: O(1)

// 2) Unique Characters

  function hasUniqueChars(word) {
      for(let i = 0; i < word.length; i++){
          for(let j = i + 1; i < word.length; j++){
              if(word[i] === word[j]){
                  return false
              }
          }

      }
      return true
  }

  console.log(hasUniqueChars('monday'))
  console.log(hasUniqueChars('moonday'))

// TIME COMPLEXITY: O(n^2)
// SPACE COMPLEXITY: O(n)

// 3) Pangram Sentence

// function isPangram(string){
//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
//     for (let i = 0; i < alphabet.length; i++) {
//       if(strArr.indexOf(alphabet[i]) < 0){
//         return false;
//       }
//     }
//     return true;
//   }

  // TIME COMPLEXITY: O(N)
  // SPACE COMPLEXITY: O(N)

function isPangram(str){
    let alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    str = str.toLowerCase()

    for( let i = 0; i < str.length; i++){
        let letter = str[i]
        let index = alphaArr.indexOf(letter)
        if(index !== -1){
            alphaArr.splice(index, 1)
        }
    }
    if(alphaArr.length === 0){
        return true
    }else{
        return false
    }
}
console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
console.log(isPangram("I like cats, but not mice"))

// TIME COMPLEXCITY: O(N)
// SPACE COMPLEXITY: O(N)

  // 4) Longest Word

function findLongestWord(arr){
    let biggest = 0;
    for( let i =0; i < arr.length; i++){
        if(arr[i].length > biggest){
                biggest = arr[i].length
        }
    }
    return biggest
}
console.log(findLongestWord(['hi','hello', 'cat']))
  // RUNTIME:  O(n)
  // SPACE COMPLEXITY: O(n^2)
 

