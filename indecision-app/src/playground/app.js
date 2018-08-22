class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    // lifecycle methods - only available in class based components (another reason why stateless functional components are so performant: less overhead)
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
                this.setState(() => ({ options }));
        } catch(e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) =>({ options: prevState.options.filter((o) => o !== option )}));
    }

    handlePickOption() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption(option) {
        if(!option)
            return 'Enter a valid value to add item';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists';

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div className="container">
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

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

const Options = (props) => {
    return (
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
};

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

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));