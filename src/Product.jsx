import React, { Component } from "react";
export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id}</div>
            <h5 className="p-5 border-top">{this.state.product.productName}</h5>
            <div>${this.state.product.price}</div>

            <div className="card-footer"> </div>
            <div className="float-left">
              <span> {this.state.product.quantity} </span>
              <div className="btn-group">
                <div className=" btn btn-outline-success">+</div>
                <div className=" btn btn-outline-success">-</div>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

//3:00

//3.19
