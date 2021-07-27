import './Pager.css';
import arrowLeft from '../../images/icons/arrow-left.svg';
import arrowRight from '../../images/icons/arrow-right.svg';

export default function Pager(props) {
    const onClickLeft = () => {
        props.changePage.prev();
    };
    const onClickRight = () => {
        props.changePage.next();
    };
    return (
        <div>
            {props.pageIndex <= 1 ? null : (
                <button onClick={onClickLeft} className="pager--arrow-left">
                    <img
                        className="pager--arrow-img"
                        src={arrowLeft}
                        alt="previous"
                    ></img>
                </button>
            )}

            {props.pageIndex * props.productsPerPage < props.productsAmount ? (
                <button onClick={onClickRight} className="pager--arrow-right">
                    <img
                        className="pager--arrow-img"
                        src={arrowRight}
                        alt="next"
                    ></img>
                </button>
            ) : null}
        </div>
    );
}
