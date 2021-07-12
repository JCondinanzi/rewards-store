import Label from './Label';
import Sorter from './Sorter';
import Pager from './Pager';
import './Filters.css';

export default function Filters(props) {
    return (
        <div className="filters">
            <div className="filters--left">
                <Label
                    visibleProductsAmount={props.visibleProductsAmount}
                    productsAmount={props.productsAmount}
                    pageIndex={props.pageIndex}
                />
                <Sorter sortProducts={props.sortProducts} />
            </div>
            <Pager
                pageIndex={props.pageIndex}
                changePage={props.changePage}
                productsAmount={props.productsAmount}
            />
        </div>
    );
}
