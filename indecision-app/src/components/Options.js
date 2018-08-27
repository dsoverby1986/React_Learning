import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button 
            className="btn btn-danger"
            onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <h4>Please add an option to get started!</h4>}
        {
            props.options.map((option) => (
            <Option 
                key={option} 
                handleDeleteOption={props.handleDeleteOption} 
                optionText={option} />
            ))
        }
    </div>
);

export default Options;