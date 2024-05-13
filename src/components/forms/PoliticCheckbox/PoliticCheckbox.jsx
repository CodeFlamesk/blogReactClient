
import "./checkbox.scss"

const PoliticCheckbox = () => {
    return (
        <label for="input-1" className="form__checkbox form-checkbox ">
            <input id="input-1" type="checkbox" className="form-checkbox__input" required/>
            <span className="form-checkbox__block"></span>
            <span className="form-checkbox__text">I agree with Terms of Use and  <a href="#">Privacy Policy</a></span>
        </label>
    )
}

export default PoliticCheckbox