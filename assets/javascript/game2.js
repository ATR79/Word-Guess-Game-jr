//array of bodyParts

var bodyParts = ["nose", "eyes", "feet", "hands", "chest", "ears", "mouth", 
"teeth", "hair", "cheek", "chin", "knee cap", "wrist", "shoulder", "elbow", 
"toe nails"];

let randomWord = Math.floor(Math.random() * bodyParts.length);
let choosenBodyParts = bodyParts[randomWord];

console.log(choosenBodyParts);