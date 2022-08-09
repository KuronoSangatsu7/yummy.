import { useCart } from "../../../../store/CartContextProvider";
import ShoppingCartIcon from "./ShoppingCartIcon";

const ShoppingCartButton = (props) => {
  const { items } = useCart();
  const numOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  return (
    <button
      className="relative h-10 w-10 hover:scale-110 hover:translate-y-1 transition-all duration-150"
      onClick={props.onClick}
    >
      <ShoppingCartIcon />
      <div className="rounded-full bg-roseRed text-white text-xs font-semibold absolute top-0 right-0 max-w-full min-w-4">
        {numOfCartItems}
      </div>
    </button>
  );
};

export default ShoppingCartButton;
