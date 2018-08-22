import React from 'react';

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if(!error)
            e.target.option.value = '';
    }

    render() {
        return (
            <div>
                { this.state.error &&
                    <div className="alert alert-danger">{this.state.error}</div>
                }
                <form onSubmit={this.handleAddOption}>
                    <div className="input-group">
                        <input type="text" className="form-control" name="option" autoFocus />
                        <span className="input-group-btn">
                            <button className="btn btn-success">Add option</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}