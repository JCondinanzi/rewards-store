import Banner from '../Banner/Banner';
import PointsCard from '../Content/Card/PointsCard';
import './MorePoints.css';
import { useState } from 'react';
import Modal from '../Modal';

export default function MorePoints(props) {
    let [showModal, setShowModal] = useState(false);

    const addCoins = (points) => {
        props.addCoins(points);
        document.body.className = 'no-scroll';
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.className = '';
    };

    return (
        <div className="more-points">
            <Banner title="More Points" />
            <h1 className="more-points--title">Add More Points</h1>
            <div className="more-points--content">
                <PointsCard tier="1" addCoins={addCoins} />
                <PointsCard tier="2" addCoins={addCoins} />
                <PointsCard tier="3" addCoins={addCoins} />
            </div>
            {showModal ? (
                <Modal closeModal={closeModal}>
                    Your points were added successully!
                </Modal>
            ) : null}
        </div>
    );
}
