import createStore from './createReduxStore'
import { persistStore } from 'redux-persist'

export const store = createStore();
export const persistor = persistStore(store)
