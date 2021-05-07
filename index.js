import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import { persistor, store } from './app/modules/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const startingScreen = () => (
    <App/>
    
)

AppRegistry.registerComponent(appName, () => startingScreen);