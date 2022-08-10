//function statement
// implicits args =>this, arguments
function sum(x,y){
    console.log("In sum....",this);
    console.log("In sum....",arguments);
}
sum(2,3);
sum();
sum(2,3,4,5,6);

var add= function(x,y){
    console.log("in add");
}
add();

//arrow function

var calc= (x,y)=>{
    console.log("in calc");
}

calc();

calc= (x,y)=>console.log("calc",x,y);
calc(8,9);

let squareIt=x=>x*x;
console.log("squareIt",squareIt(13));

const obj={
    id:10,
    print:function(){
        console.log("Printing obj Id: ",this);
        setTimeout(() => {
            console.log("Printing obj Id after 2 sec:",this);
        }, 2000);
    }
}
obj.print();