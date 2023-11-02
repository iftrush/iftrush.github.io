function averageThreeNumbers(a, b, c) {
    return (a + b + c) / 3;
}

function createSentence(num, noun) {
    return 'On average, a Berkeley student has ' + num + ' ' + noun + '\'s';
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

const sentence = createSentence(avg, 'cat');

console.log(sentence);