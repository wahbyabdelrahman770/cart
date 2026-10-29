import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from "@material-tailwind/react";


function Product({ product: { id, price, availableQuantity, imgSrc }, cart, setCart }) {

    function checkInCart() {
        return cart.find(item => item.id === id);
    }

    function addToCart() {
        if (checkInCart()) { return; }
        const newCartItem = {
            id,
            price,
            availableQuantity,
            selectedQuantity: 1
        };

        // cart.push(newCartItem);  // how can this be allowed, pushing on a const array ?????
        // setCart(cart);  // not late but does not trigger checkInCart function instantly

        // const newCart = cart;
        // newCart.push(newCartItem);
        // setCart(newCart);   // not late but does not trigger checkInCart function

        setCart(prev => [...prev, newCartItem]);  // late by 1 but triggers checkInCart function instantly
        // setCart((prev) => { return [...prev, newCartItem]; }); // late by 1 but triggers checkInCart function instantly
    }

    function removeFromCart() {
        if (!checkInCart()) { return; }
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);  // this code is late by 1 but triggers checkInCart function instantly
        // setCart(prev => newCart);  // this code is also late by 1 but triggers checkInCart function instantly
    }

    return (
        <Card className="overflow-hidden flex flex-col justify-between">
            <CardHeader className="w-[100%] mx-auto shadow-none mt-2 mb-0 lg:w-[70%]">
                <img
                    src={imgSrc}
                    alt="card-image"
                    className="w-[96%] mx-auto"
                />
            </CardHeader>
            <CardBody className="text-center space-y-4">
                <h1 className="text-black font-semibold text-[1.8em]">{id}</h1>
                <h3 className="text-black text-[1.2em] font-medium">Price: {price} EGP</h3>
                <h4 className="text-black text-[1.3em] font-medium">Available Quantity: {availableQuantity}</h4>
            </CardBody>
            <CardFooter className="pt-0 text-center flex justify-between">
                <Button disabled={checkInCart()} className="w-[45%] p-4" onClick={() => { addToCart(); }}>Add to Cart</Button>
                <Button disabled={!checkInCart()} className="bg-red-500 text-white w-[45%] p-4" onClick={() => { removeFromCart(); }}>Remove from Cart</Button>
            </CardFooter>
        </Card>
    );
}
export default Product;