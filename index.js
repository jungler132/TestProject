
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';
import { store } from './app/modules/redux/store';

const startingScreen = () => (
    <Provider store={store}>
    <App/>
    </Provider>
    
)

AppRegistry.registerComponent(appName, () => startingScreen);