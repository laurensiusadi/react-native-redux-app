import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../src/store'; //Import the store
import Main from '../src/index' //Import the app/index.js file

function setup() {
    class Root extends Component {
        render() {
            return (
                <Provider store={store}>
                    <Main />
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;