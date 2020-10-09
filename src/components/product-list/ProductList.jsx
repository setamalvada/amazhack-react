import "./ProductList.css";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [productList, setProductList] = useState(undefined);
  useEffect(() => {
  }, []);

  if (!productList) {
    return <div>Loading...</div>;
  } else {
    return <div className="ProductList">{JSON.stringify(productList)}</div>;
  }
}
