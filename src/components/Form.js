import React, { useState } from 'react'

const Form = () => {
    const [firstName, setfirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mailError, setMailError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [lastNameError, setLastNameError] = useState('')

    const handleChange = (id, e) => {
        switch (id) {
            case "firstname":
                setfirstname(e.target.value)
                if(/^[a-z]{1,20}$/i.test(firstName))
                setFirstNameError('')
                break;

            case "lastname":
                setLastName(e.target.value)
                if(/^[a-z]{1,20}$/i.test(lastName))
                setLastNameError('')
                break;

            case "email":
                setEmail(e.target.value)
                if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,6})+$/.test(email))
                setMailError('') 
                break;

            case "password":
                setPassword(e.target.value)
                if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password))
                setPasswordError('')
                break;

            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            password,
            email
        })
    }
    const errorHandler = (id, e) => {
        switch (id) {
            case "firstname":
                (/^[a-z]{2,20}$/i.test(firstName))?
                setFirstNameError(''): setFirstNameError('Name must be at least 2 characters long')
                break;

            case "lastname":
                (/^[a-z]{2,20}$/i.test(lastName))?
                setLastNameError(''): setLastNameError('Name must be at least 2 characters long')
                break;

            case "email":
                (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/.test(email))?
                setMailError(''): setMailError('Enter a valid mail e.g. adedara@nugitech.com')
                break;

            case "password":
                (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password))?
                setPasswordError(''): setPasswordError('*Password must be at least 8 characters long with one uppercase, one lowercase, one number and one special character')
                break;

            default:
                break;
        }
    }
    return (
        <div className="row">
            <div className=" text-center col-md-12 box">
            <h2 className="login-header">Create Account</h2>
                <form>
                    <div className="d-flex">

                        <div className="inputbox mr-4">
                            <input onBlur={errorHandler.bind(this, "firstname")} onChange={handleChange.bind(this, 'firstname')} value={firstName} type="text"/>
                            <label >
                            <i className="mr-2 fa fa-user"></i>
                             Firstname</label>
                        <p className="error-message">{firstNameError}</p>
                        </div> <br />

                        <div className="inputbox">
                            <input onBlur={errorHandler.bind(this, "lastname")} onChange={handleChange.bind(this, 'lastname')} value={lastName} type="text"/>
                            <label >
                            <i className="mr-2 fa fa-user"></i>
                             Lastname</label>
                        <p className="error-message">{lastNameError}</p>    
                        </div> <br />
                    </div>
                    

                    <div className="inputbox">
                        <input onBlur={errorHandler.bind(this, "email")} onChange={handleChange.bind(this, 'email')} value={email} type="text" />
                        <label >
                        <i className="mr-2 fa fa-envelope"></i>
                         Email</label>
                    </div>
                    <p className="error-message">{mailError}</p> 


                    <div className="inputbox" >
                        <input onBlur={errorHandler.bind(this, "password")} onChange={handleChange.bind(this, 'password')} value={password} type="text"/>
                        <label >
                        <i className="mr-2 fa fa-lock"></i>
                         Password</label>
                    </div>
                    <p className="error-message">{passwordError}</p>

                    <button onClick={handleSubmit}  className="btn btn-outline-dark">Register</button>
                    <p > Already have an account? Login here </p>
                </form>
            </div>
        </div>
    )
}

export default Form
