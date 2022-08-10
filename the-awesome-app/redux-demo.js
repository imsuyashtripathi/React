const redux=require('redux');
const createStore=redux.createStore;

console.log("Redux flow example");

//initial data
const initState={
    count:10,
    message:"Hello redux"
}

//reducer
const reducer=(currentState=initState,action)=>{
    console.log("Reducer: recived action",action);
    // return the updated request
    if(action.type==="INC_CTR"){
        return{
            ...currentState,
            count: currentState.count+1
        }
    }
    if(action.type==="INC_CTR_BY"){
        return{
            ...currentState,
            count: currentState.count+action.value
        }
    }
    if(action.type==="DEC_CTR"){
        return{
            ...currentState,
            count: currentState.count-1
        }
    }
    return currentState;
}

const store=createStore(reducer);
console.log("State:",store.getState());
// subscribe 

store.subscribe(()=>{
    console.log("In subscriber state:",store.getState());
})
//dispatch an action =>store.dispatch(action)=>action is an object

store.dispatch({type:"INC_CTR"});
console.log("State",store.getState());
store.dispatch({type:"INC_CTR_BY",value:100});
console.log("State",store.getState());
store.dispatch({type:"DEC_CTR"});
console.log("State",store.getState());