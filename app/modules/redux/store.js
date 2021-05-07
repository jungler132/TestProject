import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

export const store = createStore();
export const persistor = persistStore(store)
