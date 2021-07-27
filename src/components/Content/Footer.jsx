import Label from './Label';
import Pager from './Pager';
import './Footer.css';

export default function Footer(props) {
    return (
        <div className="footer">
            <Label
                visibleProductsAmount={props.visibleProductsAmount}
                productsAmount={props.productsAmount}
                pageIndex={props.pageIndex}
                productsPerPage={props.productsPerPage}
            />
            <Pager
                pageIndex={props.pageIndex}
                productsPerPage={props.productsPerPage}
                changePage={props.changePage}
                productsAmount={props.productsAmount}
            />
        </div>
    );
}
