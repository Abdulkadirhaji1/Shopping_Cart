import Basket from '../Basket/Basket';
import Totals from '../Totals/Totals';
import './OrderSummary.css';

function OrderSummary({ subTotal }) {
    return (
        <div className="order-summary">
            <Basket />
            <Totals subTotal={subTotal} tax={345} shipping={9.99} />
        </div>
    )
}

export default OrderSummary;