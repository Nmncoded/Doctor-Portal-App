
import React, {useState,useEffect}from 'react'; 
import { connect } from 'react-redux';
import { updatePatientsData } from '../store/action';

function AddNewPatient(props){
    let { allPatientsData,dispatch } = props;
    let [pName,setPName] = useState("");
    let [email,setEmail] = useState("");
    let [age,setAge] = useState(0);
    let [gender,setGender] = useState("");
    let [errors,setErrors] = useState({
        email:"",
        pName:"",
        age : "",
    });
    const validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const handleInputChange = ({target}) => {
        const {name,value} = target;
        let errors = {};

        switch(name){
            case "pName": errors.pName  = value.split("").some(elm =>  elm.charCodeAt(0) >= 48 && elm.charCodeAt(0) <= 57 ) ?  "Name should be in alphabets !!!" : ""
                break;
            case "email": errors.email  = validateEmail(value) ? "" : "Email is not valid !!!"
                break;
            case "age": errors.age  = value.split("").some(elm =>  elm.charCodeAt(0) >= 48 && elm.charCodeAt(0) <= 57 ) ?  "" : "Age should be in numbers only !!!"
                break;
            default:
                break;
        }
        setErrors(errors);

        if(name === "pName"){
            setPName(value)
        }
        if(name === "email"){
            setEmail(value)
        }
        if(name === "age"){
            setAge(value)
        }
        if(name === "gender"){
            setGender(value)
        }
    }

    const handleReset = () => {
        setAge(0);
        setPName("");
        setEmail("");
        setGender("");
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let obj = {
            name: pName,
            age,
            email,
            gender,
            addedAt : date,
        }
        let data = allPatientsData ? allPatientsData.concat(obj) : [obj];
        dispatch(updatePatientsData(data));
        props.history.push('/');
        
    }
            return (
                <section className='main-signin flex-center-center' >
                    <button onClick={handleReset} className='button-shrink padding-16' >Reset</button>
                    <h2>Add New Patient</h2>
                    <p className='errs' >{!email || !pName || !age || !gender ? "None fields should be empty !!!" : ""}</p>
                    <form onSubmit={handleInputSubmit} className='flex-center-center'>
                        <input type='text' className='email' value={pName} onChange={handleInputChange} name="pName" placeholder='Enter your name'/>
                        <div className='errs'>{errors.pName}</div>
                        <input type='email'  className='email' value={email}  onChange={handleInputChange} name="email" placeholder='Enter your email'/>
                        <div className='errs'>{errors.email}</div>
                        <input type='number'  className='email' value={age}  onChange={handleInputChange} name="age" />
                        <div className='errs'>{errors.age}</div>
                        <select className="email" name='gender'  value={gender}  onChange={handleInputChange} >
                            <option value="" >Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                        </select>
                        <div>
                        <input type='submit' disabled={errors.email || errors.pName || errors.age || !email || !pName || !age || !gender } className='button-shrink padding-16'  value="Add" />
                        </div>
                    </form>
                        
                </section>
            )
    
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(AddNewPatient);