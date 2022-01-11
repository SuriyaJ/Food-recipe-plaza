import React,{useState,useEffect} from 'react'
import useform from "./useform"; 
import './form.css';
const Signupform = ({submitForm}) => {
const {handleChange,handleformsubmit,values,errors}= useform(submitForm);

    return ( < div className='container'> 
    <div className='app-wrapper'>
        <div>
            <h2 className='title'>Log in</h2>
        </div>
        <form className='form-wrapper'>
            <div className='name'>
                <label className='label'>Full name</label>
                <input className='input' type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && <p className='error'>{errors.fullname}</p>}
            </div>
            <div className='email'>
                <label className='label'>email</label>
                <input className='input' type="text" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='password'>
                <label className='label'>password</label>
                <input className='input' type="text" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div>
                <button className='submit' onClick={handleformsubmit}>Log in</button>
                </div>
        </form>
        </div>
        </div>)
}

export default Signupform;