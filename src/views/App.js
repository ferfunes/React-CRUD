import React from "react";
import { ProductItem } from "../components/product-item.js";

const products = [
  {
    name: "Ipad",
    price: 200
  },
  {
    name: "Iphone",
    price: 250
  }
];

localStorage.setItem("products", JSON.stringify(products));

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
  }

  UNSAFE_componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  deleteProduct = name => {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="bg-danger">Products Manager</h1>
        {this.state.products.map(item => {
          return (
            <ProductItem
              key={item.name}
              {...item}
              deleteProduct={this.deleteProduct}
            />
          );
        })}
      </div>
    );
  }
}
