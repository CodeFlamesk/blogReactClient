
import star from "./img/star.svg"

import "./star.scss"

const Stars = () => {
    return (
        <div class="main-real__rating rating">
            <div>
                <img src={star} alt="star" />
            </div>
            <div>
                <img src={star} alt="star" />
            </div>
            <div>
                <img src={star} alt="star" />
            </div>
            <div>
                <img src={star} alt="star" />
            </div>
            <div>
                <img src={star} alt="star" />
            </div>
        </div>
    )
}

export default Stars