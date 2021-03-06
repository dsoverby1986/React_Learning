import { createStore } from 'redux';

// Action generators = functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

// reducers
// 1. Reducers are pure functions (doesn't use or change anything outside of the function scope)
// 2. Never change state or action (just return object representing the new state)

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// store.subscribe() gets called anytime the state managed by the redux store changes and returns a function that can be invoked to unsubscribe from the store's state changes ----- see unsubscribe use below...
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store

// increment, decrement, reset

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// calling unsubscribe to stop logging the state to the console (all that's being done in the store's subscribe callback function)
//unsubscribe();

store.dispatch(incrementCount());

// I'd like to reset the count to zero
store.dispatch(resetCount());

// I'd like to decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));