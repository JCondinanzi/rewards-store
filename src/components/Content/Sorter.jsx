import Button from '../Common/Button';
import './Sorter.css';

export default function Sorter() {
    return (
        <div>
            <div className="sorter--button">
                <Button />
                <Button type="secondary" />
                <Button type="secondary" />
            </div>
        </div>
    );
}
