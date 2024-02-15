import React, { useState } from 'react'
import './signupWorkshop.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'


function SignupWorkshop() {
  const [data,SetData]=useState({shopname:'',ownername:'',email:'',street:'',city:'',state:'',nationality:'',number:'',regnumber:'',password:'',confpassword:''})
  const [errors, setErrors] = useState({shopname:'',ownername:'',email:'',street:'',city:'',state:'',nationality:'',number:'',regnumber:'',password:'',confpassword:''});
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

      errors.shopname= validateField('shopname', data.shopname);
      errors.ownername= validateField('ownername', data.ownername);
      errors.email= validateField('email', data.email);
      errors.street= validateField('street', data.street);
      errors.city= validateField('city', data.city);
      errors.state= validateField('state', data.state);
      errors.nationality= validateField('nationality', data.nationality);
      errors.number= validateNumber('number', data.number);
      errors.regnumber= validateField('registernumber', data.regnumber);
      errors.password = validateField('password', data.password);
      errors.confpassword= validateField('confirm password', data.confpassword);

      setErrors(errors);

      if (formIsValid) {
          console.log("data", data);
      }
  }
  
  return (
    <div>
      <form onSubmit={signup}>
        <div>
        <img className="signupWorkshop-img"src={Signin_image} alt='Signin_image'/>
        </div>
        
      <div className='signupWorkshop-main'>
        <div>
          <h2 className='signupWorkshop-head'>Sign Up</h2>
        </div>
        <div className='row'>
          <div className='signupWorkshop-submain col-2'>
        <div>
          <label className='signupWorkshop-label'>Shop name</label>
          <input className='signupWorkshop-input' type='text' placeholder='Shop name' value={data.shopname} name='shopname' onChange={change}/>
          {errors.shopname&& (
                <div className="text-danger signupWorkshop-validation">{errors.shopname}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'>Owner name</label>
          <input className='signupWorkshop-input' type='text' placeholder='Owner name' value={data.ownername} name='ownername' onChange={change}/>
          {errors.ownername && (
                <div className="text-danger signupWorkshop-validation">{errors.ownername}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'>Email</label>
          <input className='signupWorkshop-input' type='email' placeholder='Email' value={data.email} name='email' onChange={change}/>
          {errors.email && (
                <div className="text-danger signupWorkshop-validation">{errors.email}</div>
              )}
         </div>
        <div>
          <label className='signupWorkshop-label'>Street</label>
          <input className='signupWorkshop-input' type='text' placeholder='Street' value={data.street} name='street' onChange={change}/>
          {errors.street && (
                <div className="text-danger signupWorkshop-validation">{errors.street}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'>City</label>
          <input className='signupWorkshop-input' type='text' placeholder='City' value={data.city} name='city' onChange={change}/>
          {errors.city && (
                <div className="text-danger signupWorkshop-validation">{errors.city}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'>State</label>
          <input className='signupWorkshop-input' type='text' placeholder='State' value={data.state} name='state' onChange={change}/>
          {errors.state && (
                <div className="text-danger signupWorkshop-validation">{errors.state}</div>
              )}
          {/* <select className='signupWorkshop-select' name="nationlity">
          <option></option>
            <option>Kerala</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            </select> */}
        </div>
        <div>
          <label className='signupWorkshop-label'>Nationality</label>
          <input className='signupWorkshop-input' type='nationality' placeholder='Nationality'value={data.nationality} name='nationality' onChange={change}/>
          {errors.nationality && (
                <div className="text-danger signupWorkshop-validation">{errors.nationality}</div>
              )}
          {/* <select className='signupWorkshop-select1' name="nationlity">
          <option></option>
            <option>India</option>
            <option>UK</option>
            <option>China</option>
        </select> */}
        </div>
        <div>
          <label className='signupWorkshop-label'>Phone Number</label>
          <input className='signupWorkshop-input' type='number' placeholder='Phone Number'value={data.number} name='number' onChange={change}/>
          {errors.number && (
                <div className="text-danger signupWorkshop-validation">{errors.number}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'>Register Number</label>
          <input className='signupWorkshop-input' type='number' placeholder='Register Number'value={data.regnumber} name='regnumber' onChange={change}/>
          {errors.regnumber && (
                <div className="text-danger signupWorkshop-validation">{errors.regnumber}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'>Password</label>
          <input className='signupWorkshop-input' type='password' placeholder='Password'value={data.password} name='password' onChange={change}/>
          {errors.password && (
                <div className="text-danger signupWorkshop-validation">{errors.password}</div>
              )}
        </div>
        <div>
          <label className='signupWorkshop-label'> Confirm Password</label>
          <input className='signupWorkshop-input' type='password' placeholder=' Confirm Password'value={data.confpassword} name='confpassword' onChange={change}/>
          {errors.confpassword && (
                <div className="text-danger signupWorkshop-validation">{errors.confpassword}</div>
              )}
        </div>
        <div>
         <p className='signupWorkshop-p'>Already have an account,</p>
        </div>
        <div>
        <a className='signupWorkshop-a'href='#'>Login</a>
        </div>
        <div>
          <button className='signupWorkshop-btn' type='siubmit'>Sign In</button>
          <img className="signupBtn-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        </div>
        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default SignupWorkshop