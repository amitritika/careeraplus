import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getCookie } from '../../actions/auth';
import { create, getDiscounts, removeDiscount } from '../../actions/discount';

const Discount = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        discounts: [],
        removed: false,
        reload: false
    });

    const { name, error, success, discounts, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadDiscounts();
    }, [reload]);

    const loadDiscounts = () => {
        getDiscounts(token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, discounts: data });
            }
        });
    };

    const showDiscounts = () => {
        return discounts.map((c, i) => {
            return (
              
              <div className = "h1">
                {c.name}
                <button className = "btn btn-danger mr-1 ml-1 mt-3" onClick = {()=>deleteConfirm(c.slug)}>Remove</button>
              </div>
            );
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this Discount?');
        if (answer) {
            deleteDiscount(slug);
        }
    };

    const deleteDiscount = slug => {
        // console.log('delete', slug);
        removeDiscount(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Discount is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-danger">Discount already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Discount is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };
  
    return (
        <React.Fragment>
            {showSuccess()}
            {showError()}
            {showRemoved()}
            <div onMouseMove={mouseMoveHandler}>
                {showDiscounts()}
            </div>
        </React.Fragment>
    );
};

export default Discount;