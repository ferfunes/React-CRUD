import React from "react";

export class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };
  }

  deleteProduct = e => {
    const { deleteProduct, name } = this.props;
    deleteProduct(name);
  };

  editProduct = e => {
    this.setState({ isEdit: true });
  };

  submitEditProduct = e => {
    e.preventDefault();

    this.props.submitEditProduct(
      this.nameInput.value,
      this.priceInput.value,
      this.props.name
    );
    this.setState({ isEdit: false });
  };

  render() {
    const { name, price } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <form onSubmit={this.submitEditProduct}>
            <input
              className="mr-3"
              placeholder="name"
              ref={nameInput => (this.nameInput = nameInput)}
              defaultValue={name}
            />
            <input
              className="mr-3"
              placeholder="price"
              ref={priceInput => (this.priceInput = priceInput)}
              defaultValue={price}
            />
            <button>Save</button>
          </form>
        ) : (
          <div className="mb-2">
            <span>{name}</span>
            {` | `}
            <span>{price}</span>
            {` | `}
            <button className="mr-2" onClick={this.editProduct}>
              Edit
            </button>
            <button onClick={this.deleteProduct}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}
