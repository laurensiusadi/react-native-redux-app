import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Main from './index';

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