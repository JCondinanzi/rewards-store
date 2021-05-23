import './Banner.css';
import bannerImg from '../../images/header-x1.png';

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner--img" src={bannerImg} alt="Electronics"></img>
      <div className="banner--text">Electronics</div>
    </div>
  );
}
