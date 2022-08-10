console.log("Scopes.js");

var x=10;//global
console.log("x: ",x);//10

var y;
console.log("y: ",y);//undefined

//console.log("z: ",z);//reference error



function foo(){
    console.log("In foo")
    if(x>5){
        let msg="Hello!";
        console.log("msg",msg);
    }

}
foo();
console.log("App Over");