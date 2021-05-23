import './Header.css';
import Button from '../Common/Button';
import logoAerolab from '../../images/logo.svg';

export default function Header() {
    return (
        <div className="header">
            <img className="header--logo" src={logoAerolab} alt="Aerolab"></img>
            <div className="header--right">
                <div>
                    <p className="header--user">nombre</p>
                </div>
                <Button type="secondary" showCoin={true} />
            </div>
        </div>
    );
}
