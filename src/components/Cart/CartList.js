import CartItem from "./CartItem"

const DUMMY_ITEMS = [{name: "Sushi", amount: 2}, {name: "Schnitzel", amount: 3}]

const CartList = props => {
    const itemList = DUMMY_ITEMS.map((item) => <CartItem name={item.name} amount={item.amount}/>)
    return <>{itemList}</>
}

export default CartList