import { useState } from 'react';
import './Product.css';

function Product({product, cartItems, onProductQtyChange, isHistoryProduct = false}) {

    // const [count, setCount] = useState(0);

    const itemCount = cartItems[product.id] ? cartItems[product.id].qty : 0;

    const decrement = () => {
        if (itemCount === 0)
            return;

        // setCount(count - 1)
        onProductQtyChange(product, itemCount - 1)
    }

    const increment = () => {
        // setCount(count + 1)
        onProductQtyChange(product, itemCount + 1)
    }

    const shouldShowCounter = !isHistoryProduct;
    

    return (
        <div className={`product-${product.category}`}>
            <h3>{product.description}</h3>
            <h4>Price: ${product.price} </h4>
            {shouldShowCounter && (
                <>
                    <button onClick={decrement}>-</button>
                    <span> {itemCount} </span>
                    <button onClick={increment}>+</button>
                </>
            )}
        </div>
    )
}

export default Product;