import CartItem from "./CartItem"

const CartList = props => {
    const itemList = props.items.map((item) => <CartItem name={item.name} amount={item.amount} price={item.price} key={item.id}/>)
    return <div className="flex-col space-y-4 max-h-80 overflow-auto scroll-smooth snap-y scroll-pb-12">{itemList}</div>
}

export default CartList