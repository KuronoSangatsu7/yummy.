import Button from "../UI/Button/Button";
import InvertedButton from "../UI/Button/InvertedButton";
import CartList from "./CartList";

const Cart = (props) => {
  return (
    <div className="flex fixed inset-0 bg-beige/5 backdrop-blur-sm">
      <div className="flex-col m-auto w-2/3 md:w-2/5 drop-shadow-lg z-50 bg-beige shadow rounded-xl">
        <div className="p-2 py-4 pl-4 text-3xl tracking-wider bg-kindaBlack text-white rounded-t-xl">
          Checkout
        </div>
        <div className="p-6 flex-col space-y-3">
          <CartList />
          <hr className="bg-black h-1"></hr>
          <div className="flex justify-between">
            <div className="text-xl tracking-wider">Total Amount</div>
            <div className="text-xl font-semibold tracking-wider">$25.69</div>
          </div>
          <div className="flex justify-end space-x-2">
            <InvertedButton className="basis-20 hover:-translate-x-1">
              Cancel
            </InvertedButton>
            <Button className="basis-20">Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
