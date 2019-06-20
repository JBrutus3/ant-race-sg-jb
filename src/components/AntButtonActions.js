import React from 'react';
import classNames from "classnames";

function AntButtonActions(props) {
    const { ants, setInProgress, startRace } = props;
    const isDisabled = startRace || ants.length === 0;

    const beginRace = () => {
        setInProgress();
    };

    return (
        <div className="content-container">
            <div className="action-button">
                <button
                    type="button"
                    onClick={beginRace}
                    className={classNames("button", { disabled: isDisabled })}
                    disabled={isDisabled}>
                    {isDisabled ? 'Please Wait' : 'Start Race'}
                </button>
            </div>
        </div>
    );
}

export default AntButtonActions;