import {Component} from 'react'
import {Rings} from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ProductCard from '../ProductCard'
import './index.css'

// const sortbyOptions = [
//   {
//     optionId: 'PRICE_HIGH',
//     displayText: 'Price (High-Low)',
//   },
//   {
//     optionId: 'PRICE_LOW',
//     displayText: 'Price (Low-High)',
//   },
// ]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    text:''
  }
  searching = (event) => {
    
    this.setState({text:event.target.value})
   
  
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/products'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData.products)
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  renderProductsList = () => {
    const {productsList,text} = this.state
    const searchResult =  productsList.filter((each => each.title.toLowerCase().includes(text.toLowerCase())))
    return (
      <>
      <h1 className="products-heading">All Products</h1>
        <input type ="text" onChange={this.searching} value={text} placeholder="Search for Products,Brands and More" className="search-box"/>
      <ul className="products-list">
          {searchResult.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Rings type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderProductsList()
  }
}

export default AllProductsSection
