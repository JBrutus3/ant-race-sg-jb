import React, { useEffect } from 'react';
import { generateAntWinLikelihoodCalculator } from '../util/calculator';

function AntCard(props) {
    const { index, name, weight, length, color, likelihood, percent, setCalculated, raceFinished } = props;
    const showTrophy = index === 0 && raceFinished;

    useEffect(() => {
        if (likelihood === 'in progress') {
            generateAntWinLikelihoodCalculator()(data => {
                setCalculated(name, data);
            });
        }
    });

    return (
        <div className="list-card">
            <div>
                <div className="list-card__title_row">
                    <h3 className="list-card__title">{name}</h3>
                    {showTrophy && <img className="trophy" src="/images/trophy.jpeg" alt='trophy' />}
                </div>
                <span className="list-card__sub-info">Weight: <b>{weight}</b> Length: <b>{length}</b> Color: <b>{color}</b></span>
            </div>
            <div>
                <h3 className="list-card__calculated_info">{likelihood}</h3>
                {percent > 0 &&
                    <h3 className="list-card__calculated_info percent">{percent}%</h3>}
            </div>
        </div>
    );
}

export default AntCard;
