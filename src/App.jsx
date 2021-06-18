import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import { useState, useEffect } from 'react';

function App() {
    let [coinsAvailable, setCoinsAvailable] = useState(0);
    let [name, setName] = useState('');
    let addCoins = () => {
        let body = { amount: 1000 };
        fetch('https://coding-challenge-api.aerolab.co/user/points', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlOTgwMjliNzc4MTAwMjA5YzVhYzMiLCJpYXQiOjE2MjMxMDM0OTB9.yIxUJCcIxZDU-tJv_f7iNj91bg_kTg2TsgcL9WhB4SE',
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCoinsAvailable(data['New Points']);
            });
    };

    let redeemProduct = (id) => {
        let body = { productId: id };
        fetch('https://coding-challenge-api.aerolab.co/redeem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlOTgwMjliNzc4MTAwMjA5YzVhYzMiLCJpYXQiOjE2MjMxMDM0OTB9.yIxUJCcIxZDU-tJv_f7iNj91bg_kTg2TsgcL9WhB4SE',
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                getUserData();
            });
    };

    let getUserData = () => {
        fetch('https://coding-challenge-api.aerolab.co/user/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlOTgwMjliNzc4MTAwMjA5YzVhYzMiLCJpYXQiOjE2MjMxMDM0OTB9.yIxUJCcIxZDU-tJv_f7iNj91bg_kTg2TsgcL9WhB4SE',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCoinsAvailable(data.points);
                setName(data.name);
            });
    };
    useEffect(getUserData, []);

    return (
        <div className="app">
            <Header
                addCoins={addCoins}
                currentPoints={coinsAvailable}
                name={name}
            />
            <Banner />
            <Content onRedeem={redeemProduct} />
        </div>
    );
}

export default App;
