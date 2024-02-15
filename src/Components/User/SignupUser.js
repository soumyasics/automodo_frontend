import React, { useState } from 'react'
import './signupUser.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupUser() {

  const [data,SetData]=useState({username:'',age:'',email:'',street:'',city:'',state:'',nationality:'',number:'',password:'',confpassword:''})
  const [errors, setErrors] = useState({username:'',age:'',email:'',street:'',city:'',state:'',nationality:'',number:'',password:'',confpassword:''});

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
      errors.number= validateField('number', data.number);
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
        <img className="signupUser-img"src={Signin_image} alt='Signin_image'/>
        </div>
       
      <div className='signupUser-main'>
        <div>
          <h2 className='signupUser-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupUser-submain col-2'>
        <div>
          <label className='signupUser-label'>Name</label>
          <input className='signupUser-input' type='text' placeholder='Name' name='username'value={data.username} onChange={change} />
          {errors.username && (
                <div className="text-danger signupUser-validation">{errors.username}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'>Age</label>
          <input className='signupUser-input' type='number' placeholder='Age' name='age'value={data.age} onChange={change} />
          {errors.age && (
                <div className="text-danger signupUser-validation">{errors.age}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'>Email</label>
          <input className='signupUser-input' type='email' placeholder='Email' name='email'value={data.email} onChange={change} />
          {errors.email && (
                <div className="text-danger signupUser-validation">{errors.email}</div>
              )}
         </div>
        <div>
          <label className='signupUser-label'>Street</label>
          <input className='signupUser-input' type='text' placeholder='Street' name='street'value={data.street} onChange={change} />
          {errors.street && (
                <div className="text-danger signupUser-validation">{errors.street}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'>City</label>
          <input className='signupUser-input' type='text' placeholder='City' name='city'value={data.city} onChange={change} />
          {errors.city && (
                <div className="text-danger signupUser-validation">{errors.city}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'>State</label>
          <input className='signupUser-input' type='text' placeholder='State' name='state'value={data.state}onChange={change} />
          {errors.state && (
                <div className="text-danger signupUser-validation">{errors.state}</div>
              )}
          {/* <select className='signupUser-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select> */}
        </div>
        <div>
          <label className='signupUser-label'>Nationality</label>
          <input className='signupUser-input' type='nationality' placeholder='Nationality' name='nationality'value={data.nationality} onChange={change} />{errors.nationality && (
                <div className="text-danger signupUser-validation">{errors.nationality}</div>
              )}
          {/* <select className='signupUser-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select> */}
        </div>
        <div>
          <label className='signupUser-label'>Phone Number</label>
          <input className='signupUser-input' type='number' placeholder='Phone Number' name='number'value={data.number} onChange={change} />
          {errors.number && (
                <div className="text-danger signupUser-validation">{errors.number}</div>
              )}
        </div>
       
        <div>
          <label className='signupUser-label'>Password</label>
          <input className='signupUser-input' type='password' placeholder='Password' name='password'value={data.password} onChange={change} />
          {errors.password && (
                <div className="text-danger signupUser-validation">{errors.password}</div>
              )}
        </div>
        <div>
          <label className='signupUser-label'> Confirm Password</label>
          <input className='signupUser-input' type='password' placeholder=' Confirm Password' name='confpassword'value={data.confpassword} onChange={change} />
          {errors.confpassword && (
                <div className="text-danger signupUser-validation">{errors.confpassword}</div>
              )}
        </div>
        <div>
         <p className='signupUser-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupUser-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupUser-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        
        </div>


        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default SignupUser