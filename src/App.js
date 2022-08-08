import FullWrapper from "./components/UI/FullWrapper/FullWrapper.js";
import Header from "./components/Layout/Header/Header.js";
import BodyWrapper from "./components/UI/BodyWrapper/BodyWrapper.js";
import Summary from "./components/Dishes/Summary.js"
import AvailableDishes from "./components/Dishes/AvailableDishes.js";
import Cart from "./components/Cart/Cart.js";

const App = () => {
  return (
    <FullWrapper>
      <Header />
      <BodyWrapper>
        <Summary />
        <AvailableDishes />
        <Cart />
      </BodyWrapper>
    </FullWrapper>
  );
};

export default App;
