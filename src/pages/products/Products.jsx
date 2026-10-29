import Product from './Product';

function Products({ products, setProducts, cart, setCart }) {

    return (
        <div>
            <h1 className="mt-4 text-center text-4xl text-blue-600 font-bold">Products</h1>
            <div className="w-[80%] mx-auto my-4 grid grid-cols-1 gap-4 lg:w-[90%] lg:grid-cols-3">
                {products.map((product) => (
                    <Product key={product.id} product={product} cart={cart} setCart={setCart} />
                ))}
            </div>
        </div>
    );
}

export default Products;