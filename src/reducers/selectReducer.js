import { SELECT_ALL_FAIL, SELECT_ALL_REQUEST, SELECT_ALL_SUCCESS, SELECT_SPECS_FAIL, SELECT_SPECS_REQUEST, SELECT_SPECS_SUCCESS } from "../constants/selectConstants"

export const selectListReducer = (state = {data: {metrics: [], groups : [], kinds: [], types: [], pay_conds: [], task_names: [], tasks: []}}, action) => {
    switch (action.type) {
        case SELECT_ALL_REQUEST:
            return {loading: true, ...state}
        case SELECT_ALL_SUCCESS:
            return {loading: false, data: action.payload}
        case SELECT_ALL_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const selectSpecsReducer = (state = {data: {specs: []}}, action) => {
    switch (action.type) {
        case SELECT_SPECS_REQUEST:
            return {loading: true, ...state}
        case SELECT_SPECS_SUCCESS:
            return {loading: false, data: action.payload}
        case SELECT_SPECS_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}
