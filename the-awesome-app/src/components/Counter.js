import React, {Component} from 'react';
import withBorder from '../hoc/withBorder';

class Counter extends Component{

    constructor(props){
        super(props);
        console.log("Counter Props",this.props);
        this.state.count=this.props.initCount;
    }
    state= {
        count:0,
        message:"Hello"
    }
    inputRef=React.createRef();

    inc=(event)=>{
        console.log("inc invoked",event);
        console.log("inc",this);
        //this.setState(slice of the updated state)
        //setState is async
        this.setState({
            count:this.state.count+1
        });
    }
    dec=(event)=>{
        console.log("dec invoked",event);
        this.setState({
            count:this.state.count-1
        });
    }

    change=(event)=>{
        const value=event.target.value;
        this.setState({
            count:Number(value)
        });
    }
    update=()=>{
        const value=this.inputRef.current.value;
        this.setState({
            count :Number(value)
        });
    }
    render(){
        //return the jsx
        return(
            <div>
                <h3 className="alert alert-info">Counter: {this.state.count}</h3>
                <p>This is a class component</p>
                <div>
                    <button className="btn btn-success" onClick={this.inc}>Inc</button>&nbsp;
                    <button className="btn btn-warning" onClick={this.decr}>Decr</button>
                </div>
                <br/>
                <div>
                    
                    {/* Controlled Input */}
                    Count: <input type="number" className="form-control"
                                placeholder='Count' value={this.state.count} onChange={this.change}/>
                </div>
                <br/>
                <br/>
                <div>
                    {/* Uncontrolled Input */}
                    <input className="form-control" type="number" defaultValue={this.state.count} 
                        placeholder="Update Count" ref={this.inputRef}/>&nbsp;
                    <br/>
                    <button className="btn btn-info" onClick={this.update}>Update</button>                    
                </div>
            </div>
        )
    }
}
export default withBorder(Counter);