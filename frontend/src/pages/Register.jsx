import { useState, useEffect } from "react";
import {FaUser} from 'react-icons/fa';
function Register() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    });
    //destructure
    const {name,email,password,confirmPassword} = formData;
    const onChange = (e)=>{
        setFormData((prevState)=>({...prevState, [e.target.name]:e.target.value}));
    };
    const onSubmit = ()=>{};
    return <>
        <section className='heading'>
            <h1>
                <FaUser/> Register 
            </h1>
            <p>Please create an account</p>

        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Enter your email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" name="password" value={password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password2" placeholder="Confirm your password" name="password2" value={confirmPassword} onChange={onChange}/>
                </div>  
            </form>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Submit</button>
            </div>
        </section>
    </>;
}

export default Register;
