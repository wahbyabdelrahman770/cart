import { useState } from "react";
import Item from "./item";

function Cart({ cart, setCart }) {
    let sum = 0;
    cart.forEach((item) => { sum += (item.selectedQuantity * item.price); });
    // const [totalPrice, setTotalPrice] = useState(sum);  this code is late by 1, but if I do not use it everything is fine
    return (
        <div className="my-5 flex-grow flex flex-col">
            <h1 className="text-center text-4xl font-bold text-blue-600">Cart</h1>
            {cart.map((item, index, cart) => (
                <Item key={item.id} item={item} cart={cart} setCart={setCart} />
            ))}
            <h1 className="mt-auto text-center text-4xl font-bold text-black">Total: {sum} EGP</h1>
        </div>
    );
}

export default Cart;