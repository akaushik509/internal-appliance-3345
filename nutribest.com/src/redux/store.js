import {legacy_createStore,combineReducers,compose ,applyMiddleware} from 'redux'
import { Reducer } from './UserDetail/reducer'

import thunk from 'redux-thunk'
import { signreducer } from './Signup/sign.reducer'

const rootReducer = combineReducers({
    auth:signreducer,
    addProductAvi: Reducer,
    
})

const composeEnhancer =  compose

export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))