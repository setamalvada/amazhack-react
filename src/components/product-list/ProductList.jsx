import "./ProductList.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getProducts } from "../../services/api.service";
import Product from "./Product";

export default function ProductList() {
  const [productList, setProductList] = useState(undefined);
  const history = useHistory();
  useEffect(() => {
    getProducts()
      .then((r) => setProductList(r))
      .catch((e) => console.log(e));
  }, [history]);

  if (!productList) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="ProductList">
        {productList.map((p) => (
          <Product {...p} key={p.id} />
        ))}
      </div>
    );
  }
}
