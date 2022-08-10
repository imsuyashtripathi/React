function Hello(props){
    console.log("hello props",props);
    return (
        <div>
            <h3 style={{color:props.color}}>Message:{props.message}</h3>
            <p>This is a simple functional component</p>
            <p>Generated at {new Date().toLocaleString()}</p>
        </div>
    )
}
export default Hello;