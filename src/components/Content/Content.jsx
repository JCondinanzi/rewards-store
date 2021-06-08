import { useEffect, useState } from 'react';
import Filters from './Filters';
import Results from './Results';
import './Content.css';

export default function Content() {
    let [products, setProducts] = useState([]);
    let response = fetch('https://coding-challenge-api.aerolab.co/products', {
        headers: {
            Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJlOTgwMjliNzc4MTAwMjA5YzVhYzMiLCJpYXQiOjE2MjMxMDM0OTB9.yIxUJCcIxZDU-tJv_f7iNj91bg_kTg2TsgcL9WhB4SE',
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setProducts(data);
        });
    return (
        <div className="content">
            <Filters />
            <Results products={products} />
        </div>
    );
}
