
import image1 from "./img/image1.webp"
import image2 from "./img/image2.webp"
import image3 from "./img/image3.webp"
import image4 from "./img/image4.webp"


import "./visual.scss"

const Visual = () => {
    return (
        <div className="main__visual main-visual">
        <div className="main-visual__container">
            <div className="main-visual__items">
                <article className="main-visual__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image1} alt="image"/>
                    </div>
                    <a className="item-video__title title-24">
                        <h3>Mars Exploration: Unveiling Alien Landscapes</h3>
                    </a>
                    <div className="item-video__text">
                        <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
                    </div>
                </article>
                <article className="main-visual__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image2} alt="image"/>
                    </div>
                    <a className="item-video__title title-24">
                        <h3>Blockchain Explained: A Revolution in Finance</h3>
                    </a>
                    <div className="item-video__text">
                        <p>Delve into the world of blockchain technology and its transformative impact on the financial industry.</p>
                    </div>
                </article>
                <article className="main-visual__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image3} alt="image"/>
                    </div>
                    <a className="item-video__title title-24">
                        <h3>Breaking the Silence: Mental Health Awareness in the Workplace</h3>
                    </a>
                    <div className="item-video__text">
                        <p>An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.</p>
                    </div>
                </article>
                <article className="main-visual__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image4} alt="image"/>
                    </div>
                    <a className="item-video__title title-24">
                        <h3>Revolutionizing Investment Strategies</h3>
                    </a>
                    <div className="item-video__text">
                        <p>An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
    )
}

export default Visual