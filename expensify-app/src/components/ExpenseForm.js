import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM. Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            this.setState(() => ({ amount }));
    };
    onDateChange = (createdAt) => {
        if(createdAt)
            this.setState(() => ({ createdAt }));
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount)
            this.setState(() => ({ error: 'Please provide description and amount' }))
        else {
            if(this.state.error)
                this.setState(() => ({ error: '' }));
            console.log(this.props);
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <div className="error">{this.state.error}</div>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                    <div>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Add a note for your expense (optional)"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button>{this.props.expense ? 'Update Expense' : 'Add Expense'}</button>
                    </div>
                </form>
            </div>
        )
    }
}