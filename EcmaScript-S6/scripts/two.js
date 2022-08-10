import add, {multiply, calc} from './one.js'

console.log("in two.js");

function process(){

    console.log("in two.js process");
    add(2,3);
    calc(2,2);
    multiply(6,7);

}

export default process;