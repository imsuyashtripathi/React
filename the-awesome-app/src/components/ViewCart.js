import {useSelector, useDispatch} from 'react-redux';
import { removeItemFromCartAction } from '../state/redux/actionCreators';

function ViewCart(){

    const cart = useSelector(state => state.gadgets.cart);
    const dispatch = useDispatch();

    function remove(item){
        //dispatch({type: "REMOVE_FROM_CART", id: product.id})
        dispatch(removeItemFromCartAction(item.product.id));
    }   

    return (
        <div>
        <h3>Cart</h3>

        <div className="row row-cols-1 row-cols-md-2 g-4">
            {cart.map((item, index) => {
                return (
                    <div className="col" key={index}>
                        <div className="card bg-light mb-3 border-success">
                            <p className="card-header">{item.product.name}</p>
                            <div className="card-body">
                                <p className="card-text">{item.product.description}</p>
                                <p className="card-text">Quantity: {item.quantity}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default ViewCart;