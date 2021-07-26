import Banner from '../Banner/Banner';
import Button from '../Common/Button';
import './History.css';

export default function History(props) {
    const redeemHistory = props.redeemHistory.map((item) => {
        return (
            <li key={item.name} className="history--list-item">
                <img
                    src={item.img.url}
                    className="history--list-item-img"
                ></img>
                <p>{item.name}</p>
                <Button showCoin className="history--list-item-button">
                    {item.cost}
                </Button>
            </li>
        );
    });

    return (
        <div className="history">
            <Banner title="History" />
            <ul className="history--list">{redeemHistory}</ul>
        </div>
    );
}
