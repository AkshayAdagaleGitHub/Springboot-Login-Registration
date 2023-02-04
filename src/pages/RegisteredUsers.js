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
    const [gender, setGmail] = useState(null);
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
            setEmail(value);
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
              
		  <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" className="btn btn-primary">Show</button>
            </div>
            </div>
      </div>   
	  )
}

export default hot(module)(Registration);

