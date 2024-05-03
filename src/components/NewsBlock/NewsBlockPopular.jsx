import React from 'react'
import image from "./img/Image.webp"
import image1 from "./img/Image2.webp"
import image2 from "./img/Image4.webp"
import image3 from "./img/Image3.webp"

const NewsBlockPopular = () => {
    return (
        <section className="main__image main-activity">
            <div className="main-activity__container">
                
                <div className="main-activity__items">
                    <article className="main-activity__item image-item">
                        <div className="image-item__image">
                            <img src={image1} alt="image"/>
                        </div>
                        <div className="image-item__title text-anim _anim-items">
                            <h3 data-splitting="chars">A Decisive Victory for Progressive Policies</h3>
                        </div>
                        <div className="image-item__text text-anim _anim-items">
                            <p data-splitting="chars">Politics</p>
                        </div>
                        <div className="main-activity__block">
                            <div className="main-activity__data data-items">
                                <button  className="data__item">
                                    <span  className="data__image data-heart">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span className="data__text">32k</span>
                                </button>
                                <a href="/" className="data__item">
                                    <span className="data__image">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </span>
                                    <p className="data__text">18</p>
                                </a>
                            </div>
                            <div className="main-activity__button">
                                <a href="/" className="button-arrow button">
                                    <span className="button-arrow__text">Read More</span>      
                                    <span className="button-arrow__image">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="main-activity__item image-item">
                        <div className="image-item__image">
                            <img src={image2} alt="image"/>
                        </div>
                        <div className="image-item__title text-anim _anim-items">
                            <h3 data-splitting="chars">Tech Giants Unveil Cutting-Edge AI Innovations</h3>
                        </div>
                        <div className="image-item__text text-anim _anim-items">
                            <p data-splitting="chars">Technology</p>
                        </div>
                        <div className="main-activity__block">
                            <div className="main-activity__data data-items">
                                <button  className="data__item">
                                    <span className="data__image data-heart">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span className="data__text">20k</span>
                                </button>
                                <a href="/" className="data__item">
                                    <span className="data__image">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </span>
                                    <p className="data__text">18</p>
                                </a>
                            </div>
                            <div className="main-activity__buton">
                                <a href="/" className="button-arrow button">
                                    <span className="button-arrow__text">Read More</span>      
                                    <span className="button-arrow__image">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="main-activity__item image-item">
                        <div className="image-item__image">
                            <img src={image3} alt="image"/>
                        </div>
                        <div className="image-item__title text-anim _anim-items">
                            <h3 data-splitting="chars">COVID-19 Variants</h3>
                        </div>
                        <div className="image-item__text text-anim _anim-items">
                            <p data-splitting="chars">Health</p>
                        </div>
                        <div className="main-activity__block">
                            <div className="main-activity__data data-items">
                                <button  className="data__item">
                                    <span className="data__image data-heart">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                    <span className="data__text">20k</span>
                                </button>
                                <a href="/" className="data__item">
                                    <span className="data__image">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </span>
                                    <p className="data__text">18</p>
                                </a>
                            </div>
                            <div className="main-activity__buton">
                                <a href="/" className="button-arrow button">
                                    <span className="button-arrow__text">Read More</span>      
                                    <span className="button-arrow__image">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default NewsBlockPopular