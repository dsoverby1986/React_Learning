import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
// SET_END_DATE

// Creating reducers for each root property in state: expenses, filters

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(e => e.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((e) => {
                if(e.id == action.id) {
                    return {
                        ...e,
                        ...action.updates
                    };
                }
                return e;
            });
        default:
            return state;
    }
};

// Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        default: 
            return state;
    }
};

// Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffe', amount: 300 }));

store.dispatch(removeExpense({ id: expense1.expense.id }));

store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
    expenses: [{
        id: 'sdfkjsdflk',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};