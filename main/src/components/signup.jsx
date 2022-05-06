import React,{useState,useEffect} from 'react'; 
import { connect } from 'react-redux';
import {Link,NavLink} from 'react-router-dom';
import { updateLoginStatus } from '../store/action';

function Signup(props) {
    let { dispatch, isLoggedin } = props;
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [username,setUsername] = useState("");
    let [errors,setErrors] = useState({
        email:"",
        password:"",
        username:"",
    });
    const validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const validatePassword = (password) => {
        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    }
    const handleInputChange = ({target}) => {
        const {name,value} = target;

        switch(name){
            case "email":  setErrors({...errors, email :  validateEmail(value) ? "" : "Email is not valid" })
                break;
            case "password":  setErrors({...errors, password : validatePassword(value) ? "" : "Minimum eight characters, at least one letter and one number" })
                break;
            case "username": setErrors({...errors, username : value.length >= 6 ? "" : "Username should be at-least 6 characters long" })
                break;
            default:
                break;
        }
        if(name === "email"){
            setEmail(value)
        }
        if(name === "password"){
            setPassword(value)
        }
        if(name === "username"){
            setUsername(value)
        }
    }
    const handleInputSubmit = (event) => {
        event.preventDefault();
        dispatch(updateLoginStatus(true));
        localStorage.setItem("status" , JSON.stringify(true));
        props.history.push("/");


    }
        return (
            <section className='main-signup flex-center-center' >
                <h2>Sign Up</h2>
                <p>
                    <Link to='/' className='nav-link' >Have an account?</Link>
                </p>
                <form  onSubmit={handleInputSubmit}  className='flex-center-center'>
                    <input type='text'  className='username' value={username}  onChange={handleInputChange} name="username" placeholder='Username'/>
                    <div className='errs'>{errors.username}</div>
                    <input type='text' className='email' value={email} onChange={handleInputChange} name="email" placeholder='Email'/>
                    <div className='errs'>{errors.email}</div>
                    <input type='password'  className='password' value={password}  onChange={handleInputChange} name="password" placeholder='Password'/>
                    <div className='errs'>{errors.password}</div>
                    <input type='submit' className='button-swing submit-btn'disabled={errors.email || errors.password || errors.username || !email || !password || !username} onChange={handleInputSubmit} value='Sign up' />
                </form>
            </section>
        )
}


const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(Signup);