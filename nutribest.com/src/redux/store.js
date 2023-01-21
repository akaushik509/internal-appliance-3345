import {legacy_createStore,combineReducers,compose ,applyMiddleware} from 'redux'
import { Reducer } from './SingleProduct/reducer'

import thunk from 'redux-thunk'
import { signreducer } from './Signup/sign.reducer'
import { cardsreducer } from './card/card.reducer'

const rootReducer = combineReducers({
    auth:signreducer,
    addProductAvi: Reducer,
    card:cardsreducer
    
})

const composeEnhancer =  compose

export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))