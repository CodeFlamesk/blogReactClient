import RightButton from 'components/RightButton/RightButton';
import Input from 'components/forms/Input/Input';
import React, { useState } from 'react'
import { v4 } from "uuid"

import "./login.scss"
import RightButtonLink from 'components/RightButton/RightButtonLink';
import Images from './Images/Images';
import authAction from 'action/authAction';


const Sign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    
    return (
        <section className="main-forms">
            <div className="main-forms__container">
                <div className="main-forms__body">
                    <div className='main-forms__header-item header-item block-margin'>
                        <div className='header-item__title'>
                            <h2><span>Sign Up</span></h2>
                        </div>
                        <div className='header-item__text text'>
                            <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                        </div>
                    </div>
                    <form  className="main-forms__form form">
                        <div className="form__body">
                            <Input setValue={setName} value={name} id={v4()} type={"text"} holder={"Enter First Name"}  />
                            <Input setValue={setLastname} value={lastname} id={v4()} type={"text"} holder={"Enter Last Name"}  />
                            <Input setValue={setEmail} value={email} id={v4()} type={"email"} holder={"Enter your Email"}  />
                            <Input setValue={setPassword} value={password} id={v4()} type={"text"} holder={"Enter your Password"}  />
                        </div>
                        <div className="form__buttons">
                            <RightButton cb={() => authAction.registration(email, password)} text={"Sign Up"} type={"submit"} />
                        </div>
                    </form>
                    <div className="main-forms__items">
                        <div className="main-forms__buttons">
                            <RightButtonLink text={"Login"} to={"/login"}/>
                        </div>
                        <Images/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sign