import React from "react";
import "./Styles.scss";
import { Button } from "reactstrap";

export default function Product() {
  return (
    <div className="product">
      <span className="product__price">$120</span>
      <img
        className="product__image"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
      />
      <h1 className="product__title">Nike Roshe Run Print</h1>
      <hr />
      <p>
        The Nike Roshe One Print Men's Shoe offers breathability, lightweight
        cushioning and bold style with an injected unit midsole and colorful
        mesh upper.
      </p>
      <Button href="#" className="product__btn btn">
        Buy Now
      </Button>
    </div>
  );
}
