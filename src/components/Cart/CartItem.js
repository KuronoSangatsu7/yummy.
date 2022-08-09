import InvertedMiniButton from "../UI/Buttons/InvertedMiniButton";
import MiniButton from "../UI/Buttons/MiniButton";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <div className="flex-col space-y-6 snap-start">
      <div className="text-xl">{props.name}</div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div className="font-semibold">{price}</div>
          <div>x{props.amount}</div>
        </div>
        <div className="grid-rows space-x-2">
          <InvertedMiniButton className="w-10 grow-0">-</InvertedMiniButton>
          <MiniButton className="w-10">+</MiniButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
