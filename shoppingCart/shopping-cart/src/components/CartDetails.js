import { Component } from "react";

const styles = {
  cartDetails: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    widht: "500px",
    right: 50,
  },

  ul: {
    margin: 0,
    padding: 0,
    width: "300px",
  },

  product: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    let total_price  = 0;
    let total_points = 0;

    for (let i = 0; i < cart.length; i++) {
      total_price += parseFloat(cart[i].price);
      total_points += parseInt(cart[i].points);
    }

    console.log(cart);
    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((x) => (
            <li style={styles.product} key={x.name}>
              <img alt={x.name} src={x.img} widht="50" height="32" />
              {x.name} <span>{x.amount}</span>
              <span>{x.price} €</span>
              <span>{x.points} points</span>
            </li>
          ))}
          <li style={styles.product}>
            <span>Total price: {total_price} €</span>
            <span>Total points: {total_points} points</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartDetails;
