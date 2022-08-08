import styles from "./ShoppingCartButton.module.css"
import ShoppingCartIcon from "./ShoppingCartIcon"

const ShoppingCartButton = (props) => {
  return (
    <button className={styles.buttonContainer}>
      <ShoppingCartIcon />
      <div className={styles.cartCounter}>
        4
      </div>
    </button>
  );
};

export default ShoppingCartButton;
