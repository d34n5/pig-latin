# Pig Latin Translater #

#### Javascript & jQuery-powered Pig Latin Translater ####

## by Tony Fuentes & Dean Scelza @ Epicodus, 8-17-16 ##

### Description & Technologies Used ###
This webpage translates English into Pig Latin.
Uses Javascript, & jQuery.

### Installation & Set-Up ###
1. Clone the repository: https://github.com/d34n5/pig-latin
2. Use your preferred browser to open index.html

## Project Specifications ##
A. Loop through all of the words that the user inputs
B. For each word:
  1. Determine index the first vowel
  2. Determine if "qu" exists in the word before the first vowel
  3. Apply the following rules and store the results:
      - For words beginning with a vowel, add "ay" to the end.
      - For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
      - If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
      - For words beginning with "y", treat "y" as a consonant.
C. Output the results and clear out old results if any

## Known Bugs ##
There are no known bugs.  However, we encourage both feedback and criticism: If you have ANY concerns, questions or suggestions, feel free to contact musat:  deanscelza@gmail.com

## License ##
**Copyright (c) 2016, Tony Fuentes & Dean Scelza @ Epicodus**
This software is licensed under the MIT license.
