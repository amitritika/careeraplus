import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createMain = (blog, token) => {
    return fetch(`${API}/image/main`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const createVisualresume = (blog, token) => {
    return fetch(`${API}/image/visualresume`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const createExamplan = (blog, token) => {
    return fetch(`${API}/image/examplan`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}