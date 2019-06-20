import React, { useState, useEffect, useRef } from 'react';
import { orderBy } from 'lodash';
import Header from "./Header";
import AntList from './AntList';
import AntButtonActions from './AntButtonActions';
import { fetchAnts } from '../actions/ants';

function AntDashBoard() {
    const [ants, setAnts] = useState([]);
    const [crossFinishLineCount, setcrossFinishLine] = useState(0);
    const [startRace, setStartRace] = useState(false);
    const [raceFinished, setRaceFinished] = useState(false);

    // When setTimeout is scheduled it's using the value of ants at the time it was scheduled
    // Need to use a "container" to write the updated state value to, and read it later on in the timeout
    const antsList = useRef(ants);
    antsList.current = ants;
    const crossFinishLineRef = useRef(crossFinishLineCount);
    crossFinishLineRef.current = crossFinishLineCount;

    const getAntList = async () => {
        fetchAnts().then(({ data }) => {
            const ants = data.ants.map((ant) => {
                return {
                    ...ant,
                    percent: 0,
                    likelihood: 'not yet run',
                };
            });

            setAnts(ants);
        });
    };

    const setInProgress = () => {
        setStartRace(true);
        setcrossFinishLine(0);
        setRaceFinished(false);

        setAnts(antsList.current.map((ant) => {
            return {
                ...ant,
                likelihood: 'in progress',
            };
        }));

    }

    const setCalculated = (antName, percent) => {
        const newAntsList = antsList.current.map((ant) => {
            const { name, likelihood} = ant;

            if (antName === name && likelihood !== 'all calculated') {
                setcrossFinishLine(crossFinishLineRef.current + 1);

                if (crossFinishLineRef.current === ants.length) {
                    setStartRace(false);
                    setRaceFinished(true);
                }

                return {
                    ...ant,
                    percent: Math.round(percent * 100),
                    likelihood: 'all calculated',
                };
            }

            return {
                ...ant,
            };
        });

        setAnts(orderBy(newAntsList, ['percent'], ['desc']));
    }

    useEffect(() => { getAntList(ants) }, []);
    const { current: currentAnts } = antsList;

    return (
        <div>
            <Header />
            <AntList ants={currentAnts} setCalculated={setCalculated} raceFinished={raceFinished} />
            <AntButtonActions ants={currentAnts} startRace={startRace} setInProgress={setInProgress} crossFinishLineCount={crossFinishLineRef.current} />
        </div>
    );
}

export default AntDashBoard;