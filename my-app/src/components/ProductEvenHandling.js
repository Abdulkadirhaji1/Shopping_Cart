import { useState } from 'react';
import classNames from 'classnames';
import { categories } from '../data/products';
import './Product.css';

function ProductEventHandling({product, updateLastUpdatedProduct, productWhichWasLastUpdated, cartItems, onProductQtyChange}) {

    const [count, setCount] = useState(0);

    const decrement = () => {
        const newCount = count - 1
        setCount(newCount);
        updateLastUpdatedProduct(product, newCount);
    }

    const increment = () => {
        // console.log(count);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count);

        const newCount = count + 1;

        // 0
        setCount(newCount)
        // 
        // setCount((prevCount) => prevCount + 1)
        
        // setCount((prevCount) => prevCount + 1)

        updateLastUpdatedProduct(product, newCount);

    }
    
    const isLastUpdatedProduct = product.description === productWhichWasLastUpdated;
    const lastUpdatedProductClassName = isLastUpdatedProduct ? 'product-last-updated' : '';

    // const productClassNames = `product-${product.category} ${lastUpdatedProductClassName}`;

    const productClassNames = classNames({
        'product-container': true,
        'product-mobile': product.category === categories.MOBILE,
        'product-computer': product.category === categories.COMPUTER,
        'product-last-updated': isLastUpdatedProduct
    })

    return (
        <div className={productClassNames}>
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