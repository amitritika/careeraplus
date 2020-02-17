import fetch from 'isomorphic-fetch';
import { API, KEY, SALT } from '../config';


export const getHash = data => {
    return fetch(`${API}/payment/payumoney`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (token, user) => {
    return fetch(`${API}/user/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};