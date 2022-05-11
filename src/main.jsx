import ReactDOM from "react-dom/client";
import { useState } from "react";
import HomePage from "./moduler/HomePage.jsx"
import ShopPage from "./moduler/ShopPage.jsx";
import ShoppingCartPage from "./moduler/ShoppingCartPage.jsx";


function App() {
    const [stateName, setStateName] = useState('');
    function updateUserInfo(userName) {
        setStateName(userName);
        console.log(userName); 
    }

    const [stateIsLoggedIn, setStateIsLoggedIn] = useState("HomePage");
    function updateLogInStatus(status) {
        setStateIsLoggedIn(status)
    }

    const [total, setTotal] = useState(0);
    function totalProducts(tot) {
        setTotal(tot);
    }

    const [totalPrice, setTotalPrice] = useState(0);
    function totalPriceMain(tot) {
        setTotalPrice(tot);
    }

    const [totalSneaker1, setTotalSneaker1] = useState(0);
    const [totalSneaker2, setTotalSneaker2] = useState(0);
    const [totalSneaker3, setTotalSneaker3] = useState(0);
    const [totalSneaker4, setTotalSneaker4] = useState(0);
    const [totalSneaker5, setTotalSneaker5] = useState(0);
    function totalsneakers(totSneaker1, totSneaker2, totSneaker3, totSneaker4, totSneaker5) {
        setTotalSneaker1(totSneaker1);
        setTotalSneaker2(totSneaker2);
        setTotalSneaker3(totSneaker3);
        setTotalSneaker4(totSneaker4);
        setTotalSneaker5(totSneaker5);
    }


    return (
        <>
            {stateIsLoggedIn == "ShopPage" && <ShopPage updateLogInStatus={updateLogInStatus} stateName={stateName} totalProducts={totalProducts} totalPriceMain={totalPriceMain} totalsneakers={totalsneakers} />}
            {stateIsLoggedIn == "HomePage" && <HomePage updateLogInStatus={updateLogInStatus} updateUserInfo={updateUserInfo} />}
            {stateIsLoggedIn == "Cart" && <ShoppingCartPage updateLogInStatus={updateLogInStatus} stateName={stateName} total={total} totalPrice={totalPrice} totalSneaker1={totalSneaker1} totalSneaker2={totalSneaker2} totalSneaker3={totalSneaker3} totalSneaker4={totalSneaker4} totalSneaker5={totalSneaker5} />}
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);