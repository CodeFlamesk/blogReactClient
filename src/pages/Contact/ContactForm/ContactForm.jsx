

import "./contact-form.scss";

const ContactForm = () => {
    return (
        <div className="item-action__content form">
            <form action="#" className="form__body">
                <div className="form__top">
                    <div className="form__item text-anim _anim-items">
                        <label  data-splitting="chars" className="form__label">First Name</label>
                        <input name="first-name" type="text" className="form__input" placeholder="Enter First Name" required/>
                    </div>
                    <div className="form__item text-anim _anim-items">
                        <label  data-splitting="chars" className="form__label">Last Name</label>
                        <input name="lastname" type="text" className="form__input" placeholder="Enter Last Name" required/>
                    </div>
                    <div className="form__item text-anim _anim-items">
                        <label  data-splitting="chars" className="form__label">Email</label>
                        <input name="email" type="email" className="form__input" placeholder="Enter your Email" required/>
                    </div>
                    <div className="form__item text-anim _anim-items">
                        <label  data-splitting="chars" className="form__label">Phone Number</label>
                        <input name="input" type="tel" className="form__input" placeholder="Enter Phone Number" required/>
                    </div>
                </div>
                <div className="form__item form__item-textarea text-anim _anim-items">
                    <label data-splitting="chars" className="form__label">Message</label>
                    <textarea className="form__textarea" name="textarea" cols="30" rows="10" placeholder="Enter your Message"></textarea>
                </div>
                <div className="form__check">
                    <label for="input-1" className="form__checkbox form-checkbox ">
                        <input id="input-1" type="checkbox" className="form-checkbox__input" required/>
                        <span className="form-checkbox__block"></span>
                        <span className="form-checkbox__text">I agree with Terms of Use and  <a href="#">Privacy Policy</a></span>
                    </label>
                    <div className="form__button  ">
                        <button className="button__send">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm