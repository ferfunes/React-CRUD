import React from "react";
import { ProductItem } from "../components/product-item.js";
import { AddItem } from "../components/AddItem.js";

const products = [
  {
    name: "Mousepad",
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

  addProduct = (name, price) => {
    const products = this.getProducts();
    products.push({
      name,
      price
    });
    this.setState({ products });
  };

  submitEditProduct = (name, price, originalName) => {
    let products = this.getProducts();
    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products });
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="bg-danger">Products Manager</h1>
        <div className="mb-5">
          <AddItem addProduct={this.addProduct} />
        </div>
        <div>
          {this.state.products.map(item => {
            return (
              <ProductItem
                key={item.name}
                {...item}
                deleteProduct={this.deleteProduct}
                submitEditProduct={this.submitEditProduct}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
