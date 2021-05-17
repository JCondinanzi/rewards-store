import './Header.css'
import logoAerolab from '../images/logo.svg'
export default function Header() {
  return (
    <div className="header">
      <img src={logoAerolab} alt="Aerolab"></img>
      <div className="header--right">
        <div>nombre</div>
        <div>puntos</div>
      </div>
    </div>
  );
}
