
import Users from '../Users/Users'

import whitepapers from "./img/whitepapres.png"
import white from "./img/white.png"

import "./unlock.scss"

const Unlock = () => {
    return (
			<section class="main__unlock main-unlock">
                <div class="main-unlock__container">
                    <div class="main-unlock__items">
                        <div class="main-future__item item-action">
                            <div class="item-action__body">
                                <div class="item-action__image ">
                                    <img loading="lazy" src={whitepapers} alt="image"/>
                                </div>
                                <div class="item-action__title title-40 text-anim _anim-items">
                                    <h3 data-splitting="chars">Whitepapers</h3>
                                </div>
                                <div class="item-action__text text-anim _anim-items">
                                    <p data-splitting="chars">Dive into comprehensive reports and analyses with our collection of whitepapers. </p>
                                </div>
                                <div class="item-action__button">
                                    <button class="button-arrow button-arrow-dark button">
                                        <span class=" button-arrow__text">Download Whitepapers Now</span>
                                        <span class="button-arrow__image">
                                            <i class="fa-solid fa-arrow-up"></i>
                                        </span>
                                        <span class="fill-container"></span>
                                    </button>
                                </div>
                                <div class="item-action__block ">
                                    <div class="user-stats__body">
                                        <div class="user-stats__text">
                                            <p>Downloaded By</p>
                                        </div>
                                        <div class="user-stats__title title-24">
                                            <h3>10k + Users</h3>
                                        </div>
                                    </div>
                                    <div className="users">
                                    <Users/>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="item-action__content  image-cart">
                                <div class="image-cart__items">
                                    <div class="image-cart__top">
                                        <div class="image-cart__title title-24 text-anim _anim-items">
                                            <h3 data-splitting="chars">Topics Coverage</h3>
                                        </div>
                                        <div class="image-cart__text">
                                            <p>Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).</p>
                                        </div>
                                    </div>
                                    <div class="image-cart__image">
                                        <img loading="lazy" src={white} alt="image"/>
                                    </div>
                                    <div class="image-cart__content block-text">
                                        <div class="block-text__content">
                                            <div class="block-text__item block-text__item-1">
                                                <div class="block-text__label">
                                                    <p>Total Whitepapers</p>
                                                </div>
                                                <div class="block-text__title ">
                                                    <p>Over 50 whitepapers</p>
                                                </div>
                                            </div>
                                            <div class="block-text__item block-text__item-2">
                                                <div class="block-item__body">
                                                    <div class="block-text__label">
                                                        <p>Download Formats</p>
                                                    </div>
                                                    <div class="block-text__title">
                                                        <p>PDF format for access.</p>
                                                    </div>
                                                </div>
                                                <div class="block-item__button">
                                                    <button class="button-arrow button">
                                                        <span class="button-arrow__text">Preview</span>
                                                        <span class="button-arrow__image">
                                                            <i class="fa-regular fa-eye"></i>
                                                        </span>
                                                        <span class="fill-container"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="block-text__body">
                                            <div class="block-text__item">
                                                <div class="block-text__label">
                                                    <p>Average Author Expertise</p>
                                                </div>
                                                <div class="block-text__title">
                                                    <p>Whitepapers are authored by subject matter experts with an average of 20 years of experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
    )
}

export default Unlock