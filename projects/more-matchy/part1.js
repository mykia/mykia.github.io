//Use this file to implement Part One of your project

var animal =  { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] };

function objKeyPrinter(obj) {
    for (var key in obj) {
        console.log(key);
    }
    
}

console.log(objKeyPrinter(animal));




