import React from 'react';
import "./ProductCard.css";


function ProductCard({ image,title,price,time,contact,person}) {
  return (
    <div className="productcard_image">
          <img className="productcard_imageone" src={image} alt="" />
         <div className="productcard_title">
              <h4>{title}</h4>
              <p>{price}</p>
              <p>{time}</p>
              <p>{contact}</p>
              <p>{ person}</p>
          </div>
           </div>
   
  );
}

export default ProductCard;
