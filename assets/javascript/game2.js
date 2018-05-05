//array of bodyParts
var bodyParts = ["nose", "eyes", "feet", "hands", "chest", "ears", "mouth",
    "teeth", "hair", "cheek", "chin", "knee cap", "wrist", "shoulder", "elbow",
    "toe nails"
];

//Choose random word
var randomWord = Math.floor(Math.random() * bodyParts.length);
var rightPart = [];
var wrongPart = [];
var dashes = [];
var choosenBodyParts = bodyParts[randomWord];


var docDashes = document.getElementsByClassName('dashes');

//test
console.log(choosenBodyParts);

//Create dashes for length of word
var createDashes = () => {
    for (var i = 0; i < choosenBodyParts.length; i++) {
        dashes.push('__');
    }
    return dashes;
}
console.log(createDashes());

//Get users guess
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
//Is guess right?
    if(choosenBodyParts.indexOf(keyword) > -1){
    //If guess is right
        rightPart.push(keyword);
        docDashes[0].innerHTML = dashes.join('');
    //Replace dashes with right letter
        dashes[choosenBodyParts.indexOf(keyword)] = keyword;
        if(dashes.join('') == choosenBodyParts){
            alert('You Win!');
        }
        else {
            wrongPart.push(keyword);
            console.log(wrongPart);
        }
       
    }
});








