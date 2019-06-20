import React from 'react';
import Loading from './Loading';
import AntCard from './AntCard';

function AntList(props) {
    const { ants, setCalculated, raceFinished } = props;

    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-mobile">Ants</div>
                <div className="show-desktop">Ant</div>
                <div className="show-desktop">Likelihood</div>
            </div>
            {
                ants && ants.length === 0 ? (
                    <Loading />
                ) : (
                        <div className="list-body"> {
                            ants.map((ant, key) => {
                                return <AntCard key={key} index={key} setCalculated={setCalculated} raceFinished={raceFinished} {...ant} />;
                            })
                        }
                        </div>)
            }
        </div>
    );
}

export default AntList;