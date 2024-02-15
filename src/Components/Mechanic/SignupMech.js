import React, { useState } from 'react'
import './SignupMech.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupMech() {

  const [data,SetData]=useState({username:'',age:'',email:'',street:'',city:'',state:'',nationality:'',number:'',license:'',password:'',confpassword:''});

  const [errors, setErrors] = useState({username:'',age:'',email:'',street:'',city:'',state:'',nationality:'',number:'',license:'',password:'',confpassword:''});


  const change=(b)=>{
      const { name, value } = b.target;
  SetData(prevData => ({
      ...prevData,
      [name]: value
  }));
  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: ''
}));
  }

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
        return `${fieldName} is required`;
    }
    return '';
  };

  const validateNumber =(fieldName,value)=>{

    if (!value.trim()) {
      return `${fieldName} is required`;
  }

    else if(value.toString().length!==10){
      return `${fieldName}  10 digits required`;
 }
  }
  
  let signup=(a)=>{
    a.preventDefault()
    let errors = {};
      let formIsValid = true;

      errors.username= validateField('username', data.username);
      errors.age= validateField('age', data.age);
      errors.email= validateField('email', data.email);
      errors.street= validateField('street', data.street);
      errors.city= validateField('city', data.city);
      errors.state= validateField('state', data.state);
      errors.nationality= validateField('nationality', data.nationality);
      errors.number= validateNumber('number', data.number);
      errors.license= validateField('license', data.license);
      errors.password = validateField('password', data.password);
      errors.confpassword= validateField('confirm password', data.confpassword);

      setErrors(errors);

      if (formIsValid) {
          console.log("data", data);
      }
  }
  return (
    <div >
      <form onSubmit={signup}>
        <div>
        <img className="signupMech-img"src={Signin_image} alt='Signin_image'/>
        </div>
        
      <div className='signupMech-main'>
        <div>
          <h2 className='signupMech-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupMech-submain col-2'>
        <div>
          <label className='signupMech-label'>Name</label>
          <input className='signupMech-input' type='text' placeholder='Name' name='username' onChange={change} /> {errors.username && (
                <div className="text-danger">{errors.username}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Age</label>
          <input className='signupMech-input' type='number' placeholder='Age' name='age' onChange={change} /> {errors.age && (
                <div className="text-danger">{errors.age}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Email</label>
          <input className='signupMech-input' type='email' placeholder='Email' name='email' onChange={change}/> {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
         </div>
        <div>
          <label className='signupMech-label'>Street</label>
          <input className='signupMech-input' type='text' placeholder='Street' name='street' onChange={change}/> {errors.street && (
                <div className="text-danger">{errors.street}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>City</label>
          <input className='signupMech-input' type='text' placeholder='City' name='city' onChange={change} /> {errors.city && (
                <div className="text-danger">{errors.city}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>State</label>
          <input className='signupMech-input' type='text' placeholder='State' name='state' onChange={change}/> {errors.state && (
                <div className="text-danger">{errors.state}</div>
              )}
          {/* <select className='signupMech-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select> */}
        </div>
        <div>
          <label className='signupMech-label'>Nationality</label>
          <input className='signupMech-input' type='nationality' placeholder='Nationality' name='nationality' onChange={change} /> {errors.nationality && (
                <div className="text-danger">{errors.nationality}</div>
              )}
          {/* <select className='signupMech-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select> */}
        </div>
        <div>
          <label className='signupMech-label'>Phone Number</label>
          <input className='signupMech-input' type='number' placeholder='Phone Number' name='number' onChange={change}/> {errors.number && (
                <div className="text-danger">{errors.number}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Liscense Number</label>
          <input className='signupMech-input' type='number' placeholder='License Number' name='license' onChange={change}/> {errors.license && (
                <div className="text-danger">{errors.license}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'>Password</label>
          <input className='signupMech-input' type='password' placeholder='Password' name='password' onChange={change} /> {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
        </div>
        <div>
          <label className='signupMech-label'> Confirm Password</label>
          <input className='signupMech-input' type='password' placeholder=' Confirm Password' name='confpassword' onChange={change}/> {errors.confpassword && (
                <div className="text-danger">{errors.confpassword}</div>
              )}
        </div>
        <div>
         <p className='signupMech-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupMech-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupMech-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default SignupMech