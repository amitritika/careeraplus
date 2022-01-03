import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createDiscount = (discount, token) => {
    return fetch(`${API}/discount`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(discount)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getDiscounts = (token) => {
    return fetch(`${API}/discounts`, {
        method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeDiscount = (slug, token) => {
    return fetch(`${API}/discount/${slug}`, {
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

export const getDiscount = (slug) => {
    return fetch(`${API}/discount/${slug}`, {
        method: 'GET',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};