//A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const addTheWordCool = function (array) {
    // add your code
    array.push("cool");
    return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = function (array) {
    return array.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3

// C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?
// 1 met index []
const selectBelgiumFromBenelux = function (array) {
    return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie" 

//2 met shift() => muteert wel array!!
const selectBelgiumFromBenelux = function (array) {
    return array.shift();
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie" 

//3 met slice => muteert ook niet, maakt een kopie van deel array, array terug
const selectBelgiumFromBenelux = function (array) {
    return array.slice(0, 1);
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie" 


//D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

//1 met [] en length -1
const lastElementInArray = function (array) {
    return array[array.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//2 met pop() => muteert array!
const lastElementInArray = function (array) {
    return array.pop();
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//3 met slice() => wel array terug, geen mutatie
const lastElementInArray = function (array) {
    return array.slice(-1);
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
    const newArray = array.slice(1, 4);
    console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
    return newArray;
};

const impeachTrumpSplice = function (array) {
    const removedElement = array.splice(0, 1);
    console.log("Removed element:", removedElement, "De mutated array, Trump is missing:", array);
    return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//splice muteert het array en slice niet!!

//F Write a simple JavaScript program to join all elements of the following array into a string (with spaces). ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

const stringsTogether = function (array) {
    return array.join(" ");
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"
//met toString() gewoon aan elkaar met, ertussen

//G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']

const combineArrays = function (array1, array2) {
    return array1.concat(array2);
};
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]

//of zo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArrays = function () {
    return array1.concat(array2);
};
console.log(combineArrays());