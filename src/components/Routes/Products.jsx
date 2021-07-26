import Banner from '../Banner/Banner';
import Content from '../Content/Content';
import './Products.css';
import { useState } from 'react';
import iconHappy from '../../images/icons/happy.svg';

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
                    <div className="products--modal--content">
                        <img
                            className="products--modal--icon"
                            src={iconHappy}
                        ></img>
                        <h1 className="products--modal--title">
                            ¡FELICITACIONES!
                        </h1>
                        <h3 className="products--modal--text">
                            Tu compra se relizó con éxito
                        </h3>
                        <button
                            className="products--modal--button"
                            onClick={closeModal}
                        >
                            Volver a productos
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
