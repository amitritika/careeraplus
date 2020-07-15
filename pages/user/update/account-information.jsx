import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../../components/Layout"
import Private from "../../../components/auth/Private";
import UpdateProfileNavComponent from "../../../components/user/UpdateProfileNavComponent"
import ReactCropInput from "../../../components/user/ReactCropInput"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import { getCookie, isAuth , updateUser, forgotPassword} from '../../../actions/auth';
import { getProfile, update } from '../../../actions/user';
import { API } from '../../../config';

import React from 'react';
import { Nav, NavItem, NavLink, Row, Col, Card, Form, FormGroup, Label,
       Input,
       } from 'reactstrap';

import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from '../../../helpers/photohelpers'

import ReactCrop from 'react-image-crop'
import "../../../public/stylesheets/customImageDrop.css"


const AccountUpdate = () => {
  
  const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        about: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        
        userData: '',
        message:''
    });
  const [image, setimage] = useState({
    imageSrc:"/images/profile.png",
    imgSrc: null,
    imgSrcExt: null,
    crop: {
        unit: '%',
      width: 30,
      aspect: 1 / 1,
    },
    croppedImageUrl: "",
    imgName: null
  })
  
  
//   let imagePreviewCanvasRef = React.createRef();
//   let fileInputRef = React.createRef();
  
  let imagePreviewCanvasRef = useRef(null);
  let fileInputRef = useRef(null);
  
    const imageMaxSize = 1000000000; // bytes
    const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
    const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()});

    const token = getCookie('token');
    const { username, name, email, about, error, success, loading, photo, userData , message} = values;
    const {imageSrc, imgSrc, imgSrcExt, crop, croppedImageUrl, imgName} = image;
    const init = () => {
    getProfile(token).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
          
          setValues({
                ...values,
                username: data.username,
                name: data.name,
                email: data.email,
                about: data.about
            });
          if(data.photo){
            if(data.photo.data){
                setimage({
                    ...image,
                    imageSrc: `${API}/user/photo/${data.username}`
                });
              }
          }
          
          
          }
    });
};
  
  useEffect(() => {
      init();
  }, []);
  
  
  const verifyFile = (files) => {
        if (files && files.length > 0){
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if(currentFileSize > imageMaxSize) {
                alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                return false
            }
            if (!acceptedFileTypesArray.includes(currentFileType)){
                alert("This file is not allowed. Only images are allowed.")
                return false
            }
            return true
        }
    }
  
  
  const imageUrl = (url) =>{
    setimage({...image, croppedImageUrl: url})
  }
  
  const imageData = (data)=>{
    if (imgSrc !== null){
      const imageData64 = data;
      const myFilename = "previewFile.jpeg"

      // file to be uploaded
      let arr = imageData64.split(',');
      if(arr[1]){
        const myNewCroppedFile = base64StringtoFile(imageData64, myFilename)
        
        let userFormData = new FormData();
        userFormData.set('photosrc', myNewCroppedFile);
        //setValues({...values, photo: imgSrc, userData: userFormData})
        setValues({...values, userData: userFormData})
       //console.log(fs.readFileSync(myNewCroppedFile));
      }

    }
  }
  const handleCropClick = () =>{
    setimage({...image, imgSrc: null });
    fileInputRef.current.value = null;
  }
  
  const handleChange = name => e => {
      
      const value = name === 'photo' ? e.target.files[0] : e.target.value;
      let userFormData = new FormData();
      userFormData.set(name, value);
      setValues({ ...values, [name]: value, userData: userFormData, error: false, success: false });
      
      if(name === 'photo'){
        const files = e.target.files
        if (files && files.length > 0){
              const isVerified = verifyFile(files);
             if (isVerified){
                 // imageBase64Data 
                 const currentFile = files[0]
                
                 const myFileItemReader = new FileReader()
                 myFileItemReader.addEventListener("load", ()=>{
                     
                     const myResult = myFileItemReader.result
                     setimage({...image,
                         imgSrc: myResult,
                         imgSrcExt: extractImageFileExtensionFromBase64(myResult),
                         imgName: currentFile.name
                     })
                 }, false)

                 myFileItemReader.readAsDataURL(currentFile)

             }
        }
        
      }
  };
  const handleSubmit = e => {
      e.preventDefault();
      setValues({ ...values, loading: true });
      update(token, userData).then(data => {
          if (data.error) {
              setValues({ ...values, error: data.error, success: false, loading: false });
          } else {
              updateUser(data, () => {
                
                  setValues({
                      ...values,
                      username: data.username,
                      name: data.name,
                      email: data.email,
                      about: data.about,
                      password: '',
                      success: true,
                      loading: false
                  });
                 
              });
          }
      });
  };
  
  const handlePassword = () => {
    setValues({ ...values, message: '', error: '' });
        forgotPassword({ email }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, message: data.message });
            }
        });
  }
  
  const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
  
  const showMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );
  
  return (
  <Layout>
      <Private>
        <div className="container mt-4" >
          <Row>
           <Col xs = "12">
            <button onClick = {()=> Router.back()}  className = "btn btn-lg btn-primary mb-2">Go Back</button>
            </Col>
            <Col xs = "2">
              <img
                            src={imageSrc}
                            className="img img-fluid img-thumbnail mb-3"
                            style={{ maxHeight: 'auto', maxWidth: '100%' }}
                            alt="user profile"
                        />
             {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                
        )}
              <p>{imgName}</p>
            </Col>
            <Col xs="6">
              {showSuccess()}
              {showMessage()}
              {showError()}
              {showLoading()}

              <Form onSubmit = {handleSubmit}>
                <FormGroup>
                  <Label className="btn btn-outline-info">Profile photo
                    <Input ref={fileInputRef} onChange={handleChange('photo')} type="file" accept="image/*" hidden/>
                    
            
                  </Label>
                     {(imgSrc !== null) && <div>
                         <ReactCropInput src={imgSrc} url={imageUrl}  data = {imageData}/>
                    <button className = "btn btn-sm btn-primary" onClick = {handleCropClick}>OK</button>
                    
                      </div>}
                </FormGroup>
                <FormGroup>
                  <Label >Email</Label>
                  <Input type="email" name="email"  onChange={handleChange('email')} value={email} disabled/>
                </FormGroup>
                <FormGroup>
                  <Label >Name</Label>
                  <Input type="text" name="name" onChange={handleChange('name')} value={name}/>
                </FormGroup>
                <FormGroup>
                  <Label >Username</Label>
                  <Input type="text" name="username" onChange={handleChange('username')} value={username}/>
                </FormGroup>
                <div>
                  <button type="submit" className="btn btn-primary w-100" >
                      Update
                  </button>
                </div>
              </Form>
              <NavLink href="#" className = "btn btn-danger mt-4" onClick= {handlePassword}>Change Password</NavLink>
            </Col>
          </Row>
        </div>
      </Private>
  </Layout>
)
}

export default AccountUpdate;