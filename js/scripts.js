$(document).ready(function(){
  $("#sentence_field").submit(function(event){
    event.preventDefault();

    var inputSentence = $("input#sentenceinput").val();
    var words = inputSentence.split(" ");
    var pigLatinWords = [];
    var vowels = ["a", "e", "i", "o", "u","y"];
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
      var firstVowel = -1;
      var quExists = false;
      var firstQ = -1;

      for(var j=0; j < wordLetters.length; j++){
        if(j === 0 && wordLetters[j] === "y") {}
        else if(isVowell(wordLetters[j])) {
          firstVowel = j;
          break;
        }
      }

      firstQ = wordLetters.indexOf("q");
      if(firstQ > -1 && firstQ < firstVowel && wordLetters[firstQ+1]=== "u" )
        quExists = true;

      console.log(wordLetters + ", FV:" + firstVowel + ", FQ:" + firstQ);

      if(firstVowel === 0 && wordLetters[0] != "y") {
        console.log("Case1");
        pigLatinWords.push(words[i] + "ay");
      }
      else if (quExists) {
        console.log("Case2");
        for(var j=0; j <= (firstQ +1); j++){
          wordLetters.push(wordLetters.shift());
        }
        pigLatinWords.push(wordLetters.join("") + "ay");
      }
      else if(firstVowel === 1 && (isConsonant(wordLetters[0]) || wordLetters[0] === "y") ){
        console.log("Case4");
        var temp = wordLetters.shift();
        wordLetters.push(temp);
        pigLatinWords.push(wordLetters.join("") + "ay");
      }
      else if(firstVowel >= 2) {
        console.log("Case5");
        for(var j=0; j<firstVowel; j++){
          wordLetters.push(wordLetters.shift());
        }
        pigLatinWords.push(wordLetters.join("") + "ay");
      }
      else {
        console.log("Case6");
        pigLatinWords.push(wordLetters.join(""));
      }
    }

    console.log("Pig Latin: " + pigLatinWords);

    $(".pigAnswer").detach();
    $("#sentenceOutput").append("<h3 class=\"pigAnswer\">" + pigLatinWords.join(" ") + "</h3>")

  });
});
