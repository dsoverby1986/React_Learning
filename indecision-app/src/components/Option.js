import React from 'react';

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                className="btn btn-danger" 
                onClick={(e) => {props.handleDeleteOption(props.optionText);}}
            >Remove</button>
        </div>
    );
};

export default Option;