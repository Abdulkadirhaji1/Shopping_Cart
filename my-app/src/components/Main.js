import {useState} from 'react'
import ProductList from './ProductList.js';
import {products} from '../data/products.js'
import OrderSummary from './OrderSummary/OrderSummary.js';
import SearchBar from './SearchBar/SearchBar.js';

function Main() {

    const [cartItems, setCartItems] = useState({});
    const [subTotal, setSubtotal] = useState(1000);

    const updateSubtotal = (productSubtotal) => {
        setSubtotal(productSubtotal)
    }

    return (
        <div>
            <SearchBar />
            <ProductList 
                products={products} 
                updateSubtotal={updateSubtotal}
                cartItems={cartItems} 
                updateCartItems={setCartItems} 
            />
            <OrderSummary subTotal={subTotal} />
        </div>
    )
}

export default Main;