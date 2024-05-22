

import Input from "components/forms/Input/Input";
import "./contact-form.scss";
import PoliticCheckbox from "components/forms/PoliticCheckbox/PoliticCheckbox";
import SendButton from "components/forms/SendButton/SendButton";
import Textarea from "components/forms/Textarea/Textarea";
import { useState } from "react";
import contactFormAction from "action/contactFormAction";
import ModalFeedback from "components/Modals/ModalFeedback/ModalFeedback";

const ContactForm = () => {

    const [active, setActive] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [checked, setChecked] = useState(false)

    const onChangeChecked = (e) => {
        setChecked(e.target.checked)
    }

    const onClickSubmitMessage = async (e) => {
        //оно не возвращает ответ хотя запрос отправляется успешно
        e.preventDefault();
        if(checked && message !== "" && firstName && lastName && number && email) {
            await contactFormAction.sendMessageFromContactPage(lastName, firstName, email, message, number)
                .then(res => {
                    if(res.status === 200) {
                        setActive(true)
                    }
                })
        }
    }

    return (
        <div className="item-action__content form">
            <form action="#" className="form__body">
                <div className="form__top">
                    <Input setValue={setFirstName} value={firstName} holder={"Enter First Name"} type={"text"} text={"First Name"}/>
                    <Input setValue={setLastName} value={lastName} holder={"Enter Last Name"} type={"text"} text={"Last Name"}/>
                    <Input  setValue={setEmail} value={email} holder={"Enter your Email"} type={"email"} text={"Email"}/>
                    <Input setValue={setNumber} value={number} holder={"Enter Phone Number"} type={"tel"} text={"Phone Number"}/>
                </div>
                <div className="form__item-textarea">
                    <Textarea  setValue={setMessage} value={message} text={"Enter your message"}/>
                </div>
                <div className="form__check">
                    <PoliticCheckbox checked={checked} onChangeChecked={onChangeChecked}/>
                    <div className="form__button">
                        <SendButton cb={(e) => onClickSubmitMessage(e)}/>
                    </div>
                </div>
            </form>
            {
                active && <ModalFeedback  mainTitle={"You have successfully sent a message"}/>
            }
        </div>
    )
}

export default ContactForm