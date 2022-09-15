import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

class App extends Component {
  state = {
    products: [
      { name: "Tomato", price: 0.85,points:1, img: "/products/tomato.jpg" },
      { name: "Green peas", price: 1.2,points:2, img: "/products/peas.jpg" },
      { name: "Lettuce", price: 0.7,points:3, img: "/products/lettuce.jpg" },
    ],
    cart: [],
    isCartVisible: false,
  };

  addToTheCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              amount: x.amount + 1,
              price:(product.price * (x.amount+1)).toFixed(2),
              points:(product.points * (x.amount+1))
            }
          : x
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  showCart = () => {
    if(this.state.cart.length) {
      this.setState({ isCartVisible: !this.state.isCartVisible });
    }
  };

  render() {
    const {isCartVisible} =this.state
    return (
      <div>
        <Navbar cart={this.state.cart} isCartVisible={isCartVisible} showCart={this.showCart} />
        <Layout>
          <Title />
          <Products
            addToTheCart={this.addToTheCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
