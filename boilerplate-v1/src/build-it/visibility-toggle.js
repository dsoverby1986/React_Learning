class VisibiltyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.title = 'Visibility Toggle';
        this.details = 'Hey. These are some details you can now see!';
        this.state = {
            show: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            };
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{this.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary" onClick={this.handleToggleVisibility}>{this.state.show ? 'Hide' : 'Show'} Details</button>
                    </div>
                </div>
                { this.state.show &&
                    <div className="row">
                        <div className="col-md-12">
                            <p>{this.details}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'));