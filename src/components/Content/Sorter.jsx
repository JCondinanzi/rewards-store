import Button from '../Common/Button';
import './Sorter.css';

export default function Sorter() {
    return (
        <div className="sorter">
            <div className="sorter--separator"></div>
            <p className="sorter--title">Sort by:</p>
            <div className="sorter--button">
                <Button />
                <Button type="secondary" />
                <Button type="secondary" />
            </div>
        </div>
    );
}
