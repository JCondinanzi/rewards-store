import './Label.css';

export default function Label(props) {
    return (
        <div className="label">
            {props.visibleProductsAmount +
                (props.pageIndex - 1) * props.productsPerPage +
                ' of ' +
                props.productsAmount +
                ' results'}
        </div>
    );
}
