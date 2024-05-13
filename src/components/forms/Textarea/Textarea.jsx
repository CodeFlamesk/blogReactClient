

import "./textarea.scss"

const Textarea = ({text}) => {
    return (
        <div className="form__item  ">
            <label className="form__label">{text}</label>
            <textarea className="form__textarea" name="textarea" cols="30" rows="10" placeholder="Enter your Message"></textarea>
        </div>
    )
}

export default Textarea