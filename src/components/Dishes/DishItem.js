import Button from "../UI/Button/Button";

const DishItem = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col space-y-2">
        <div className="font-semibold">{props.name}</div>
        <div className="italic text-sm">{props.description}</div>
        <div className="font-semibold text-darkGreen">${props.price}</div>
      </div>
      <div className="flex flex-col space-y-4 basis-36">
        <div className="flex items-center justify-end space-x-2">
          <div className="font-semibold">Amount:</div>
          <input className="w-6/12 text-center font-semibold" min="0" max="25" type="number"></input>
        </div>
        <Button className="py-2 px-8 bg-roseRed" name="Add +" />
      </div>
    </div>
  );
};

export default DishItem;
