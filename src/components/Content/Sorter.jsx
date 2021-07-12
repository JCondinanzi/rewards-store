import Button from '../Common/Button';
import { useState } from 'react';
import './Sorter.css';

export default function Sorter(props) {
    let [sortedBy, setSortedBy] = useState('');
    let changeSelected = (e) => {
        setSortedBy(e.target.textContent);
        props.sortProducts(e.target.textContent);
    };
    return (
        <div className="sorter">
            <div className="sorter--separator"></div>
            <p className="sorter--title">Sort by:</p>
            <div className="sorter--button">
                <Button
                    onClick={changeSelected}
                    text="Lowest price"
                    type={sortedBy != 'Lowest price' ? 'secondary' : ''}
                />
                <Button
                    onClick={changeSelected}
                    text="Highest price"
                    type={sortedBy != 'Highest price' ? 'secondary' : ''}
                />
            </div>
        </div>
    );
}
