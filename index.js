/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Core } from './src/core';

AppRegistry.registerComponent(appName, () => Core);
