import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCookie, isAuth } from '../../../../actions/auth';
import { createExamplan } from '../../../../actions/images';
const Main =()=>{
  
  const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: ''
    });
 
  const { error, sizeError, success, formData } = values;
  const token = getCookie('token');
  const handleChange = name => e => {
        let formData1 = new FormData()
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData1.set(name, value);
        setValues({ ...values, [name]: value, formData: formData1, error: '' });
    };
  const handleClick = e => {
    e.preventDefault();
    createExamplan(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '', error: '', success: data.message });
                
            }
        });
  }
  
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
  
  return (
    <div className="form-group pb-2 container">
      <div className="pt-3">
                        {showSuccess()}
                        {showError()}
                    </div>
      <h5>Featured image</h5>
      <hr />

      <small className="text-muted">Max size: 1mb</small>
      <br />
      <label className="btn btn-outline-info">
          Upload featured image
          <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
      </label>
      <br />
      <button onClick= {handleClick} className="btn btn-primary">
      Publish
      </button>
    </div>
  )
}

export default Main;