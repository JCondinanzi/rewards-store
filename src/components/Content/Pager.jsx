import './Pager.css';
import arrowLeft from '../../images/icons/arrow-left.svg';
import arrowRight from '../../images/icons/arrow-right.svg';

export default function Pager(props) {
    const onClickLeft = () => {
        props.changePage(-1);
    };
    const onClickRight = () => {
        props.changePage(1);
    };
    return (
        <div>
            {props.pageIndex <= 0 ? null : (
                <button onClick={onClickLeft} className="pager--arrow-left">
                    <img
                        className="pager--arrow-img"
                        src={arrowLeft}
                        alt="previous"
                    ></img>
                </button>
            )}

            {(props.pageIndex + 1) * 16 < props.productsAmount ? (
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
