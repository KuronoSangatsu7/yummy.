import DishItem from "./DishItem/DishItem";

const DUMMY_DISHES = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableDishes = (props) => {
  const dishList = DUMMY_DISHES.map((dish) => 
    <DishItem key={dish.id} id={dish.id} name={dish.name} description={dish.description} price={dish.price} />
  );
  return (
      <div className="container flex-col space-y-6 mx-auto w-full md:w-2/5 divide-y-2 divide-gray-200 mt-10">{dishList}</div>
  );
};

export default AvailableDishes;
