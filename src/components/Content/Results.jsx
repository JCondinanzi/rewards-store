import Card from './Card/Card';
import './Results.css';

export default function Results(props) {
    return (
        <div className="results">
            {props.products.map((item) => {
                return (
                    <Card
                        img={item.img.url}
                        name={item.name}
                        category={item.category}
                        cost={item.cost}
                        id={item._id}
                        onRedeem={props.onRedeem}
                    />
                );
            })}
        </div>
    );
}
