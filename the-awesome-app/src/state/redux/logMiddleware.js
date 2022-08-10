export const logMiddleWare=(store)=>{
    return(next)=>{
        return(action)=>{
            console.log("the log middleware state",store.getState());
            console.log("the log middleware action",action);
            const result= next(action);
            console.log("[log middleware after action]",store.getState());
            return result;
        }
    }
}