import { 
  legacy_createStore as createStore, 
  // applyMiddleware, 
  // combineReducers 
} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '~/rootReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 
 };
 const pReducer = persistReducer(persistConfig, rootReducer);
 export const store = createStore(pReducer);
 export const persistor = persistStore(store);
