import { hot }  from 'react-hot-loader';
import React, { useState } from "react";
import './registration.css'
var cors = require('cors');

function Registration(){
    
	const [image, setImage] = useState({ preview: '', file: '' })
	// const [status, setStatus] = useState('')
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
	
	const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "gender"){
            setGender(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

	const handleSubmit = async (e) => {
	//   e.preventDefault()
	let data = 
	{
		firstName:firstName.value,
		lastName:lastName.value,
		email:email.value,
		gender:gender.value,
		password:password.value,
		confirmPassword:confirmPassword.value
	}

	  console.log(data);
	  fetch("http://localhost:8080/people/register",{
		method: "POST",
		mode:"cors",
		headers: {
			'Access-Control-Allow-Origin' : '*',
			'Content-Type': 'application/json'
		}, 
		body:JSON.stringify(data)
	  },cors())
	  
	}
  
	
	return (
	
		  <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
				  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>               </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
				  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
				  <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>              </div>
              <div className="gender">
                  <label className="form__label" for="gender">Gender </label>
				  <input className="form__input"  id="gender" value={gender} onChange = {(e) => handleInputChange(e)} placeholder="gender"/>              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
				  <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
				  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>              </div>
          </div>
		  <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" className="btn btn-primary">Register</button>
            </div>
      </div>   
	  )
}

export default hot(module)(Registration);

