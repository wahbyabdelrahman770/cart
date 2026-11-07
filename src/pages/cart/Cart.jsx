import Item from "./Item";

function Cart({ cart, setCart }) {
    let sum = 0;
    cart.forEach((item) => { sum += (item.selectedQuantity * item.price); });
    return (
        <div className="my-5 flex-grow flex flex-col">
            <h1 className="text-center text-4xl font-bold text-blue-600">Cart</h1>
            <div className="mb-8">
                {cart.map((item, index, cart) => (
                    <Item key={item.id} item={item} cart={cart} setCart={setCart} />
                ))}
            </div>
            <h1 className="mt-auto text-center text-4xl font-bold text-black">Total: {sum} EGP</h1>
        </div>
    );
}

export default Cart;