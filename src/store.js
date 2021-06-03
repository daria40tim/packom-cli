import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {orgAddReducer, orgListReducer, orgReducer, orgUpdateReducer} from './reducers/orgReducer'
import {userLoginReducer, userRegisterReducer} from './reducers/userRedusers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { tzCreateReducer, tzDeleteCalReducer, tzDeleteCstReducer, tzListReducer, tzReducer } from './reducers/tzReducer'
import { selectListReducer } from './reducers/selectReducer'
import { cpCreateReducer, cpDeleteCalReducer, cpDeleteCstReducer, cpListReducer, cpReducer } from './reducers/cpReducers'
import { fullCostsReducer, tenderListReducer, tenderReducer } from './reducers/tenderReducer'


const reducer = combineReducers({
    orgList: orgListReducer,
    orgDetails: orgReducer,
    userLogin: userLoginReducer,
    orgUpdate: orgUpdateReducer, 
    userRegister: userRegisterReducer,
    addOrg: orgAddReducer,
    tzList: tzListReducer,
    tzDetails: tzReducer,
    selectList: selectListReducer,
    tzCreate: tzCreateReducer,
    calDelete: tzDeleteCalReducer,
    cstDelete: tzDeleteCstReducer,
    cpList: cpListReducer,
    cpDetails: cpReducer,
    cpCreate: cpCreateReducer,
    cpCalDelete: cpDeleteCalReducer, 
    cpCstDelete: cpDeleteCstReducer,
    tenderList: tenderListReducer,
    tenderDetails: tenderReducer,
    fullCosts: fullCostsReducer,  
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
    userLogin: {userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store