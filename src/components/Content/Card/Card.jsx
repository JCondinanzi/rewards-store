import { useState } from 'react';
import './Card.css';
import Button from '../../Common/Button';
import coin from '../../../images/icons/coin.svg';
import buyWhite from '../../../images/icons/buy-white.svg';
import buyBlue from '../../../images/icons/buy-blue.svg';

export default function Card(props) {
    let [hover, setHover] = useState(false);
    let mouseHover = () => {
        setHover(!hover);
    };
    return (
        <div
            className="card"
            onMouseEnter={mouseHover}
            onMouseLeave={mouseHover}
        >
            <div className="card--content">
                <img className="card--buy-blue" src={buyBlue}></img>
                <img className="card--img" src={props.img} alt="producto"></img>
                <div className="card--separator"></div>
                <div className="card--category">{props.category}</div>
                <div className="card--name">{props.name}</div>
            </div>
            <div className={'card--hover ' + (hover ? '' : 'hidden')}>
                <img className="card--hover-buy-white" src={buyWhite}></img>
                <div className="card--hover-content">
                    <span className="card--hover-price">$12.000</span>
                    <img className="card--hover-coin" src={coin}></img>
                </div>
                <button className="card--hover-button">Redeem now</button>
            </div>
        </div>
    );
}
