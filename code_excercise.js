const test = "From fairest creatures we desire increase, That thereby beauty's rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes.";


function toPigLatin(str) {
	const vowels = ["a", "e", "i", "o", "u"];
  const pigLatin = "";
  // clean input and push to array
  str.trim();
  const arr = str.split(" ");
  
  function punctuation(str) {
  	// if string has punctuation return index or false
  	const lastChar = str.charAt(str.length -1);
    if (lastChar.match(/[\,\:\.\?]/g)) {
    	return str.indexOf(lastChar);
    } else {
    	return false;
    }
  }

	//iterate through array of strings
  for (i=0; i<arr.length; i++) {
    // Checks for extra whitespace "words" in array
    if (arr[i].length > 0) {
    	const punct = punctuation(arr[i]);
        
    	// if first character is vowel add "way"
      if (vowels.indexOf(arr[i][0]) > -1) {
       	if (punct) {
          pigLatin += arr[i].substring(0, punct) + "way" + arr[i].substring(punct) + " ";
        } else { 
        	pigLatin += arr[i] + "way ";    
        }
    	} else {
      // find the first vowel and split 
    	const findVowel = arr[i].match(/[aeiou]/g) || 0;
      const vowel = arr[i].indexOf(findVowel[0]);
      
      //check for punctuation, add "ay" 
      if (punct) {
       pigLatin += arr[i].substring(vowel, punct) + arr[i].substring(0, vowel) + "ay ";
      } else {
      	pigLatin += arr[i].substring(vowel) + arr[i].substring(0, vowel) + "ay ";
      }
    	}
    }
  }

	return pigLatin;
}

console.log(toPigLatin(test));