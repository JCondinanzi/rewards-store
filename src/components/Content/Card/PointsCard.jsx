import Button from '../../Common/Button';
import './PointsCard.css';
import trophyIcon from '../../../images/icons/trophy.svg';
import crownIcon from '../../../images/icons/crown.svg';
import starIcon from '../../../images/icons/star.svg';

export default function PointsCard(props) {
    const points = [1000, 5000, 7500];
    const icons = [starIcon, crownIcon, trophyIcon];

    const addCoins = () => {
        props.addCoins(points[props.tier - 1]);
    };
    return (
        <div className="points-card">
            <img
                src={icons[props.tier - 1]}
                className="points-card--img"
                alt="tier-icon"
            />
            <h4 className="points-card--tier">Tier {props.tier}</h4>
            <Button className="points-card--button" showCoin onClick={addCoins}>
                {points[props.tier - 1]}
            </Button>
        </div>
    );
}
