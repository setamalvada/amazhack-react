import "./ProductCard.css";
import React from "react";

export default function ProductCard({ name, price, user, image }) {
  return (
    <div className="ProductCard">
       <div>{name}</div>
       <div>{user.name}</div>
       <div>{price} €</div>
       <div className="imagen" style={{backgroundImage: `url(${image})`}  }/>
    </div>

  )
}
