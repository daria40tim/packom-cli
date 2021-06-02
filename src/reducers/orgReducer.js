import {ORG_LIST_FAIL, ORG_LIST_SUCCESS, ORG_LIST_REQUEST, ORG_FAIL, ORG_REQUEST, ORG_SUCCESS, ORG_LIST_SORTEDBY_NAME, ORG_LIST_SORTEDBY_GROUP, ORG_LIST_SORT_FAIL, ORG_LIST_SORTEDBY_SPEC, ORG_LIST_SORTEDBY_COUNTRY, ORG_UPDATE_REQUEST, ORG_UPDATE_SUCCESS, ORG_UPDATE_FAIL, ADD_ORG_REQUEST, ADD_ORG_SUCCESS, ADD_ORG_FAIL} from '../constants/orgConstants'

export const orgListReducer = (state = {orgs: []}, action) => {
    switch (action.type) {
        case ORG_LIST_REQUEST:
            return {loading: true, orgs: []}
        case ORG_LIST_SUCCESS:
            return {loading: false, orgs: action.payload}
        case ORG_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const orgReducer = (state = {org: { orgs:[], docs:[]}}, action) => {
    switch (action.type) {
        case ORG_REQUEST:
            return {loading: true, ...state}
        case ORG_SUCCESS:
            return {loading: false, org: action.payload}
        case ORG_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const orgListSortedReducer = (state = {orgs:[]}, action) => {
    switch (action.type) {
        case ORG_LIST_SORTEDBY_NAME:
            return {loading: false, orgs: action.payload}
        case ORG_LIST_SORTEDBY_GROUP:
            return {loading: false, orgs: action.payload}
        case ORG_LIST_SORTEDBY_SPEC:
            return {loading: false, orgs: action.payload}
        case ORG_LIST_SORTEDBY_COUNTRY:
            return {loading: false, orgs: action.payload}
        case ORG_LIST_SORT_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const orgUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORG_UPDATE_REQUEST:
            return {loading: true }
        case ORG_UPDATE_SUCCESS:
            return {loading: false, success: action.payload}
        case ORG_UPDATE_FAIL:
            return {loading: false, success: false, error: action.payload}
        default: 
            return state
    }
}

export const orgAddReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ORG_REQUEST:
            return {loading: true }
        case ADD_ORG_SUCCESS:
            return {loading: false, success: action.payload}
        case ADD_ORG_FAIL:
            return {loading: false, success: false, error: action.payload}
        default: 
            return state
    }
}