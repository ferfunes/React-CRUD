import React from "react";

export class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteProduct = e => {
    const { deleteProduct, name } = this.props;
    deleteProduct(name);
  };

  render() {
    const { name, price } = this.props;
    return (
      <div>
        <span>{name}</span>
        {` | `}
        <span>{price}</span>
        {` | `}
        <button onClick={this.deleteProduct}>Delete</button>
      </div>
    );
  }
}
