import './Header.css';
import Button from '../Common/Button';
import logoAerolab from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header">
            <img className="header--logo" src={logoAerolab} alt="Aerolab"></img>
            <div className="header--right">
                <Link to="/" className="header--products">
                    Products
                </Link>
                <Link to="/history" className="header--history">
                    History
                </Link>
                <div>
                    <p className="header--user">{props.name}</p>
                </div>
                <Button
                    type="secondary"
                    showCoin={true}
                    onClick={props.addCoins}
                >
                    {props.currentPoints}
                </Button>
            </div>
        </div>
    );
}
