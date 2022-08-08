import ShoppingCartIcon from "./ShoppingCartIcon"

const ShoppingCartButton = (props) => {
  return (
    <button className="relative h-10 w-10 hover:scale-110 hover:translate-y-1 transition-all duration-150">
      <ShoppingCartIcon />
      <div className="rounded-full bg-roseRed text-white text-xs font-semibold absolute top-0 right-0 max-w-full min-w-4">
        4
      </div>
    </button>
  );
};

export default ShoppingCartButton;
