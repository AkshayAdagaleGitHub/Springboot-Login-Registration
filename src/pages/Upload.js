import { hot }  from 'react-hot-loader';
import React,{useState} from 'react';

const Upload = () => {
    const [profile, setProfilePic] = useState('')
    const onClick = e => {
        setProfilePic(URL.createObjectURL(e.target.files[0]));
    };
    return (
        
        <div>
        <div class="container-sm">
            <br/> 
            <br/>
            <br/>
            <h1 >UploadPic</h1>
            <br/> 
            <input id="profilePic" type="file" onChange={onClick}/>
            <br/>
            <br/>
            <div >
                <img src={profile} width="500" ></img>
            </div>
        </div>
    </div>
    );  
};

export default hot(module)(Upload);
// export default Registration;

