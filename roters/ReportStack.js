import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Reports from '../src/Reports/Reports';
import ViewReport from '../src/Reports/ViewReport/ViewReport';

const screens = {
    Reports: {
        screen: Reports, 
        navigationOptions: {
            title: 'Report'
        }
    },
    ViewReport: {
        screen: ViewReport,
        navigationOptions: {
            title: 'view Report'
        }
    }
    
}

const ReportStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

export default createAppContainer(ReportStack); 

