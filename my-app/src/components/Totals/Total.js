function Totals({ subTotal, tax, shipping }) {

    let correctedShippingCost = shipping;
    if (subTotal > 5000) {
        correctedShippingCost = 0;
    }

    const total = subTotal + tax + correctedShippingCost;

    return (
        <div>
            <h4>Subtotal: {subTotal}</h4>
            <h4>Tax: {tax}</h4>
            <h4>Shipping: {correctedShippingCost}</h4>
            <h2>Total: {total}</h2>
        </div>
    )
}

export default Totals;