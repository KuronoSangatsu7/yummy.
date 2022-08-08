import DishItemForm from "./DishItemForm";

const DishItem = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col space-y-2">
        <div className="font-semibold">{props.name}</div>
        <div className="italic text-sm">{props.description}</div>
        <div className="font-semibold text-darkGreen">${props.price}</div>
      </div>
      <DishItemForm id={props.id}/>
    </div>
  );
};

export default DishItem;
