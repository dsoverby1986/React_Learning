import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'Bill';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
    const date = moment().startOf('year');
    const action = { 
        type: 'SET_START_DATE', 
        date 
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(date);
});

test('Should set endDate', () => {
    const date = moment().endOf('year');
    const action = {
        type: 'SET_END_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(date);
});