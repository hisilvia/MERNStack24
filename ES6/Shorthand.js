//Date: 10/18/2024
//1.Shorthand.js
//Shorthand: Removes the redundant variable, name used as key
//in a json object if the key name and the value for that key if we wish to read both are same
//then shorthand allows us to use just the variable to create complete object

let lion = "roar", birds = "chirp", cow = "moo", dogs = "bark";

let animalSound = {
    lion : lion,      //key and value of the variable are identical--- usually "lion":lion--"lion" is a key
    birds : birds,
    cow : cow,
    dogs : dogs
}
console.log(animalSound)

//when using the shorthand we can only use the variable name that holds the value and it works by mapping it self
// lion: lion ---is duplicated, so we can use one
let animalSoundES6 = {
    lion,
    birds,
    cow,
    dogs
}
console.log(animalSoundES6)  //==>same result

//To print with concatenation
console.log("Different animal sounds are", animalSoundES6)
//String  + toString() of next object => returns data type
console.log("Different animal sounds are" + animalSoundES6)    //==>return object

//If we explicitely concatenate values we must stringfy before use
console.log("Different animal sounds are " + JSON.stringify(animalSoundES6))

//console.log() method is implementing JSON.stringify() when we use object with, (comma)
//-----module.exports = animalSoundES6

console.log("------------------------2.templateLiteral-------------------------")
