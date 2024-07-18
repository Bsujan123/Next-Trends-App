import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';

import ProductCard from '../ProductCard';
import './index.css';

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  const searching = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    
    const apiUrl = 'https://fakestoreapi.com/products';
  

    const response = await fetch(apiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      
      setProductsList(fetchedData);
    }
    setIsLoading(false);
  };

  const renderProductsList = () => {
    const searchResult = productsList.filter(product =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    

    return (
      <>
        <h1 className="products-heading">All Products</h1>
        <input
          type="text"
          onChange={searching}
          value={text}
          placeholder="Search for Products, Brands and More"
          className="search-box"
        />
        <ul className="products-list">
          {searchResult.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    );
  };

  const renderLoader = () => (
    <div className="products-loader-container">
      <Rings type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  return isLoading ? renderLoader() : renderProductsList();
};

export default AllProductsSection;

