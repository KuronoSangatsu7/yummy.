import Button from "../UI/Button/Button";

const DishItem = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div>{props.name}</div>
          <div>{props.description}</div>
          <div>{props.price}</div>
        </div>
        <div className="flex flex-col">
            <div>Amount</div>
            <Button />
        </div>
      </div>
    </div>
  );
};

export default DishItem;
