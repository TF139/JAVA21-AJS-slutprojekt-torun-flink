export default function ShoppingCartPage({ stateName, updateLogInStatus, total, totalPrice, totalSneaker1, totalSneaker2, totalSneaker3, totalSneaker4, totalSneaker5 }) {

    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }

    function purchase(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
        alert("Du köpte " + total + " produkter som kostade: " + totalPrice + "kr")
    }

    function product1() {
        if (totalSneaker1 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/4a388fb8b3e54826a3430ee8902622c8/a9a94b67471e46e3b3b04ed2aeef8142.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount: {totalSneaker1}X</p>
                </>
            )
        }
    }

    function product2() {
        if (totalSneaker2 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/cbc8bdbcc8f835489fc7667e086690c3/e758d8cea369420eabab07ab0afb05b7.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount: {totalSneaker2}X</p>
                </>
            )
        }
    }

    function product3() {
        if (totalSneaker3 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/7e4183a0b2574350ba05dc0bceda3f47/707a9e24ba01406081bd29baa29ac384.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount: {totalSneaker3}X</p>
                </>
            )
        }
    }

    function product4() {
        if (totalSneaker4 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/cc659b7633cb4336bd63beea9c0b6c57/d6c9b1be7c28428c9f35cd96b6ad4556.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount {totalSneaker4}X</p>
                </>
            )
        }
    }

    function product5() {
        if (totalSneaker5 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/d72b9d5725ff459bbf619124706bba07/45f8331e66af4b9386577fb6aa578489.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount {totalSneaker5}X</p>
                </>
            )
        }
    }

    return (

        <>
            <h1>Order {stateName}</h1>
            <h1>Total produkter: {total}</h1>
            <h1>Total pris: {totalPrice} kr</h1>
            {product1()}
            {product2()}
            {product3()}
            {product4()}
            {product5()}
            <button onClick={purchase}>köp</button>
            <button onClick={clickToHomePage}>logga ut</button>
        </>
    )
}