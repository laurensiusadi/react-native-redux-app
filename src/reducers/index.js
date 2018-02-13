import { combineReducers } from 'redux';
import { DATA_AVAILABLE } from '../actions/index';

const dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return Object.assign({}, state, {
                data: action.data,
                loading: false
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;