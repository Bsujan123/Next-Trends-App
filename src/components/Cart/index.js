import CartItem from '../CartItem'
import Header from '../Header'
import './index.css'
import {useSelector} from 'react-redux'


const Cart = () =>{
  const productsData = useSelector((state) => state.cart)
  console.log(productsData)
  
    
  
  return (
  <>
    <Header />
    {
    productsData.products.length === 0 ? 
     (
       <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
    </div>
    ):
    (
      <div>
        {productsData.products.map((product) => <CartItem key = {product.id} product = {product}/>)}
        <div>
          <h1 className='amount'>TOTAL AMOUNT :{Math.round(productsData.balance *100)/100} </h1>
        </div>
        

      </div>
    )
      
    
    
    }


  </>
)
} 

export default Cart



// import CartItem from '../CartItem';
// import Header from '../Header';
// import './index.css';
// import { useSelector } from 'react-redux';

// const Cart = () => {
//   const productsData = useSelector((state) => state.cart);
//   console.log(productsData);

//   if (!productsData || !productsData.products) {
//     return (
//       <div className="cart-container">
//         <h2>No products available</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Header />
//       {productsData.products.length === 0 ? (
//         <div className="cart-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
//             alt="cart"
//             className="cart-img"
//           />
//         </div>
//       ) : (
//         <div>
//           {productsData.products.map((product) => (
//             <CartItem key={product.id} product={product} />
//           ))}
//           <div>
//             <h1 className='amount'>TOTAL AMOUNT: {productsData.balance}</h1>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
