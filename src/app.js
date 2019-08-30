/**
 * Sidewalk Survey App
 * https://github.com/Shaun1/sidewalk_survey
 *
 * @format
 * @flow
 */

GLOBALS = require('./globals');

import {createStackNavigator, createAppContainer} from 'react-navigation';

import {LoginScreen} from './screens/login';
import {HomeScreen} from './screens/home';
import {EntryScreen} from './screens/entry';

const MainNavigator = createStackNavigator({
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen},
  EntryScreen: {screen: EntryScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
