import './Button.css';
import coin from '../../images/icons/coin.svg';

export default function Button(props) {
    let buttonClass = 'button ' + props.className;

    if (props.type === 'secondary') {
        buttonClass = 'button--secondary ' + buttonClass;
    }

    return (
        <button onClick={props.onClick} className={buttonClass}>
            {props.text || props.children}
            {props.showCoin ? (
                <img className="button--coin" src={coin} alt="coin"></img>
            ) : null}
        </button>
    );
}
