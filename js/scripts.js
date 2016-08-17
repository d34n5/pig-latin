$(document).ready(function(){
  $("#sentence_field").submit(function(event){
    event.preventDefault();

    var inputSentence = $("input#sentenceinput").val();
    var words = inputSentence.split(" ");
    var pigLatinWords = [];
    var vowels = ["a", "e", "i", "o", "u","y"];
    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

    // Function to determine if character is a vowel
    var isVowell = function(letter) {
      for(var i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
          return true;
        }
      }
      return false;
    };

    // Function to determine if character is a consonant
    var isConsonant = function(letter) {
      for(var i=0; i < consonants.length; i++) {
        if (letter === consonants[i])
          return true;
      }
      return false;
    };

    // Main Loop: cycle through each input word
    for (var i = 0; i < words.length; i++){
      var wordLetters = words[i].toLowerCase().split("");
      var firstVowel = -1;
      var quExists = false;
      var firstQ = -1;

      // Determine where the first vowel is in the word
      for(var j=0; j < wordLetters.length; j++) {
        if(j === 0 && wordLetters[j] === "y") {}
        else if(isVowell(wordLetters[j])) {
          firstVowel = j;
          break;
        }
      }

      // Determine if "qu" exists befor the first vowel and its index
      firstQ = wordLetters.indexOf("q");
      if(firstQ > -1 && firstQ < firstVowel && wordLetters[firstQ+1]=== "u" )
        quExists = true;

      // Main business logic that determines how to process the words
      if(firstVowel === 0 && wordLetters[0] != "y")
        pigLatinWords.push(words[i] + "ay");
      else if (quExists) {
        for(var j=0; j <= (firstQ +1); j++){
          wordLetters.push(wordLetters.shift());
        }
        pigLatinWords.push(wordLetters.join("") + "ay");
      }
      else if(firstVowel === 1 && (isConsonant(wordLetters[0]) || wordLetters[0] === "y")) {
        var temp = wordLetters.shift();
        wordLetters.push(temp);
        pigLatinWords.push(wordLetters.join("") + "ay");
      }
      else if(firstVowel >= 2) {
        for(var j=0; j<firstVowel; j++){
          wordLetters.push(wordLetters.shift());
        }
        pigLatinWords.push(wordLetters.join("") + "ay");
      }
      else
        pigLatinWords.push(wordLetters.join(""));
    }


    // User Interface
    $(".pigAnswer").remove();
    $("#sentenceOutput").append("<h3 class=\"pigAnswer\">" + pigLatinWords.join(" ") + "</h3>")

  });
});
