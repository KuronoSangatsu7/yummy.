import DishItem from "./DishItem/DishItem";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const AvailableDishes = (props) => {
  const [meals, setMeals] = useState([]);
  const { loading, error, requestHttp: fetchMeals } = useHttp();

  const parseMealData = (data) => {
    const parsedMeals = [];
    for (let meal of Object.keys(data)) {
      parsedMeals.push({
        id: meal,
        name: data[meal].name,
        description: data[meal].description,
        price: data[meal].price,
      });
    }
    setMeals(parsedMeals);
  };

  useEffect(() => {
    fetchMeals(
      {
        url: "https://yummy-4e21c-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      parseMealData
    );
  }, [fetchMeals]);

  const dishList = meals.map((dish) => (
    <DishItem
      key={dish.id}
      id={dish.id}
      name={dish.name}
      description={dish.description}
      price={dish.price}
    />
  ));
  return (
    <div className="container flex-col space-y-6 mx-auto w-full md:w-2/5 divide-y-2 divide-gray-200 mt-10 max-h-96 overflow-scroll scroll-smooth snap-y">
      {dishList}
    </div>
  );
};

export default AvailableDishes;
