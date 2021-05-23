import './Button.css';
import coin from '../../images/icons/coin.svg';

export default function Button(props) {
    let buttonClass = 'button';

    if (props.type === 'secondary') {
        buttonClass = 'button button--secondary';
    }

    return (
        <div>
            <button className={buttonClass}>
                6000
                {props.showCoin ? (
                    <img className="button--coin" src={coin} alt="coin"></img>
                ) : null}
            </button>
        </div>
    );
}
