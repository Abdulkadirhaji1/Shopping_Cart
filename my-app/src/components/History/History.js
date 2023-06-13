import {products} from '../../data/products.js'
import Product from '../Product.js';

function History() {

    return (
        <div className="history-section">
            <h3> My History: </h3>
            <Product product={products[0]} isHistoryProduct={true} cartItems={{}} onProductQtyChange={() => {}} />
            <Product product={products[3]} isHistoryProduct={true} cartItems={{}} onProductQtyChange={() => {}} />
            <br />
            <br />
            <br />
        </div>
    )
}

export default History;