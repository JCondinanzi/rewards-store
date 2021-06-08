import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.img} alt="producto"></img>
            <div className="card--separator"></div>
            <div className="card--category">{props.category}</div>
            <div className="card--name">{props.name}</div>
        </div>
    );
}
