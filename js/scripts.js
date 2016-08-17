$(document).ready(function(){



  $("#sentence_field").submit(function(event){
    event.preventDefault();

    var inputSentence = $("input#sentenceinput").val();
    console.log(inputSentence);





  });
});



/*


	•	The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
	◦	Example Input: 3
	◦	Example Output: 3
	•	The program adds "ay" to single-letter words beginning with a vowel.
	◦	Example Input: i
	◦	Example Output: iay
•	The program adds "ay" to multi-letter words beginning with a vowel.
	◦	Example Input: in
	◦	Example Output: inay
	•	For words beginning with one consonant, move the first consonant to the end, and add "ay".
	◦	Example Input: dog
	◦	Example Output: ogday
	•	For words beginning multiple consonants, move all of the first consecutive consonants to the end, and add "ay".
	◦	Example Input: string
	◦	Example Output: ingstray
	•	If the first consonants include "qu", move the "u" along with the "q".
	◦	Example Input: queen
	◦	Example Output: eenquay
	•	If the first consonants are not “qu” but there is a “qu” before the first vowell, move the consonants and ”u” along with the "q".
	◦	Example Input: squeal
	◦	Example Output: ealsquay
	•	For words beginning with "y", treat "y" as a consonant.
	◦	Example Input: year
	◦	Example Output: earyay


*/
