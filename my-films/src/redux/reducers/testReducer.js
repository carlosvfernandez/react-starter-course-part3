import types from '../actions/types'

const initialState = {
    test: "hello word",
    date: new Date()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_DATE:
            return Object.assign({}, state, {
                date: action.payload
            })
        default:
            return state;
    }
}