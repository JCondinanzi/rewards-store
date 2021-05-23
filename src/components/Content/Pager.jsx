import './Pager.css';
import arrowLeft from '../../images/icons/arrow-left.svg';
import arrowRight from '../../images/icons/arrow-right.svg';

export default function Pager() {
    return (
        <div>
            <button className="pager--arrow-left">
                <img
                    className="pager--arrow-img"
                    src={arrowLeft}
                    alt="previous"
                ></img>
            </button>
            <button className="pager--arrow-right">
                <img
                    className="pager--arrow-img"
                    src={arrowRight}
                    alt="next"
                ></img>
            </button>
        </div>
    );
}
