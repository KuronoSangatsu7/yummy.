import Button from "../UI/Buttons/Button";
import InvertedButton from "../UI/Buttons/InvertedButton";
import Input from "../UI/Input/Input";

const Checkout = (props) => {
  return (
    <form className="flex flex-col space-y-6">
      <div className="flex flex-col lg:flex-row justify-between space-y-2 items-baseline">
        <label htmlFor="first-name">First Name:</label>
        <Input id="first-name" type="text" />
        <label htmlFor="last-name">Last Name:</label>
        <Input id="last-name" type="text" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-y-2 items-baseline">
        <label htmlFor="email">Email Address:</label>
        <Input id="email" type="email" />
        <label htmlFor="zip">ZIP Code:</label>
        <Input id="zip" type="text" />
      </div>
      <label htmlFor="address">Street Address:</label>
      <Input id="address" type="text" className="lg:w-4/5"></Input>
      <div className="flex space-x-2 self-end">
      <InvertedButton type="button" className="w-24" onClick={props.onEditOrder}>Edit Order</InvertedButton>
      <Button type="submit" className="w-32">Confirm Order</Button>
      </div>
    </form>
  );
};

export default Checkout;
