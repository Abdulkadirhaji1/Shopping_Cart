import { useState } from 'react';
import './Product.css';

function ProductEventHandling({product, cartItems, onProductQtyChange}) {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    const increment = () => {
        // console.log(count);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count);

        // 0
        setCount((prevCount) => prevCount + 1)
        // 
        setCount((prevCount) => prevCount + 1)
        
        setCount((prevCount) => prevCount + 1)
    }
    

    return (
        <div className={`product-${product.category}`}>
            <h3>{product.description}</h3>
            <h3>Event handling example</h3>
            <h4>Price: ${product.price} </h4>
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ProductEventHandling;