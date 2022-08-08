import InvertedMiniButton from "../UI/Button/InvertedMiniButton";
import MiniButton from "../UI/Button/MiniButton";

const CartItem = (props) => {
  return (
    <div className="flex-col space-y-6">
      <div className="text-xl">{props.name}</div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div className="font-semibold">$10</div>
          <div>x{props.amount}</div>
        </div>
        <div className="flex space-x-4">
          <InvertedMiniButton className="w-10">-</InvertedMiniButton>
          <MiniButton className="w-10">+</MiniButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
