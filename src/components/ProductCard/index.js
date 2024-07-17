import './index.css'

const ProductCard = props => {
  const {productData} = props
  
  const {category,image,price,rating,title} = productData
  console.log(productData)
  return (
    <li className="product-item">
      <img src={image} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {category}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating.rate}</p>
          {/* <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          /> */}
        </div>
      </div>
    </li>
  )
}
export default ProductCard
