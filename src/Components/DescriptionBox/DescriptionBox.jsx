import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individual showcase their products,
          interact with customers, and conduct websites have gained immense
          popularity due to their convenience accessibility, and the global
          reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services a detailed
          descriptions, images, prices, and any available var (e.g., sizes,
          colors). Each product usually has its own dedi with relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
