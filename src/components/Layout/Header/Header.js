import Button from "../../UI/Button/Button";
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton";
import styles from "./Header.module.css"

const Header = (props) => {
  return (
    <nav className={styles.navContainer}>
        <div className={styles.logo}>
          yummy.
        </div>
        <div className={styles.slogan}>
          Only the best food in town.
        </div>
        <div className={styles.buttonsContainer}>
          <ShoppingCartButton />
          <Button />
        </div>
    </nav>
  );
};

export default Header;
