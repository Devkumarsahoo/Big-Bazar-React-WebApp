import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class CustomerList extends Component {
  state = {
    pagetitle: "Customers",
    customerCount: 5,

    customers: [
      {
        id: 1,
        name: "Dev",
        phone: "1562739",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 2,
        name: "Ram",
        phone: "1562739",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1014/60",
      },
      {
        id: 3,
        name: "Sam",
        phone: "1562739",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: 4,
        name: "Shyaamravi",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1077/60",
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border border-danger">
          {this.state.pagetitle}

          <span className="badge badge-">{this.state.customerCount}</span>

          <button className="btn btn-info" onClick={this.onclickRefresh}>
            refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Profile Picture</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onclickRefresh = () => {
    this.setState({
      customerCount: 7,
    });
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>
            <img src="{cust.photo}" alt="Customer picture" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangeChangePhoto(cust, index);
                }}
              >
                Change photo
              </button>
            </div>
          </td>

          <td>
            {cust.phone ? (
              cust.phone
            ) : (
              <div className="bg-warning p-2 text-center">no phone</div>
            )}
          </td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangeChangePhoto = (cust, index) => {
    var custarr = this.state.customers;
    custarr[index].photo = "https://picsum.photos/id/12/2500/1667";
    this.setState({ customers: custarr });
  };
}

//refer    1:50
