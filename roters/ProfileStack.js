import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Profile from '../src/Profile/Profile';
import EditProfile from '../src/Profile/EditProfile/EditProfile';

const screens = {
    Profile: {
        screen: Profile, 
        navigationOptions: {
            title: 'User Profile'
        }
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            title: 'Edit Profile'
        }
    }
    
}

const ProfileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        
    }
});

export default createAppContainer(ProfileStack); 

