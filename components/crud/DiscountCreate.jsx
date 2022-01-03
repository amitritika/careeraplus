import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { createDiscount } from '../../actions/discount';

const CreateDiscount = ({ router }) => {

    const [values, setValues] = useState({
        error: '',
        success: '',
        name: "",
        type:"",
        amount: "",
        lastDate: "",
        count: 10,
        productinfo: ""
    });

    const { error, success, name, type, amount, lastDate, count, productinfo } = values;
    const token = getCookie('token');

    const handleClick = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        let discount = { name, type, amount, lastDate, count, productinfo }
        createDiscount(discount, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, error: '', success: `A new Discount titled "${data.name}" is created` });
            }
        });
    };

    const handleName =  c => e => {
        e.preventDefault();
        console.log(e.target.value);
        setValues({ ...values, [c]: e.target.value, error: '' });
    };

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );

    const createDiscountForm = () => {
        return (
            <div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" value={name} onChange={handleName("name")} />
                </div>
            
                <div className="form-group">
                  <label className="text-muted">Select Type of Discount</label>
                  <select className="form-control" onChange={handleName("type")} >
                    <option value="p">Percentage</option>
                    <option value="c">Cash</option>
                  </select>
                </div>
            
              <div className="form-group">
                <label className="text-muted">How Much</label>
                <input type="number" className="form-control" value={amount} onChange={handleName("amount")} />
              </div>
            
              <div className="form-group">
                <label className="text-muted">Count</label>
                <input type="number" className="form-control" value={count} onChange={handleName("count")} />
              </div>
            
            <div className="form-group">
                <label className="text-muted">Last Date</label>
                <input type="date" className="form-control" onChange={handleName("lastDate")} />
              </div>
            </div>
        );
    };

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    {createDiscountForm()}
                    <div className="pt-3">
                        {showError()}
                        {showSuccess()}
                    </div>
                  <button className = "btn" onClick = {handleClick}>Create</button>
                </div>
        </div>
        </div>
    );
};

export default withRouter(CreateDiscount);