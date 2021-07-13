import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../src/Dashboard/Dashboard';
import NextClinic from '../src/Dashboard/NextClinic/Nextclinic';
import ViewClinic from '../src/Dashboard/ViewClinic/ViewClinic';

const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        }
    },
    NextClinic: {
        screen: NextClinic,
        navigationOptions: {
            title: 'Next Clinic'
        }
    },
    ViewClinic: {
        screen: ViewClinic,
        navigationOptions: {
            title: 'View Clinic'
        }
    }

}

const Navigation = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

export default createAppContainer(Navigation); 

