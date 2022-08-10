// Spread Operator
const numbers = [1,2,3,4,5];
//shallow copy
    //const copy_of_numbers = numbers;

//deep copy
const copy_of_numbers = [...numbers];
console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

numbers.push(6);

console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

const new_numbers = [...numbers, 10,11,12] ;
console.log("new_numbers", new_numbers);


// Template Literals

const name="Suyash";
const city="Bangalore";

const message = `The name is ${name}, the city is ${city}`;
console.log("Message", message);

//Destructuring

const obj = {
    id: 1, location: "India", type: "A"
};

// const id = obj.id; 
// const location= obj.location; 
// const type = obj.type;

const {id, type} = obj;