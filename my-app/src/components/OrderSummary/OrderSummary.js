import Basket from '../Basket/Basket';
import Totals from '../Totals/Totals';
import './OrderSummary.css';

function OrderSummary() {
    return (
        <div className="order-summary">
            <Basket />
            <Totals subTotal={4000} tax={345} shipping={9.99} />
        </div>
    )
}

export default OrderSummary;