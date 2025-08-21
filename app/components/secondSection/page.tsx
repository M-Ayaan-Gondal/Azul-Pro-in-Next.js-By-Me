import Image from "next/image";
import React from "react";
import "./secondSection.css";

const page = () => {
  return (
    <main className="secondSection">
      <div className="heading">
        <h1>Our Most Demanding Clothes</h1>
      </div>
      {/*  */}
      <div className="products-container">
        <div className="page-one">
          <div className="product1 product">
            <div className="image"></div>
            <div className="on-hover">
              <button>Shop Now</button>
            </div>
            <div className="details">
              djkghfjkldgjkl
            </div>
          </div>
          {/*  */}
          <div className="product2 product">
            <div className="image"></div>
            <div className="on-hover">
            </div>
            <div className="details"></div>
          </div>
          {/*  */}
          <div className="product3 product">
            <div className="image"></div>
            <div className="on-hover"></div>
            <div className="details"></div>
          </div>
          {/*  */}
          <div className="product4 product">
            <div className="image"></div>
            <div className="on-hover"></div>
            <div className="details"></div>
          </div>
          {/*  */}
          <div className="product5 product">
            <div className="image"></div>
            <div className="on-hover"></div>
            <div className="details"></div>
          </div>
          {/*  */}
        </div>
        {/* page-one end */}
      </div>
    </main>
  );
};

export default page;
