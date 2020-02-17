import fetch from 'isomorphic-fetch';
import { API } from '../../../config';


export const createTest = (token, data) => {
    return fetch(`${API}/dailytest/aptitude`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTest = (slug) => {
    return fetch(`${API}/dailytest/aptitude/${slug}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateTest = (token, data, slug) => {
    return fetch(`${API}/dailytest/aptitude/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const removeTest = (token, slug) => {
    return fetch(`${API}/dailytest/aptitude/${slug}`, {
        method: 'DELETE',
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

export const getUserTest = (token) => {
    return fetch(`${API}/user/dailytest`, {
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

export const updateUserTest = (token, data) => {
    return fetch(`${API}/user/dailytest`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateTestUser = (token, data, slug) => {
    return fetch(`${API}/user/dailytest/${slug}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTestList = (test) => {
    return fetch(`${API}/dailytest/${test}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};