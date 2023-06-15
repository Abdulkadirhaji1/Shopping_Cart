import {useState} from 'react';
// import Product from "./Product";
import Product from "./ProductEventHandling";

function ProductList({products, cartItems, updateSubtotal}) {

    const [lastUpdatedProduct, setLastUpdatedProduct] = useState('a product')

    const updateLastUpdatedProduct = (productChanged, qty) => {

        // the callback function can create guardrails if necessary
        if (productChanged.description.includes('iPhone')) {
            return;
        }

        console.log(productChanged)

        updateSubtotal(productChanged.price * qty);

        setLastUpdatedProduct(productChanged.description)
    }

    const onClear = () => {
        setLastUpdatedProduct('No product selected')
    }

    return (
        <div>
            <div>
                <h3>Last Updated Product: {lastUpdatedProduct} </h3>
            </div>

            <button onClick={onClear}>Clear</button>

            {products.map((product) => (
                <Product 
                    key={`product-${product.id}`} 
                    product={product} 
                    updateLastUpdatedProduct={updateLastUpdatedProduct}
                    productWhichWasLastUpdated={lastUpdatedProduct}
                    cartItems={cartItems} />
            ))}

            
        </div>
    )
}

export default ProductList;