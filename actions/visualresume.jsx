import fetch from 'isomorphic-fetch';
import { API } from '../config';


export const getVisualResume = token => {
    return fetch(`${API}/visualresume`, {
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

export const updateVisualResume = (token, user) => {
    return fetch(`${API}/visualresume/update`, {
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
