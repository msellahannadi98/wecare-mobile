import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import History from '../src/History/History';
import ViewClinic from '../src/Dashboard/ViewClinic/ViewClinic';

const screens = {
    History: {
        screen: History, 
        navigationOptions: {
            title: 'History'
        }
    },
    ViewClinic: {
        screen: ViewClinic,
        navigationOptions: {
            title: 'View Clinic'
        }
    }
    
}

const HistoryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

export default createAppContainer(HistoryStack); 

