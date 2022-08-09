import { useCart } from "../../store/CartContextProvider";
import InvertedMiniButton from "../UI/Buttons/InvertedMiniButton";
import MiniButton from "../UI/Buttons/MiniButton";

const CartItem = (props) => {
  const {addItem, removeItem} = useCart();
  const price = `$${props.item.price.toFixed(2)}`

  const addItemHandler = (item) => {
    addItem({...item, amount: 1})
  }

  return (
    <div className="flex-col space-y-3 snap-start">
      <div className="text-xl">{props.item.name}</div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div className="font-semibold">{price}</div>
          <div>x{props.item.amount}</div>
        </div>
        <div className="grid-rows space-x-2">
          <InvertedMiniButton className="w-10 grow-0">-</InvertedMiniButton>
          <MiniButton className="w-10" onClick={addItemHandler.bind(null, props.item)}>+</MiniButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
