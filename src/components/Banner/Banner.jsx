import './Banner.css';
import bannerImg from '../../images/header-x1.png';

export default function Banner(props) {
    return (
        <div className="banner">
            <img
                className="banner--img"
                src={bannerImg}
                alt={props.title}
            ></img>
            <div className="banner--text">{props.title}</div>
        </div>
    );
}
