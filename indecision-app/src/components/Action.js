import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button
                className="btn btn-info"
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};

export default Action;