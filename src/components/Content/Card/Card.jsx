import { useState } from 'react';
import './Card.css';
import Button from '../../Common/Button';
import coin from '../../../images/icons/coin.svg';
import buyWhite from '../../../images/icons/buy-white.svg';
import buyBlue from '../../../images/icons/buy-blue.svg';

export default function Card(props) {
    let [hover, setHover] = useState(false);
    let hideHover = () => {
        setHover(false);
    };
    let showHover = () => {
        setHover(true);
    };
    let onClick = () => {
        props.onRedeem(props.id);
    };
    const canBuy = props.coinsAvailable - props.cost >= 0;
    return (
        <div className="card" onMouseEnter={showHover} onMouseLeave={hideHover}>
            <div className="card--content">
                {canBuy ? (
                    <img
                        className="card--buy-blue"
                        src={buyBlue}
                        alt="icon"
                    ></img>
                ) : (
                    <Button showCoin className="card--buy-black">
                        Te faltan {props.cost - props.coinsAvailable}{' '}
                    </Button>
                )}

                <img className="card--img" src={props.img} alt="producto"></img>
                <div className="card--separator"></div>
                <div className="card--category">{props.category}</div>
                <div className="card--name">{props.name}</div>
            </div>
            {canBuy ? (
                <div className={'card--hover ' + (hover ? '' : 'hidden')}>
                    <img
                        className="card--hover-buy-white"
                        src={buyWhite}
                        alt="icon"
                    ></img>
                    <div className="card--hover-content">
                        <span className="card--hover-price">{props.cost}</span>
                        <img
                            className="card--hover-coin"
                            src={coin}
                            alt="coin"
                        ></img>
                    </div>
                    <button className="card--hover-button" onClick={onClick}>
                        Redeem now
                    </button>
                </div>
            ) : null}
        </div>
    );
}
