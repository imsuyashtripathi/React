const initState = {
    userName:"",
    isAuthenticated: false,
    accessToken: "",
    refreshToken: ""
}


export const authReducer = (currentState=initState, action) => {

    if(action.type === "SET_AUTH"){
        return {
            
            ...action.payload
        }
    }
    return currentState;
}
