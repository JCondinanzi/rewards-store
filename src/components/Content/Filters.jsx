import Label from './Label';
import Sorter from './Sorter';
import Pager from './Pager';
import './Filters.css';

export default function Filters(props) {
    return (
        <div className="filters">
            <div className="filters--left">
                <Label productsAmount={props.productsAmount} />
                <Sorter />
            </div>
            <Pager />
        </div>
    );
}
