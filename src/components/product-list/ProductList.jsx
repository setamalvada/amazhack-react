// import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/api.service";
import ProductCard from "./product-card/ProductCard"
// import {Redirect} from "react-router-dom"

export default function ProductList({user}) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getProducts()
    .then((products)=> setProductList(products))
    .catch((e) => setError(true) )
  }, []);

  // if(!user){
  //   return <Redirect to="/login"/>
  // }

  if(error){
    return <div>There was an error sending the request</div>
  }



  if (productList.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (<div className="ProductList">
      {productList.map((product) => (
        <ProductCard
        key={product.id}
        name={product.name}
        user={product.user}
        image={product.image}
        price={product.price}
        />
      ))}
    </div>
    )
  }
}
