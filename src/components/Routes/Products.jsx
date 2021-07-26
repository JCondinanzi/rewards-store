import Banner from '../Banner/Banner';
import Content from '../Content/Content';
import './Products.css';
import { useState } from 'react';

export default function Products(props) {
    let [showModal, setShowModal] = useState(false);

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
                props.onRedeem();
                setShowModal(true);
                document.body.className = 'no-scroll';
            });
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.className = '';
    };

    return (
        <div className="products">
            <Banner title="Products" />
            <Content
                onRedeem={redeemProduct}
                coinsAvailable={props.coinsAvailable}
            />
            {showModal ? (
                <div className="products--modal">
                    <h1>exito</h1>
                    <button onClick={closeModal}>Aceptar</button>
                </div>
            ) : null}
        </div>
    );
}
