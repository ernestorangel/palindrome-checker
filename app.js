function palindromeChecker(originalWord){

    let lowerCaseWord = originalWord.toLowerCase();

    let alphanumericalChars = lowerCaseWord.match(/[a-z0-9]/gi);

    let fixedWord =  alphanumericalChars.join("");

    let wordSize = fixedWord.length;

    let steps;

    if (wordSize % 2 == 0) {

        steps = wordSize / 2;

    } else {

        steps = wordSize - 1 / 2;

    }

    for (let i = 0; i < steps; i++) {

        if (!(fixedWord[i] === fixedWord[wordSize - i - 1])) {

            return false;

        } 

    }

    return true;

}

console.log(palindromeChecker("Luc-as*sac_u."));
