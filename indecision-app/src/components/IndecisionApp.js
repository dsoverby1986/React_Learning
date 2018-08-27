import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState({ options: [] });
    };

    handleDeleteOption = (option) => {
        this.setState((prevState) =>({ options: prevState.options.filter((o) => o !== option )}));
    };

    handlePickOption = () => {
        this.setState({
            selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]
        });
    };

    handleAddOption = (option) => {
        if(!option)
            return 'Enter a valid value to add item';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists';

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleClearSelectedOption = () => {
        this.setState({
            selectedOption: undefined
        });
    ;}

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

    render() {
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}