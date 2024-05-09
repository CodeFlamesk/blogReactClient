
import "./login.scss"


import Input from "components/forms/Input/Input"
import { v4 } from "uuid"
import { useState } from "react"
import RightButton from "components/RightButton/RightButton"
import RightButtonLink from "components/RightButton/RightButtonLink"
import Images from "./Images/Images"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className="main-forms">
            <div className="main-forms__container">
                <div className="main-forms__body">
                    <div className='main-forms__header-item header-item block-margin'>
                        <div className='header-item__title'>
                            <h2><span>Login</span></h2>
                        </div>
                        <div className='header-item__text text'>
                            <p>Welcome back! Please log in to access your account.</p>
                        </div>
                    </div>
                    <form  className="main-forms__form form">
                        <div className="form__body">
                            <Input setValue={setEmail} value={email} id={v4()} type={"email"} holder={"Enter your Email"}  />
                            <Input setValue={setPassword} value={password} id={v4()} type={"text"} holder={"Enter your Password"}  />
                        </div>
                        <div className="form__content">
                            <div className="main-forms__title">
                                <a className="main-forms__link" href="">Forgot Password?</a>
                            </div>
                            <div className="form__buttons">
                                <RightButton cb={() => authAction.registration(email, password)}  type={'submit'} text={"Login"}/>
                                <RightButtonLink text={"Sign Up"} to={"/sign-up"}/>
                            </div>	
                        </div>
                    </form>
                    <div className="main-forms__items">
                        
                        <Images/>
                    </div>
                </div>
            </div>
        </section>	
    )
}

export default Login