import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


/** REDUCERS */
const airlines = (state = ['yes'], action) => {
    console.log('in airlines reducer', action.newAirline);
if(action.type === 'ADD_AIRLINE') {
    return [...state, action.newAirline]
}
    return state
}
/**store */
const storeInstance = createStore(
    combineReducers({
        airlines
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