import { SELECT_ALL_FAIL, SELECT_ALL_REQUEST, SELECT_ALL_SUCCESS } from "../constants/selectConstants"

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
