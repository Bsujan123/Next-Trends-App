import './index.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/reducers/cartSlice';
import { useState } from 'react';
const ProductCard = props => {
  const dispatch = useDispatch();
  const [add,setAdd] = useState(false)
  
  const {productData} = props
  
  const {category,image,price,rating,title} = productData
  
  const addHandle = () => {
     if (!add){
         dispatch(addProduct(productData))
     }
     setAdd(true)
   
    
  
  }
  return (
    <li className="product-item" >
      <img src={image} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {category}</p>
      <div className="product-details">
        <div>
        <p className="price">Rs {price}/-</p>
         <button className ="add-button" onClick={addHandle}> {add?'ADDED':'ADD'} </button>
         </div>
        <div className="rating-container">
         
          <p className="rating">{rating.rate}</p>
         
        </div>
      </div>
    </li>
  )
}
export default ProductCard
