

// the higher order component(HOC) is a function which recives a component to extends/wrap/compose
function withBorder(Component){
    return (props)=>{
        return (
            <div style={{border:"2px solid blue",padding:"7px"}}>
                <Component {...props}/>
            </div>
        )
    }
}
export default withBorder;