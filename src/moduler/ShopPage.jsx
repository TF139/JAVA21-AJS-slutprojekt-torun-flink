import { useState } from "react";
import ProductStructure from "./ProductStructure";

export default function ShopPage({ updateLogInStatus, stateName, totalProducts, totalPriceMain, totalsneakers }) {

    const product1 = {
        Name: "Beige Sneakers",
        price: 999,
        url: "https://img01.ztat.net/article/spp-media-p1/4a388fb8b3e54826a3430ee8902622c8/a9a94b67471e46e3b3b04ed2aeef8142.jpg?imwidth=300&filter=packshot",
        id: 1
    }

    const product2 = {
        Name: "Black Sneakers",
        price: 1199,
        url: "https://img01.ztat.net/article/spp-media-p1/cbc8bdbcc8f835489fc7667e086690c3/e758d8cea369420eabab07ab0afb05b7.jpg?imwidth=300&filter=packshot",
        id: 2
    }

    const product3 = {
        Name: "White Sneakers",
        price: 1400,
        url: "https://img01.ztat.net/article/spp-media-p1/7e4183a0b2574350ba05dc0bceda3f47/707a9e24ba01406081bd29baa29ac384.jpg?imwidth=300&filter=packshot",
        id: 3
    }

    const product4 = {
        Name: "Blue Sneakers",
        price: 500,
        url: "https://img01.ztat.net/article/spp-media-p1/cc659b7633cb4336bd63beea9c0b6c57/d6c9b1be7c28428c9f35cd96b6ad4556.jpg?imwidth=300&filter=packshot",
        id: 4
    }

    const product5 = {
        Name: "Pink Sneakers",
        price: 2999,
        url: "https://img01.ztat.net/article/spp-media-p1/d72b9d5725ff459bbf619124706bba07/45f8331e66af4b9386577fb6aa578489.jpg?imwidth=300&filter=packshot",
        id: 5
    }

    const [sum, setSum] = useState(0);
    const [Price, setPrice] = useState(0);
    const [sneaker1, setSneaker1] = useState(0);
    const [sneaker2, setSneaker2] = useState(0);
    const [sneaker3, setSneaker3] = useState(0);
    const [sneaker4, setSneaker4] = useState(0);
    const [sneaker5, setSneaker5] = useState(0);

    function totalSum(price, id) {
        setSum(sum + 1)
        setPrice((sum + 1) * price)

        if (id == 1) {
            setSneaker1(sneaker1 + 1);
        }
        else if (id == 2) {
            setSneaker2(sneaker2 + 1);
        }
        else if (id == 3) {
            setSneaker3(sneaker3 + 1);
        }
        else if (id == 4) {
            setSneaker4(sneaker4 + 1);
        }
        else {
            setSneaker5(sneaker5 + 1);
        }
    }

    function removeFromSum(price, id) {
        setSum(sum - 1);
        setPrice((sum - 1) * price)

        if (id == 1) {
            setSneaker1(sneaker1 - 1);
        }
        else if (id == 2) {
            setSneaker2(sneaker2 - 1);
        }
        else if (id == 3) {
            setSneaker3(sneaker3 - 1);
        }
        else if (id == 4) {
            setSneaker4(sneaker4 - 1);
        }
        else {
            setSneaker5(sneaker5 - 1);
        }
    }

    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }

    function goToCart() {
        totalProducts(sum);
        totalPriceMain(Price);
        totalsneakers(sneaker1, sneaker2, sneaker3, sneaker4, sneaker5);
        updateLogInStatus("Cart");
    }

    return (
        <>
            <h1>Välkommen {stateName}</h1>
            <p>Shopping-Cart (amount of products): {sum}</p>
            <button onClick={goToCart}>Varukorg</button>
            <button onClick={clickToHomePage}>logga ut</button>
            <br />
            <ProductStructure pInfo={product1} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product2} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product3} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product4} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product5} totalSum={totalSum} removeFromSum={removeFromSum} />
        </>
    )
}