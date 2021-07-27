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
                <Link to="/more-points" className="header--more-points">
                    More Points
                </Link>
                <div>
                    <p className="header--user">{props.name}</p>
                </div>
                <Button className="header--button" type="secondary" showCoin>
                    {props.currentPoints}
                </Button>
            </div>
        </div>
    );
}
