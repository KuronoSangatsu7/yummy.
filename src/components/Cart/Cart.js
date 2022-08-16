import Button from "../UI/Buttons/Button";
import InvertedButton from "../UI/Buttons/InvertedButton";
import CartList from "./CartList";
import Modal from "../UI/Modal/Modal";
import { useCart } from "../../store/CartContextProvider";
import Checkout from "./Checkout";
import { useState } from "react";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { items, totalAmount, addItem, removeItem } = useCart();

  const fixedTotalAmount = `$${totalAmount.toFixed(2)}`;

  const hasItems = items.length > 0;

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const editOrderHandler = () => {
    setShowCheckout(false)
  }

  const cartView = (
    <>
      <CartList items={items} />
      <hr className="bg-black h-1"></hr>
      <div className="flex justify-between">
        <div className="text-xl tracking-wider">Total Amount</div>
        <div className="text-xl font-semibold tracking-wider">
          {fixedTotalAmount}
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <InvertedButton className="basis-20" onClick={props.onClose}>
          Cancel
        </InvertedButton>
        <Button disabled={!hasItems} className="basis-20" onClick={orderHandler}>
          Order
        </Button>
      </div>
    </>
  );

  const checkoutView = <Checkout onEditOrder={editOrderHandler} />;

  return (
    <Modal>
      <div className="p-2 py-4 pl-4 text-3xl tracking-wider bg-beige text-black rounded-t-xl">
        {showCheckout ? "Checkout" : "Cart"}
      </div>
      <div className="p-6 flex flex-col space-y-3">
        {showCheckout ? checkoutView : cartView}
      </div>
    </Modal>
  );
};

export default Cart;
