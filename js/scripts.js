$(document).ready(function(){



  $("#sentence_field").submit(function(event){
    event.preventDefault();

    var inputSentence = $("input#sentenceinput").val();
    var words = inputSentence.split(" ");
    var pigLatinWords = [];
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

    var isVowell = function(letter) {
      for(var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
          return true;
        }
      }
      return false;
    };

    var isConsonant = function(letter) {
      for(var i=0; i < consonants.length; i++){
        if (letter === consonants[i]){
          return true;
        }
      }
      return false;
    };

    for (var i = 0; i < words.length; i++){

      var wordLetters = words[i].toLowerCase().split("");

      console.log(wordLetters);

      /*if(wordLetters.length === 1 && isVowell(wordLetters[0])) {
        console.log("yes");
        pigLatinWords.push(wordLetters[0] + "ay");
      }

      else if(wordLetters.length > 1 && isVowell(wordLetters[0])) {
        console.log("yes");
        pigLatinWords.push(words[i].toLowerCase() + "ay");
      }*/

      if(isVowell(wordLetters[0])) {
        pigLatinWords.push(words[i].toLowerCase() + "ay");
      }

      else if(isConsonant(wordLetters[0])) {

        var temp = wordLetters[0];
        wordLetters.shift();
        wordLetters.push(temp);
        pigLatinWords.push(wordLetters.join("").toLowerCase() + "ay");
      }

      else {
        pigLatinWords.push(wordLetters[0]);
      }

    }

    console.log("Pig Latin: " + pigLatinWords);



  });
});



/*





For words beginning with one consonant, move the first consonant to the end, and add "ay".
	◦	Example Input: dog
	◦	Example Output: ogday
For words beginning multiple consonants, move all of the first consecutive consonants to the end, and add "ay".
	◦	Example Input: string
	◦	Example Output: ingstray
If the first consonants include "qu", move the "u" along with the "q".
	◦	Example Input: queen
	◦	Example Output: eenquay
If the first consonants are not “qu” but there is a “qu” before the first vowell, move the consonants and ”u” along with the "q".
	◦	Example Input: squeal
	◦	Example Output: ealsquay
For words beginning with "y", treat "y" as a consonant.
	◦	Example Input: year
	◦	Example Output: earyay




    The program adds "ay" to single-letter words beginning with a vowel.
    	◦	Example Input: i
    	◦	Example Output: iay

      The program adds "ay" to multi-letter words beginning with a vowel.
      	◦	Example Input: in
      	◦	Example Output: inay

      The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
        	◦	Example Input: 3
        	◦	Example Output: 3


*/
