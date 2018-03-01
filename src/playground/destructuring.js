//Object destructuring

const person = {
    name: 'Fede',
    age: 30,
    location: {
        city: 'Quilmes',
        temp: 30
    }
};

const { 
    name: personName = 'Default Name', 
    age: personAge 
} = person;
 
console.log(personName, personAge);

//Array destructuring

const address = ['Alberdi', '118', '7A'];
const [ street, doorNumber, floor ] = address;
console.log(street, doorNumber, floor);