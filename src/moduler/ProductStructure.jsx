export default function ProductStructure({ pInfo, totalSum, removeFromSum }) {

    const { Name, price, url, id } = pInfo

    function addToCart() {
        totalSum(price, id)
    }
    function removeFromCart() {
        removeFromSum(price, id);
    }

    return (
        <>
            <h2>{Name}</h2>
            <h2>{price}kr</h2>
            <img src={url}></img>
            <button onClick={addToCart}>+</button>
            <button onClick={removeFromCart}>-</button>
        </>
    )
}