import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <table>
            <thead>
                <tr>
                    <th colSpan="3" align="left">Expenses - { props.expenses.length }</th>
                </tr>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.expenses.map((expense) => {
                        console.log(expense);
                        return <ExpenseListItem
                            key={expense.id} {...expense} />;
                    })
                }
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);