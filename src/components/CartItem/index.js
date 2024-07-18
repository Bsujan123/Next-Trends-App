import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './index.css'

import { removeProduct } from '../../redux/reducers/cartSlice';

 function CartItem(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart)
 
    const {product} = props ;
    const {id,category,image,price,title} = product;



    const removeHandle = () => {
        
        const filteredProducts = data.products.filter((item) => item.id !== id);
        console.log(filteredProducts)
        dispatch(removeProduct({filteredProducts,price}))
    }
   
  return (
   
    <div className='big-container '>
    <div className='cart-main'>
        <div >
            <img className='image-container' alt = {title} src={image}/>
        </div>
        <div>
            <p>{title}</p>
            <p>{category}</p>
            <p>{price}</p>
            <button className='add-button' onClick={removeHandle}>REMOVE</button>
        </div>

      

    </div>

    </div>
    
  )
}


export default CartItem;