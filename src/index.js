import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


/** REDUCERS */
const airlines = (state = [], action) => {
    console.log('in airlines reducer', action);
    if (action.type === 'ADD_AIRLINE') {
        return [...state, action.payload]
    }
    return state
}

const planeCount = (state = [], action) => {
    if (action.type === 'ADD_PLANES') {
        return [...state, action.payload]
    }
    return state
}
/**store */
const storeInstance = createStore(
    combineReducers({
        airlines,
        planeCount
    })
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);