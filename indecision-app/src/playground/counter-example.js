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

    componentDidMount() {
        debugger;
        try {
            const count = parseInt(localStorage.getItem('count'), 10);
            if(!isNaN(count))
                this.setState(() => ({ count }));
        } catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count)
            localStorage.setItem('count', this.state.count);
    }

    handleAddOne() {
        debugger;
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
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