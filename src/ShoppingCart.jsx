import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Iphone", price: 5900, quantity: 0 },
      { id: 2, productName: "Samsung", price: 4900, quantity: 0 },
      { id: 3, productName: "Nokia", price: 3900, quantity: 0 },
      { id: 4, productName: "LG", price: 900, quantity: 0 },
      { id: 5, productName: "Nikon", price: 8700, quantity: 0 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h2>shopping Cart</h2>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} product={prod}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
