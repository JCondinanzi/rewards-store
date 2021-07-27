import Banner from '../Banner/Banner';
import Button from '../Common/Button';
import './History.css';
import usePagination from '../Hooks/usePagination';
import Pager from '../Content/Pager';
import Label from '../Content/Label';

export default function History(props) {
    const maxItemsPerPage = 5;
    const { currentData, currentPage, next, prev } = usePagination(
        props.redeemHistory,
        maxItemsPerPage
    );

    const redeemHistory = currentData().map((item, index) => {
        return (
            <li key={index} className="history--list-item">
                <img
                    src={item.img.url}
                    className="history--list-item-img"
                    alt="product"
                ></img>
                <p>{item.name}</p>
                <Button showCoin className="history--list-item-button">
                    {item.cost}
                </Button>
            </li>
        );
    });

    return (
        <div className="history">
            <Banner title="History" />
            <ul className="history--list">{redeemHistory}</ul>
            <div className="history--footer">
                <Label
                    visibleProductsAmount={currentData().length}
                    productsAmount={props.redeemHistory.length}
                    pageIndex={currentPage}
                    productsPerPage={maxItemsPerPage}
                />
                <Pager
                    changePage={{ next, prev }}
                    pageIndex={currentPage}
                    productsPerPage={maxItemsPerPage}
                    productsAmount={props.redeemHistory.length}
                />
            </div>
        </div>
    );
}
