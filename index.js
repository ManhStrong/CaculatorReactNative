/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Caculator from './caculator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Caculator);
