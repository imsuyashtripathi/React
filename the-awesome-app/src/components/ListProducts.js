import React,{Component} from 'react';
import axios from 'axios';
import './ListProducts.css'
import EditProduct from './EditProduct';
import {connect} from 'react-redux';

class ListProducts extends Component{
    url="http://localhost:9000/secure_products"
    editProductRef=React.createRef(null);
    state={
        products:[],
        selectedProduct:null
    };

    constructor(props){
        super(props);
        console.log("[ListProduct constructor]");
    }
    componentWillMount(){
        console.log("[ListProduct componentWillMount]");
    }
    async componentDidMount(){
        // axios
        //     .get(url)
        //     .then((response)=>{
        //         console.log("success",response);
        //         const data=response.data;
        //     },(error)=>{
        //         console.log("Error",error);
        //     });
        // ES7 async/await => works with promise
        //console.log("[ListProduct componentDidMount]");
        try{
            //const headers={"Authorization":`Bearer ${this.props.auth.accessToken}`};
            const response= await axios.get(this.url);
            console.log("success",response);
            this.setState({
                products:response.data
            });
        }catch(error){
            console.log("Error",error);
        }
    }
    deleteProduct=async(product,index)=>{
        const url=this.url+"/"+product.id;
        try{
            const headers={"Authorization":`Bearer ${this.props.auth.accessToken}`};
            await axios.delete(url,{headers});
            alert("Deleted product with id:"+product.id);
            //copy of products
            const products=[...this.state.products];
            //modify the copy
            products.splice(index,1);
            //update the copy to the state
            this.setState({
                products
            })
        }catch(error){
            alert("Failed to delete product with id:"+product.id);
        }
    }
    editProduct=(product)=>{
        this.setState({
            selectedProduct:product
        });
    }
    editUpdate=async(updatedProduct)=>{
        try {
            const url=this.url+"/"+updatedProduct.id;
            await axios.put(url,updatedProduct);
            const response= await axios.get(this.url);
            this.setState({
                products:response.data,
                selectedProduct:null
            })
            alert("Update product "+updatedProduct.id);
        } catch (error) {
            alert("Falied to Update product "+updatedProduct.id);
        }
    }
    editCancel=(product)=>{
        alert("Cancelling the update");
        this.setState({
            selectedProduct:null
        })
    }
    callEditProductRef=()=>{
        
    }

    renderProducts(){
        const {products}=this.state;
        const result=products.map((product,index)=>{
            return(
                <div className="product" key={product.id} data-textid="product">
                    <p>Id:{product.id}</p>
                    <p>Name:{product.name}</p>
                    <p>Description:{product.description}</p>
                    <p>Price:{product.price}</p>
                    <div>
                        <button onClick={()=>{this.editProduct(product)}}>Edit</button>&nbsp;
                        <button onClick={()=>{this.deleteProduct(product)}}>Delete</button>
                    </div>
                </div>
            );
        })
        return result
    }

    render(){
        console.log("[ListProduct render]");
        const {selectedProduct}=this.state;
        return(
            <div>
                <h3>List Products</h3>
                <div className='alert alert-info'>{"Welcome "+this.props.auth.userName}</div>
                <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'center'}}>
                    {this.renderProducts()}
                </div>
                <div>
                    {
                        selectedProduct!==null?<button className='btn btn-warning' onClick={this.callEditProductRef}>Call editProductRef</button>:null
                    }
                </div>
                <div>
                    {selectedProduct!==null?
                            <EditProduct 
                                ref={this.editProductRef}
                                key={selectedProduct.id} 
                                currentProduct={selectedProduct}
                                onSave={this.editUpdate}
                                onCancel={this.editCancel}/>:null}
                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        console.log("[ListProduct componentWillReceiveProps]");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("[ListProduct shouldComponentUpdate]",nextProps,nextState);
        //continue with update 
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log("[ListProduct componentWillUpdate]",nextProps,nextState);
    }
    componentDidUpdate(){
        console.log("[ListProduct componentDidUpdate]");
    }
    componentWillUnmount(){
        console.log("[ListProduct componentWillUnmount]");
    }
}

const mapStateToProps=(reduxState)=>{
    return{
        auth:reduxState.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setAuth:(payload)=>dispatch({type:"SET_AUTH",payload})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListProducts);
//export default connect()(ListProducts);