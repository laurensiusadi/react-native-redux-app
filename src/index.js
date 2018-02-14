'use strict';
 
import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';
 
import {Router, Scene, Reducer} from 'react-native-router-flux';
 
import Home from './components/Home'
import NewQuote from './components/NewQuote'
 
import Data from '../quotes.json'
 
import {connect} from 'react-redux';
import {getQuotes} from './actions'
 
//Reducer for Router - See react-native-router-flux package README for more info
const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};
 
class Main extends Component {
 
    componentDidMount() {
        var _this = this;
        //Check if any data exist
        AsyncStorage.getItem('data', (err, data) => {
            //if it doesn't exist, extract from json file
            //save the initial data in Async
            if (data === null){
                AsyncStorage.setItem('data', JSON.stringify(Data.quotes));
                _this.props.getQuotes();
            }
        });
    }
 
    render() {
        return (
            <View style={{flex:1}}>
                <Router createReducer={reducerCreate}>
                    <Scene key="root">
                        <Scene key="Home" component={Home} title="Home" initial/>
                        <Scene key="NewQuote" component={NewQuote} title="New Quote"/>
                    </Scene>
                </Router>
            </View>
        );
    }
}
 
function mapStateToProps(state, props) {
    return {}
}
 
//Connect everything
export default connect(mapStateToProps, {getQuotes})(Main);