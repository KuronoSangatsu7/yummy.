import Button from "../UI/Buttons/Button";
import InvertedButton from "../UI/Buttons/InvertedButton";
import CartList from "./CartList";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  return (
    <Modal>
      <div className="p-2 py-4 pl-4 text-3xl tracking-wider bg-beige text-black rounded-t-xl">
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
          <InvertedButton className="basis-20" onClick={props.onClose}>
            Cancel
          </InvertedButton>
          <Button className="basis-20">Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
