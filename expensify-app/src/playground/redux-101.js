import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            const incrementBy =  typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return {
                count: state.count - decrementBy
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
});

// store.subscribe() gets called anytime the state managed by the redux store changes and returns a function that can be invoked to unsubscribe from the store's state changes ----- see unsubscribe use below...
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store

// increment, decrement, reset

// I'd like to increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// calling unsubscribe to stop logging the state to the console (all that's being done in the store's subscribe callback function)
//unsubscribe();

store.dispatch({
    type: 'INCREMENT'
});

// I'd like to reset the count to zero
store.dispatch({
    type: 'RESET'
});

// I'd like to decrement the count
store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});