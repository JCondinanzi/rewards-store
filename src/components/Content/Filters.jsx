import Label from './Label';
import Sorter from './Sorter';
import Pager from './Pager';
import './Filters.css';

export default function Filters() {
    return (
        <div className="filters">
            <Label />
            <Sorter />
            <Pager />
        </div>
    );
}
