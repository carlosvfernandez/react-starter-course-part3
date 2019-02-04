import types from './types'
import axios from 'axios';

const urlBase = "https://api.themoviedb.org/3/movie/";
const key = "9050064b1204f4bdd570847ca389d7a1";

export const getPremieres = () => dispatch => {
    dispatch({
        type: types.GET_PREMIERES,
        payload: axios.get(`${urlBase}upcoming?api_key=${key}`)
    })
}
export const getNextPremieres = () => {
    return {
        type: types.GET_NEXT_PREMIERES,
        payload: new Date()
    }
}