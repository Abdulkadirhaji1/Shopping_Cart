import {useState} from 'react'
import ProductList from './ProductList.js';
import {products} from '../data/products.js'
import OrderSummary from './OrderSummary/OrderSummary.js';
import SearchBar from './SearchBar/SearchBar.js';

function Main() {

    const [cartItems, setCartItems] = useState({})

    return (
        <div>
            <SearchBar />
            <ProductList products={products} cartItems={cartItems} updateCartItems={setCartItems} />
            <OrderSummary />
        </div>
    )
}

export default Main;