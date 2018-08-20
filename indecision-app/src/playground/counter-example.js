class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: ++prevState.count
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: --prevState.count
            };
        });
    }

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Count: {this.state.count}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={this.handleAddOne}>+1</button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-warning" onClick={this.handleMinusOne}>-1</button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger" onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));