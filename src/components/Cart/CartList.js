import CartItem from "./CartItem"

const CartList = props => {
    const itemList = props.items.map((item) => <CartItem name={item.name} amount={item.amount}/>)
    return <>{itemList}</>
}

export default CartList