//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

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
//noiseArray.length // returns 4

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




///////////////////////PART TWO//////////////////////////////////


var profileAnimal = animal.[0];

/*Loop through he properties of the animal, console.log the property name and if the property 
value is a string, also print that out. If the value is not a string, then just put a placeholder 
value of 'click here for data' */

for (var key in profileAnimal) {
    
    if (typeof profileAnimal[key] === 'string' ){
        console.log(key + ':' + profileAnimal[key]);
        
    } else {
        console.log(key +':' + 'click here for more details');
    }
}

for (var key in profileAnimal) {
    
    if (typeof profileAnimal[key] === 'string' || profileAnimal[key] !== relationships) {
        console.log(key + ':' + profileAnimal[key]);
        }else {
        console.log(key +':' + 'click here for more details');
    }
    
}
    console.log(animals.animal);
    
 console.log(relationships);
 console.log(relationships.friends);
 console.log(relationships.matches);
 
 
 // delete friend from friends list
 
 function deleteFriend(friend, friends) {
     var index = friends.indexOf(friend);
     if (index > -1) {
         return friends.splice(index, 1)[0];
     }
 }
 //or use this to delete from friends list
 function deleteThem(friend, arr) {
     for( var i = 0; i < arr.length; i++) {
         if(arr[i] === friend) {
            return arr.splice(i,1);
         };
     };
     return.arr;
 }


//Loop through animals collection and print out animal name and tagline

for(var i=0; i < animals.length; i++){
    
 console.log(animals[i].species + ': '+animals[i].tagline); 
}

//Add counter next to each animal

for(var i=0, j=1; i < animals.length && j < animals.length; i++, j++){
    
 console.log(j+'. '+ animals[i].species + ': '+animals[i].tagline); 
}

//Write a loop that goes through the animals collection and selects a particular species and logs its information
//for(var i=0; ; i++){
    for(key in animals[1]){
        console.log(key +':'+animals[1][key]);
    }
  //  break;
//}
function search(animals, species) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].species === species)
        return animals[i];
    }
}
var found = search(animals, 'dog');
found.relationships.friend.push(animals[0].species);
console.log(found);

user.species = 'rabbit';
user.noises = ['fluff', 'scratchy-scratch', 'thump', 'sot'];
console.log(user);

//Add a new friend to this animal that you 'searched' for.

animals[1].relationships.friends.push('bird');

//Add a new match to the same animal.

animals[1].relationships.matches.push('aardvark');
console.log(animals);





//==================  Scenario 4: Edit Animal Profile Page
//choose one animal to be the logged in user

var loggedInUser = animals[1].species;
console.log(loggedInUser);


animals[1].species = 'pitbull';
console.log(animals[1].species);
console.log(loggedInUser);






/////

// var login = animals[0].species;
// console.log(login);

// var elephantFriends = animals[0].friends;

// if(animals[i].species !== elephantFriends[i]) {
//     console.log(animals[i].species);
// }


/// Scenario 5 : Edit Animal Collection Data

//change species to name

// for(var i=0; i < animals.length; i++){
//     for(key in animals[1]){
//         console.log(key +':'+animals[1][key]);
//     }
    
//  console.log(animals[i]species + ': '+animals[i].tagline); 
// }