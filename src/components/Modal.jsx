import iconHappy from '../images/icons/happy.svg';

export default function Modal(props) {
    return (
        <div className="products--modal">
            <div className="products--modal--content">
                <img
                    className="products--modal--icon"
                    src={iconHappy}
                    alt="happy"
                ></img>
                <h1 className="products--modal--title">Congratulations!</h1>
                <h3 className="products--modal--text">{props.children}</h3>
                <button
                    className="products--modal--button"
                    onClick={props.closeModal}
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
