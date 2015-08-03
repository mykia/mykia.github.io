// Use this file to implement Part One of your project

var animal = {};

animal.species = "elephant";

//console.log(animal.species);


animal["tagline"] = "I never forget!";
//console.log(animal);


animal.noises = null;
console.log(animal)


// create variable called noise array and assign empty array
var noiseArray = [];

//use bracket notation to add noise to array
noiseArray[0] = "trumpet";

console.log(noiseArray);

//use native array method to add noise to array
noiseArray.push("oink");

//use native array method to add noise to front of array
noiseArray.unshift("cocka doodle doo");

//use bracket notation to add noise to end of array
noiseArray[noiseArray.push("baah")];

//check length of array
noiseArray.length // returns 4

/*The last index on noiseArray is 3. 
It's different from the length by one because the index starts at 0

noiseArray = ["cocka doodle doo", "trumpet", "oink", "baah"]

*/

var noises = 'noises';

//Use the noises variable with the animal object to access the value 'null'
console.log(animal.noises);

//add replace null with noiseArray
animal.noises = noiseArray;

console.log(animal.noises);

//STEP 2
var animals = [];

animals.push(animal);

var quackers = { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'squeak'] };

animals[animals.push(quackers)];

var barkers = { 
    species: 'dog', 
    tagline: 'Who let the dogs out?', 
    noises: ['bark', 'woof', 'arrf', 'growl'] };
    
var meowers = { 
    species: 'cat', 
    tagline: 'YOLO! Sike, I live 9 times!', 
    noises: ['meow', 'purr', 'scratch', 'screech'] };
    
animals.push(barkers, meowers);
console.log(animals);

///STEP THREE: Create relationships between animals

//choose a data structure for list of friends
//choosing an array because it's just a list of friends' names

var friends = [];

//Using your animals array, add two species to the friends data structure.
friends.push(animals[0].species, animals[1].species);
console.log(friends);

//Create relationships object

var relationships = {};
relationships['friends'] = friends;

console.log(relationships);
 //create an array called matches
var matches = [];

//add matches to relationships object

relationships['matches'] = matches;

//
relationships.matches.push('dog', 'cat');

//add relationships to each object in animals array


for(var i=0; i < animals.length; i++){
  animals[i].relationships = relationships;
}

console.log(animals);




