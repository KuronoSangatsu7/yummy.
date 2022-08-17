import { useCart } from "../../../store/CartContextProvider";
import Button from "../../UI/Buttons/Button";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";

const Header = (props) => {
  const {clearCart} = useCart()

  return (
    <nav className="relative container mx-auto p-6 flex items-center justify-between">
      <div className="text-roseRed text-2xl font-medium subpixel-antialiased tracking-wider">
        yummy.
      </div>
      <div className="hidden lg:flex text-kindaBlack text-2xl subpixel-antialiased tracking-widest italic underline decoration-roseRed decoration-2 underline-offset-8">
        Only the best food in town.
      </div>
      <div className="flex justify-between items-center space-x-3">
        <ShoppingCartButton onClick={props.onShowCart}/>
        <Button className="px-6" onClick={clearCart}>Clear Cart</Button>
      </div>
    </nav>
  );
};

export default Header;
