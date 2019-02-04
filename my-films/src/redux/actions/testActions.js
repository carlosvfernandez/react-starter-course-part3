import types from './types'

export const updateDate = () => {
    return {
        type: types.UPDATE_DATE,
        payload: new Date()
    }
}