//Data from animals.json file

var allAnimals = [{
    "species": "dog",
    "tagline": "Can I get a woof woof?",
    "noises": ["ruff", "bark", "arff", "growl"],
    "relationships": {
        "friends": ["horse", "cat"],
        "matches": ["bird", "rabbit"]
    }
}, {
    "species": "horse",
    "tagline": "I'm your stallion",
    "noises": ["nahhh", "snort", "neehhh", "pufffff"],
    "relationships": {
        "friends": ["dog", "mouse", "cat"],
        "matches": ["bird", "rabbit"]
    }
}, {
    "species": "rabbit",
    "tagline": "I'm a jack-rabbit, baby!",
    "noises": ["fluff", "scratchy-scratch", "thump", "sot"],
    "relationships": {
        "friends": ["dog", "cat"],
        "matches": ["bird", "horse"]
    }
}, {
    "species": "cat",
    "tagline": "YOLO! Sike I live 9 times!",
    "noises": ["Meow", "purr", "screech", "sissst"],
    "relationships": {
        "friends": ["dog", "rabbit"],
        "matches": ["bird", "horse"]
    }
}];

var dog = allAnimals[0],
    cat = allAnimals[3],
    rabbit = allAnimals[2],
    horse = allAnimals[1];


//Use this file to implement Part One of your project

var animal = {
    species: 'duck',
    tagline: 'Afflac',
    noises: ['quack', 'honk', 'sneeze', 'growl']
};
//Number One
var animalArray = [];

function objKeyPrinter(obj) {
    for (var key in obj) {
        animalArray.push(key);
    }
    return animalArray.join(' ');
}

//console.log(objKeyPrinter(animal));

//Number Two
var valueArray = [];

function objValuePrinter(obj) {
    for (var key in obj) {
        if (typeof animal[key] == 'string') {
            valueArray.push(obj[key]);
        }
    }
    return valueArray.join(' ');
}

//console.log(objValuePrinter(animal));

//Number Three
var arrValue = [];

function arrValuePrinter(obj) {
    for (var key in obj) {
        if (Array.isArray(obj[key])) {
            arrValue.push(obj[key]);
        }
    }
    return obj[key].join(' ');
}
//console.log(arrValuePrinter(animal));

//Number Four

function dataTypeChecker(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    }
    else {
        return 'object';
    }
}

// console.log(dataTypeChecker([1,2,3]));
// console.log(dataTypeChecker({1:'one', 2:'two',3:'three'}));

//Number Five: takes an object, capitalizes the first letter of each string value in the object

function capitalizeVals(obj) {
    var capitalize = [];
    for (var key in obj) {
        if (!Array.isArray(obj[key])) {

            capitalize.push(obj[key]);
        }
    }
    var newString = capitalize.toString();

}




//console.log(capitalizeVals(animal));

//Number Six

// function strCapitalizer(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(0)) {
//             str[i].toUpperCase();
//         } else if () 
//     }
// }


// http://stackoverflow.com/questions/4268272/javascript-capitalization-of-each-word-in-string
function strCapitalizer(val) {
    var newVal = '';
    val = val.toLowerCase().split(' ');
    for (var c = 0; c < val.length; c++) {
        newVal += val[c].substring(0, 1).toUpperCase() + val[c].substring(1, val[c].length) + ' ';
    }
    return newVal;
}

//console.log(strCapitalizer('quack honk sneeze growl'));

//Number Seven: Unique use filter
var copies = [2, 4, 6, 6, 8];


var seen = {};
console.log(copies.filter(function(val) {
    if (seen[val]) {
        return false;
    }
    else {
        seen[val] = true;
        return true;
    }
}));

//stackoverflow.com/a/14438954

///Scenario 1

//Write a function named welcomeMessage that takes an animal object like this one: 
//{ species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] } 
//and returns a string that says "Welcome, \ !".

function welcomeMessage(obj) {
    for (var key in obj) {
        return "Welcome, " + obj[key] + "!"
    }
}

//console.log(welcomeMessage(animal));

//

function profileData(obj) {
    var profile = [];
    for (var key in obj) {
        if (!Array.isArray(obj[key])) {
            profile.push(key + ":" + obj[key]);
        }
    }
    return profile.toString();
}

//console.log(profileData(animal));

//Edit your profileData function to include the noises array with its value
function profileData2(obj) {
    var profile = [];
    for (var key in obj) {
        profile.push(key + ":" + obj[key]);
    }
    return profile.toString();
}

//console.log(profileData2(animal));



//Section 1b
function relationshipLogger(obj) {

    for (var key in obj) {
        if (key === 'relationships') {
            return key;
        }
        else {
            return "You have no relationships :(";
        }
    }
}

console.log(relationshipLogger(animal));




//Write a function that takes two parameters, the species name and an animal object. 
//The function returns the relationship between the species and animal.

var barkers = {
    species: 'dog',
    tagline: 'Who let the dogs out?',
    noises: ['bark', 'woof', 'arrf', 'growl']
};

var meowers = {
    species: 'cat',
    tagline: 'YOLO! Sike, I live 9 times!',
    noises: ['meow', 'purr', 'scratch', 'screech']
};



// function whatsTheRelationship(obj1, obj2) {
// for (var key in obj1)  {}
// if(obj1[key] =='dog') {
//     return '??? is a match of ' + animal[species];
// } else if (animal.species == '????') {
//     return '???? is a friend of ' +animal[species];
// } else {
//     return '????? and ' + animal[species] + " have no relation yet";
// };

// }




// console.log(whatsTheRelationship());
//

//function addFriend() {}

//
//function addMatch() {}



var addMatch = function(species, animal) {
    animal.relationships.matches.push(species);
    return animal;
}

//objects are passed around by reference
//meaning a variable can either represent the actual thing (passed around by a value)
//or

//extend

// var extend = function (oldObj, newObj) {
//     for(var key in obj)
// }

//Scenario 2
//print out a list of animals that are not friends with the animal passed in
var friendsList = ['cow', 'bird', 'dog', 'duck', 'frog', 'chipmunk'];


// function nonFriends(species) {
//   var notFriends = [];  animal.relationships.friends
// }

// animals[i].species
// for(var i = 0; i < animals.length; i++) {
//     if(animals[i].species ) {

//     }
// }

// for(var i = 0; i < array.length; i++){}
// Scenario 2: Browse Animals Page

// nonFriends is a function that shows which animals in your collection are not in your friendlist. You don't want current friends to show up while you are browsing for new friends.
// You can choose to present this data in a way that makes the most sense to you and how you want to present this data to your user.
var nonFriends = function(animal, list) {
    var speciesList = [];
    var nonFriendsResults = [];
    for (var i = 0; i < animals.length; i++) {
        speciesList.push(list[i].species);
    }
    for (var a = 0; a < speciesList.length; a++) {
        if (animal.relationships.friends.indexOf(speciesList[a]) === -1) {
            nonFriendsResults.push(speciesList[a]);
        }
        return (nonFriendsResults);
    }
};

//brian's solution
var nonFriends = function(animals, animal) {
    var nonFriendsArr = [];
    var friends = animal.relationships.friends;
    var i, currentAnimal;
    for (i = 0; i < animals.length; i++) {
        currentAnimal = animals[i].species;
        if (friends.indexOf(currentAnimal) === -1) {

        }
    }
}

//ben's solution
var nonFriends = function(animals, animal) {
    var allSpecies = animals.map(function(an) {
        return an.species;
    });
    return allSpecies.filter(function(species) {
        return animal.relationships.friends.indexOf(species) === -1;
    });
};


//Scenario 3 

//search takes a search query and returns an array of animal objects that contain 
//an exact match anywhere in the body of the object.


//change animals to allAnimals
function search(query) {
    var searchResults = [];
    for (var i = 0; i < allAnimals.length; i++) {
        if (allAnimals[i].species.indexOf(query) !== -1) {
            searchResults.push(allAnimals[i]);
        }
        else if (allAnimals[i].relationships.friends.indexOf(query) !== -1) {
            searchResults.push(allAnimals[i]);
        }
        else if (allAnimals[i].relationships.matches.indexOf(query) !== -1) {
            searchResults.push(allAnimals[i]);
        }
    }
    return searchResults;
}

console.log(search('mouse'));

//Write a function that ensures that no friends in your friendslist are repeated. 
//It might take an array and return that array without any duplicate entries.

function unique(arr) {
    //  var newArr = [];
    var seen = {};

    return arr.filter(function(val) {
        if (seen[val]) { //if this contains SOMETHING
            return false;
        }
        else {
            seen[val] = true;
            return true;
        }
    })
}


function cleanFriends(animal) {
    return unique(animal.relationships.friends);
}


/// Scenario 4 == Edit Profile Page
//Create a function that takes your animal object, the key you wish to change and the new value.

function profileEdit(animal, key, value) {
    return animal[key] = value;
}

console.log(profileEdit(dog, 'species', 'puppy')); //make sure key is in quotes when calling function


//Scenario 5: Edit Animal Collection Data

//Write a function that creates a new animal object and adds it to the animals collection. 
//You might want to pass in the species values, friends, etc as arguments into your function.

//write a function that creates a new animal object and adds it to 
//the animals collection. You might want to pass in the species, value,
//friends, etc as arguments into your function

//noises, matches and friends must be entered as arrays of strings in this function

function newAnimal(species, tagline, noises, matches, friends) {
    var freshMeat = {};
    //create the relationships object inside of the new animal object
    freshMeat.relationships = {};

    //create key value pairs with each input, species & tagline
    freshMeat.species = species;
    freshMeat.tagline = tagline;

    //checking that parameter 'noises' is an array before continuing to append
    if (Array.isArray(noises) == false) {
        console.log("Noises must be an array of strings");
    }
    else {
        freshMeat.noises = noises
    }

    //add the matches to the relationships object    
    if (Array.isArray(matches) == false) {
        console.log("Matches must be an array of strings");
    }
    else {
        freshMeat.relationships.matches = matches
    }

    //add the friends to the relationships object
    if (Array.isArray(friends) == false) {
        console.log("Friends must be an array of strings");
    }
    else {
        freshMeat.relationships.friends = friends
    }

    //add newAnimal to the allAnimals array
    allAnimals.push(freshMeat);
}

//Harvey's Solution:
function newPerson(species, tagline, noises, friends, matches) {
    var freshMeat = {
        species: species || '',
        tagline: tagline || '',
        noises: noises || [],
        relationships: {
            friends: friends || [],
            matches: matches || []
        }
    };
    allAnimals.push(freshMeat);
}




//cleanseData is a function that takes the animals collection and a series of key names. 
//It will remove any properties on the animal objects that are not given as arguments

//cleanseData is a function that takes the animals collection and 
//a series of key names. It will remove any properties on the animal
//that are not given as arguments



// pass in collection: allAnimals (which is an array of objects)
// pass in array of object key pairs

// var tokeep = array of objects key pairs

// for loop through array of allAnimals) x-animals
//     for  key in animal[i](orsomething) x-keys in each animal
//          if the animal[i]key(orsomething) is not in toKeep, delete it  

function cleanseData(collection, keep) {
    for (var i = 0; i < collection.length; i++) {
        for (var key in collection[i]) {
            if (keep.indexOf(key) === -1) {
                delete collection[i][key];
            }

        }

    }

}

console.log(cleanseData(allAnimals, ['tagline']));
