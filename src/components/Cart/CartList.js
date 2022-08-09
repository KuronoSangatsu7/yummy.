import CartItem from "./CartItem"

const CartList = props => {
    const itemList = props.items.map((item) => <CartItem item={{...item}} key={item.id}/>)
    return <div className="flex-col space-y-4 max-h-64 p-4 overflow-auto scroll-smooth snap-y scroll-pb-12">{itemList}</div>
}

export default CartList