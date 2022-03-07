import { useState, useEffect } from "react";
import {FaSignInAlt} from 'react-icons/fa';
function Login() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    });
    //destructure
    const {email,password} = formData;
    const onChange = (e)=>{
        setFormData((prevState)=>({...prevState, [e.target.name]:e.target.value}));
    };
    const onSubmit = ()=>{};
    return <>
        <section className='heading'>
            <h1>
                <FaSignInAlt/> Login
            </h1>
            <p>Please login into an account</p>

        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Enter your email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" name="password" value={password} onChange={onChange}/>
                </div>
            </form>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Submit</button>
            </div>
        </section>
    </>;
}

export default Login;
