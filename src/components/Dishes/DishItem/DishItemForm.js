import Button from "../../UI/Button/Button";

const DishItemForm = (props) => {
  return (
    <form className="flex flex-col space-y-4 basis-36">
      <div className="flex items-center justify-end space-x-2">
        <div className="font-semibold">Amount:</div>
        <input
          className="w-6/12 text-center font-semibold rounded-lg"
          id={props.id}
          min="0"
          max="25"
          type="number"
        ></input>
      </div>
      <Button className="py-2 px-8 bg-roseRed">Add +</Button>
    </form>
  );
};

export default DishItemForm;
