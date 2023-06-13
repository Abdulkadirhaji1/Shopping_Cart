import Product from "./Product";
// import Product from "./ProductEventHandling";

function ProductList({products, cartItems, updateCartItems}) {

    // this updates the cart items state
    const onProductQtyChange = (product, qty) => {
        // check if the product is in cart items
        
        // Goal: Create this
        // {
        //     '1': {...product, qty: 5}
        //     '5': {price: 700, qty: 0}
        // }

        const newCartItems = {...cartItems}
        newCartItems[product.id] = {...product, qty}

        if (qty === 0) {
            delete newCartItems[product.id];
        }

        updateCartItems(newCartItems)
    }

    // const productListElems = [
    //     <div>Macbook Pro</div>,
    //     <div>Macbook Air</div>,
    //     <div>Lenovo Thinkpad</div>
    // ]

    return (
        <div>
            {products.map((product) => (
                <Product key={`product-${product.id}`} product={product} cartItems={cartItems} onProductQtyChange={onProductQtyChange} />
            ))}
        </div>
    )
}

export default ProductList;