
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import { persistor, store } from './app/modules/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const startingScreen = () => (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
    
)

AppRegistry.registerComponent(appName, () => startingScreen);