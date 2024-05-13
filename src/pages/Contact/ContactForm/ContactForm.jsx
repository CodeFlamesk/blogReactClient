

import Input from "components/forms/Input/Input";
import "./contact-form.scss";
import PoliticCheckbox from "components/forms/PoliticCheckbox/PoliticCheckbox";
import SendButton from "components/forms/SendButton/SendButton";
import Textarea from "components/forms/Textarea/Textarea";

const ContactForm = () => {
    return (
        <div className="item-action__content form">
            <form action="#" className="form__body">
                <div className="form__top">
                    <Input holder={"Enter First Name"} type={"text"} text={"First Name"}/>
                    <Input holder={"Enter Last Name"} type={"text"} text={"Last Name"}/>
                    <Input holder={"Enter your Email"} type={"email"} text={"Email"}/>
                    <Input holder={"Enter Phone Number"} type={"tel"} text={"Phone Number"}/>
                </div>
                <div className="form__item-textarea">
                    <Textarea text={"Enter your message"}/>
                </div>
                <div className="form__check">
                    <PoliticCheckbox/>
                    <div className="form__button  ">
                        <SendButton/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm