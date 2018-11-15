import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import uuid from 'uuid';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

const createdAt = moment().endOf('week');
let expense = {
    description: 'Power bill',
    note: 'paid on time',
    amount: 23523,
    createdAt
};

test('should add new expense to state', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([expense]);
});

test('should remove expense from state by id', () => {
    const id = uuid();
    const currentState = [
        {
            id,
            ...expense
        }
    ];
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };
    const state = expensesReducer(currentState, action);
    expect(state).toEqual([]);
});

test('should not remove any expense from state due to invalid id', () => {
    const id = uuid();
    const currentState = [
        {
            id,
            ...expense
        }
    ];
    const action = {
        type: 'REMOVE_EXPENSE',
        id: uuid()
    };
    const state = expensesReducer(currentState, action);
    expect(state).toEqual(currentState);
});

const updates = {
    description: 'Furnace repair bill',
    createdAt: moment().endOf('month')
};

test('should update expense in state', () => {
    const id = uuid();
    const currentState = [
        {
            id,
            ...expense
        }
    ];
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(currentState, action);
    expect(state).toEqual([
        {
            ...expense,
            id,
            ...action.updates
        }
    ]);
});

test('should not update any expense in state due to invalid id', () => {
    const id = uuid();
    const currentState = [
        {
            id,
            ...expense
        }
    ];
    const action = {
        type: 'EDIT_EXPENSE',
        id: uuid(),
        updates
    };
    const state = expensesReducer(currentState, action);
    expect(state).toEqual(currentState);
});