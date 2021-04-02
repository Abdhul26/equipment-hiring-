import React from 'react';
import ProductCard from "./ProductCard";

function RecomendedContent() {
  return (
    <div className="recomendedContent">
      <h3>Recomended Products</h3>
      <div className="recomendedproduct_list">
        <ProductCard
          title="Tripod Stand"
          image= "https://www.dpreview.com/files/p/articles/1809219624/Headline_shot.jpeg"
           person="person-1"
            time= "Per Hour"
           price="₹.1000"
           contact="+91 9999888800"
            />
        <ProductCard
        title="Canon DSLR camera"
          image= "https://images.unsplash.com/photo-1533425962554-06f6d8c4dacc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fub258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
           person="person-2"
            time= "Per Hour"
           price="₹.2000"
          contact="+91 9999777700"
        />
        <ProductCard  />
        <ProductCard/>
        <ProductCard />
        <ProductCard  />
      </div>
     </div>
  );
}

export default RecomendedContent;
