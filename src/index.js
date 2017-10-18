import React from 'react'; //Waar is deze import voor nodig? (MayBe for Classes approach)?
import ReactDOM from 'react-dom'; //Ties React Object's to Dom
import './index.css'; //Why are we importing css here.. We are not using it... (What do we gain / usage scenario's)
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import {connect, Provider} from "react-redux";

import {updateNameAction, UPDATE_NAME} from './actions'
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = (
    state = {
        name: 'blaat',
        color: undefined
    },
    action
    ) => {
    switch(action.type) {
        case UPDATE_NAME:
            console.log('UPDATE_NAME current payload:>',action.payload);
            return {...state, name: action.payload};
        default:
            console.log('REDUCER')
            return state;
    }
};


const store = createStore(reducer, composeWithDevTools());

// setup vars for connecting react-redux
const mapStateToProps = state => ({
    name: state.name
});

const mapDispatchToProps = dispatch => ({
    updateName: name => {connect
        dispatch(updateNameAction(name));
    }
});

// Connects a React component to a Redux store. connect is a facade around connectAdvanced,
// providing a convenient API for the most common use cases.
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

//Render a React element into the DOM in the supplied container and return a reference to the component
// (or returns null for stateless components).
ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp/>
    </Provider>,
    document.getElementById('root')
)


//??
registerServiceWorker();

//Dispatching Events
store.dispatch(updateNameAction('Ids'));

