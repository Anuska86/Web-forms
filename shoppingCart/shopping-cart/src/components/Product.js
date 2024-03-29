import { Component } from "react";
import Button from './Button'

const styles={
  product:{
    border:'solid 1px #eee',
    boxShadow:'0 5px 5px rgb(0,0,0,0.1)',
    width:'30%',
    padding:'10 px 15 px',
    borderRadius:'5px',

  },
  img:{
    width:'100%',
  }
}
class Product extends Component {
  render() {
    const { product, addToTheCart } = this.props;
    return (
      <div style={styles.product}>
        <img style={styles.img} alt={product.name} src={product.img}/>
        <h3>{product.name}</h3>
        <p>{product.price}€</p>
        <p>{product.points} points</p>
        <Button onClick={()=> addToTheCart(product)}>
          Add to the cart
        </Button>
      </div>
    );
  }
}

export default Product;
