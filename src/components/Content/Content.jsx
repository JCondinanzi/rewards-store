import { useEffect, useState } from 'react';
import Filters from './Filters';
import Results from './Results';
import Footer from './Footer';
import './Content.css';

export default function Content(props) {
    let [products, setProducts] = useState([]);
    let [pageIndex, setPageIndex] = useState(0);

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
        let sortedProducts = products;

        if (type === 'Lowest price') {
            sortedProducts = products.sort((a, b) => {
                if (a.cost < b.cost) {
                    return -1;
                }
            });
        } else if (type === 'Highest price') {
            sortedProducts = products.sort((a, b) => {
                if (a.cost > b.cost) {
                    return -1;
                }
            });
        }

        setProducts([].concat(sortedProducts));
    };

    let changePage = (i) => {
        setPageIndex(pageIndex + i);
    };

    const elementsPerPage = 16;
    let visibleProducts = products.slice(
        pageIndex * elementsPerPage,
        pageIndex * elementsPerPage + elementsPerPage
    );

    useEffect(fetchProducts, []);
    return (
        <div className="content">
            <Filters
                pageIndex={pageIndex}
                changePage={changePage}
                sortProducts={sortProducts}
                productsAmount={products.length}
                visibleProductsAmount={visibleProducts.length}
            />
            <Results
                coinsAvailable={props.coinsAvailable}
                products={visibleProducts}
                onRedeem={props.onRedeem}
            />
            <Footer
                pageIndex={pageIndex}
                productsAmount={products.length}
                visibleProductsAmount={visibleProducts.length}
                changePage={changePage}
            />
        </div>
    );
}
