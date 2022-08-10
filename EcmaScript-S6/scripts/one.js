console.log("in one.js");

function add(x, y){
    console.log("in one.js add");
}

export function multiply(x, y){
    console.log("in one.js multiply");
}

export function calc(x, y){
    console.log("in one.js calc");
}


export default add;