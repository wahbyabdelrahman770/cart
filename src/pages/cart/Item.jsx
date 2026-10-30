function Item({ item: { id, price, availableQuantity, selectedQuantity }, cart, setCart }) {

    function decreaseQuantity() {   // works fine but in console is late by 1. everything else is fine which is very weird
        if (selectedQuantity === 1) {
            const tempCart = cart.filter(item => item.id !== id);
            setCart(tempCart);
            return;
        }
        const newQuantity = selectedQuantity - 1;
        const tempItem = { id, price, availableQuantity, selectedQuantity: newQuantity };
        const tempCart = cart.map(item => {
            if (item.id === id) {
                return tempItem;
            }
            return item;
        });
        setCart(tempCart);
    }

    function increaseQuantity() {  // works fine but in console is late by 1. everything else is fine which is very weird
        if (selectedQuantity === availableQuantity) { return; }
        const newQuantity = selectedQuantity + 1;
        const tempItem = { id, price, availableQuantity, selectedQuantity: newQuantity };
        const tempCart = cart.map(item => {
            if (item.id === id) {
                return tempItem;
            }
            return item;
        });
        setCart(tempCart);
    }

    return (
        <div className="w-[500px] max-w-[90%] md:w-[95%] mx-auto mt-4 px-2 py-2 rounded-lg bg-purple-500 text-white text-2xl font-semibold grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-0 justify-items-center items-center">
            <p className="text-center">Item: {id}</p>
            <p className="text-center">Price: {price} EGP</p>
            <div className="w-full flex flex-row justify-evenly md:justify-between items-center">
                <button onClick={() => { decreaseQuantity(); }} className="bg-red-500 w-10 h-10 rounded-xl text-3xl">-</button>
                <p className="text-center">Quantity: {selectedQuantity}</p>
                <button disabled={selectedQuantity === availableQuantity} onClick={() => { increaseQuantity(); }} className="bg-green-500 w-10 h-10 rounded-xl text-3xl disabled:opacity-60">+</button>
            </div>
            <p className="text-center">Total: {selectedQuantity * price} EGP</p>
        </div>
    );
}

export default Item;