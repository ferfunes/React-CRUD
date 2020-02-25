import React from "react";

export class AddItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addProduct(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = "";
    this.priceInput.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Product</h3>
        <input
          className="mr-3"
          placeholder="name"
          ref={nameInput => (this.nameInput = nameInput)}
        />
        <input
          className="mr-3"
          placeholder="price"
          ref={priceInput => (this.priceInput = priceInput)}
        />
        <button>Add</button>
        <hr />
      </form>
    );
  }
}
