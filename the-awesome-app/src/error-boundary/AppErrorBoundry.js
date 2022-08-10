import { Component } from "react";

class AppErrorBoundry extends Component{

    state ={
        hasError:false
    }
    componentDidCatch(error,info){
        if(error){
            this.setState({
                hasError:true
            },()=>{
                console.log("AppErrorBoundry ",error);
                console.log("AppErrorBoundry ",info);
            })
        }
    }
    render(){
        if(this.state.hasError){
            return <div className="alert alert-danger">Something went wrong,Please refresh!</div>
        }
        else{
            return this.props.children;
        }
    }
}
export default AppErrorBoundry;