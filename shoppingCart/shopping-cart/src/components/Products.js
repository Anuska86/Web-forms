import { Component } from "react";
import Product from "./Product";

const styles = {
  products: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Products extends Component {
  render() {
    const { products, addToTheCart } = this.props;
    return (
      <div style={styles.products}>
        {products.map((product) => (
          <Product
            addToTheCart={addToTheCart}
            key={product.name}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Products;
