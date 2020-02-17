import fetch from 'isomorphic-fetch';
import { API } from '../config';


export const getExamplan = token => {
    return fetch(`${API}/examplan`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateExamplan = (token, user) => {
    return fetch(`${API}/examplan/update`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};