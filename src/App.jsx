import './App.css';
import Header from './components/Header/Header';
import Products from './components/Routes/Products';
import History from './components/Routes/History';
import MorePoints from './components/Routes/MorePoints';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    let [coinsAvailable, setCoinsAvailable] = useState(0);
    let [name, setName] = useState('');
    let [history, setHistory] = useState([]);

    let addCoins = (points) => {
        let body = { amount: points };
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
                setHistory(data.redeemHistory.reverse());
            });
    };
    useEffect(getUserData, []);

    const onRedeem = () => {
        getUserData();
    };

    return (
        <div className="app">
            <Router basename="/rewards-store">
                <Header currentPoints={coinsAvailable} name={name} />
                <Switch>
                    <Route exact path="/">
                        <Products
                            onRedeem={onRedeem}
                            coinsAvailable={coinsAvailable}
                        />
                    </Route>
                    <Route path="/history">
                        <History redeemHistory={history} />
                    </Route>
                    <Route path="/more-points">
                        <MorePoints addCoins={addCoins} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
