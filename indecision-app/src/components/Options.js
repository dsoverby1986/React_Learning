import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">  
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <h4 className="widget__message">Please add an option to get started!</h4>}
        {
            props.options.map((option, i) => (
            <Option 
                key={option} 
                handleDeleteOption={props.handleDeleteOption} 
                count={i + 1}
                optionText={option} />
            ))
        }
    </div>
);

export default Options;