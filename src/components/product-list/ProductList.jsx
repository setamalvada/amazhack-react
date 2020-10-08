import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getProducts } from "../../services/api.service";

export default function ProductList() {
  const [productList, setProductList] = useState(undefined);
  const history = useHistory();
  useEffect(() => {
    getProducts()
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }, [history]);

  if (!productList) {
    return <div>Loading...</div>;
  } else {
    return <div className="ProductList">{JSON.stringify(productList)}</div>;
  }
}
