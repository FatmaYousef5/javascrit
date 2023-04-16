const pascalCase = function (fullName) {

    let str = fullName.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt().toUpperCase() + str[i].slice(1);
    }
    const str2 = str.join(" ");
    return str2;
}


const longestWord = function (sentence) {
    let word = "";
    let longWord = sentence.split(" ");
    for (let i = 0; i < longWord.length; i++) {
        if (longWord[i].length > word.length) {
            word = longWord[i];
        }
    }
    return word + " and its length is " + word.length;
}


const randomArray = function () {
    let arrayRandom = [];
    for (i = 0; i < 5; i++) {
        Math.random(arrayRandom[i])*(10-1)+1;
        console.log(arrayRandom[i]);
    }
}

randomArray();
