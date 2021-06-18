import Button from '../Common/Button';
import './Sorter.css';

export default function Sorter() {
    return (
        <div className="sorter">
            <div className="sorter--separator"></div>
            <p className="sorter--title">Sort by:</p>
            <div className="sorter--button">
                <Button text="Most recent" />
                <Button text="Lowest price" type="secondary" />
                <Button text="Highest price" type="secondary" />
            </div>
        </div>
    );
}
