import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';
import Profile from '../src/Profile/Profile';

const screens = {
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'User Profile'
        }
    }
}

const ProfileStack= createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

export default createAppContainer(ProfileStack); 

