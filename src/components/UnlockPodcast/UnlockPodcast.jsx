import "./unlock-podcast.scss"

import ai from "./img/al-revolution.png"
import aui from "./img/aui.png"

const UnlockPodcast = () => {
    return (
        <section className="main__unlock main-unlock">
            <div className="main-unlock__container">
                <div className="main-unlock__items">
                    <div className="main-future__item item-action">
                        <div className="item-action__body">
                            <div className="item-action__image _anim-items no-repeat-anim">
                                <img width="80" height="80" src={ai} alt="image"/>
                            </div>
                            <div className="item-action__title-block title-block">
                                <div className="item-action__title title-40 text-anim _anim-items">
                                    <h3 data-splitting="chars">AI Revolution</h3>
                                </div>
                            </div>
                            <div className="item-action__block user-action">
                                <div className="user-action__body text-anim _anim-items">
                                    <p data-splitting="chars" className="user-action__text">Host</p>
                                    <p data-splitting="chars" className="user-action__label">Dr. Sarah Mitchell</p>
                                </div>
                                <div className="user-action__button">
                                    <a href="/" className="button-arrow button">
                                        <span className="button-arrow__text">Listen Podcast </span>      
                                        <span className="button-arrow__image">
                                            <i className="fa-solid fa-arrow-up"></i>
                                        </span>
                                        <div className="fill-container"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="item-action__content  image-cart">
                            <div className="image-cart__items">
                                <div className="image-video__image">
                                    <img src={aui} alt="image"/>
                                </div>
                                <h3 className="image-bottom__title">Variety of Topics</h3>
                                <p className="image-bottom__text">Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                                <div className="image-cart__content ">
                                    <div className="image-cart__list">
                                        <ul className="list-item__ul">
                                            <li data-splitting="chars" className="list-item__text"> Total Episodes</li>
                                            <li data-splitting="chars" className="list-item__label">40 </li>
                                        </ul>
                                        <ul className="list-item__ul text-anim _anim-items">
                                            <li data-splitting="chars" className="list-item__text"> Average Episode Length</li>
                                            <li data-splitting="chars" className="list-item__label"> 40 min</li>
                                        </ul>
                                        <ul className="list-item__ul text-anim _anim-items">
                                            <li data-splitting="chars" className="list-item__text"> Release Frequency</li>
                                            <li data-splitting="chars" className="list-item__label">Monthly </li>
                                        </ul>
                                        
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

export default UnlockPodcast