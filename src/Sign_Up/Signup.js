import react from "react";
import{menuitems} from "../Navbar/menuitems"
import logo from '../Image/Titanic_Fitness_Logo.PNG'
import { useNavigate } from "react-router";
import { Link, useLinkClickHandler } from "react-router-dom";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import'./signup.css';



const Signup = (submitForm) => {
    const{handleChange, values, handleSubmit, errors} = 
    useForm(
        submitForm,
        validateInfo
        );


    let navigate = useNavigate()
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Join The Team</h2>
                    <div className="form-inputs">
                    <label htmlFor="username" 
                    className="form-label">
                    Name 
                    </label>
                    <input
                            id="username"
                            type='text'
                            name='username'
                            className='form-inputs'
                            placeholder="Enter your name"
                            value={values.username}
                            onChange={(event)=>handleChange(event)}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" 
                    className="form-label">
                       Email
                    </label>
                    <input
                            id="email"
                            type='email'
                            name='email'
                            className='form-inputs'
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">
                       Password
                    </label>
                    <input
                            id="password"
                            type='password'
                            name='password'
                            className='form-inputs'
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className = "warning">{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" 
                    className="form-label">
                       Confirm Your Password
                    </label>
                    <input
                            id="password2"
                            type='password'
                            name='password2'
                            className='form-inputs'
                            placeholder="Re-Enter your password"
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <Link to="/Log-In" >Here</Link>
                </span>
            </form>  
        </div>
    )
}

export default Signup