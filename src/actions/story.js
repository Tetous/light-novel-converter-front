import axios from 'axios';
import { GET_ERRORS } from './types';
//import setAuthToken from '../setAuthToken';
//import jwt_decode from 'jwt-decode';

export const listStories = (callback) => dispatch => {
    // Is user logged in
    // Get the JWT token
    var jwtToken = localStorage.getItem('jwtToken');
    var config = {
        headers: {'Authorization': "bearer "+jwtToken}
    };
    axios.get('/stories', config)
            .then(res => {
                callback(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const addStory = (story_url, callback) => dispatch => {
    // Is user logged in
    // Get the JWT token
    var jwtToken = localStorage.getItem('jwtToken');
    var config = {
        headers: {'Authorization': "bearer "+jwtToken}
    };
    axios.post('/stories', {url: story_url}, config)
            .then(res => {
                console.log(res.data);
                callback(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}