import { useEffect, useState } from 'react';
import Filters from './Filters';
import Results from './Results';
import Footer from './Footer';
import './Content.css';
import usePagination from '../Hooks/usePagination';

export default function Content(props) {
    let [products, setProducts] = useState([]);
    let [sortedProducts, setSortedProducts] = useState([]);
    let [sortedBy, setSortedBy] = useState('');

    const itemsPerPage = 16;
    const { next, prev, currentData, currentPage } = usePagination(
        sortedBy ? sortedProducts : products,
        itemsPerPage
    );

    let fetchProducts = () => {
        fetch('https://coding-challenge-api.aerolab.co/products', {
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
    };
    let sortProducts = (type) => {
        if (sortedBy === type) {
            setSortedBy('');
            return;
        }

        setSortedBy(type);
        let sorted = [].concat(products);

        if (type === 'Lowest price') {
            sorted.sort((a, b) => {
                if (a.cost < b.cost) {
                    return -1;
                }
                return 0;
            });
        } else if (type === 'Highest price') {
            sorted.sort((a, b) => {
                if (a.cost > b.cost) {
                    return -1;
                }
                return 0;
            });
        }

        setSortedProducts(sorted);
    };

    useEffect(fetchProducts, []);

    return (
        <div className="content">
            <Filters
                pageIndex={currentPage}
                changePage={{ next, prev }}
                sortProducts={sortProducts}
                productsAmount={products.length}
                visibleProductsAmount={currentData().length}
                productsPerPage={itemsPerPage}
            />
            <Results
                coinsAvailable={props.coinsAvailable}
                products={currentData()}
                onRedeem={props.onRedeem}
            />
            <Footer
                pageIndex={currentPage}
                productsAmount={products.length}
                visibleProductsAmount={currentData().length}
                changePage={{ next, prev }}
                productsPerPage={itemsPerPage}
            />
        </div>
    );
}
