import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import Profile from '../src/Profile/Profile';
import Navigation from './Navigation';
import ProfileStack from './ProfileStack';

const RootDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: Navigation,
    },
    Profile: {
        screen: ProfileStack,
    }
});

export default createAppContainer(RootDrawerNavigator);



