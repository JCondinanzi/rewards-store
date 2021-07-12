import './Label.css';

export default function Label(props) {
    return (
        <div className="label">
            {props.visibleProductsAmount +
                props.pageIndex * 16 +
                ' of ' +
                props.productsAmount +
                ' results'}
        </div>
    );
}
