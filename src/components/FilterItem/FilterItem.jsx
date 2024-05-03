import React from 'react'
import "./filter-item.scss";

import image from "components/Users/img/Image.webp"

const FilterItem = () => {
    return (
        <div className="filter__item item-event">
            <div className="item-event__content">
                <div className="item-event__person person">
                    <div className="person__image">
                        <img loading="lazy" width="80" height="80" src={image} alt="user"/>
                    </div>
                    <div className="person__info text-anim _anim-items">
                        <div className="person__title">
                            <h3 data-splitting="chars">John Techson</h3>
                        </div>
                        <div className="person__text">
                            <p data-splitting="chars">Quantum Computing</p>
                        </div>
                    </div>
                </div>
                <div className="item-event__button">
                    <a href="#" className="button-arrow button">
                        <span className="button-arrow__text"> View Blog</span>
                        <span className="button-arrow__image">
                            <i className="fa-solid fa-arrow-up"></i>
                        </span>
                        <div className="fill-container"></div>
                    </a>
                </div>
            </div>
            <div className="item-event__body">
                <div className="item-event__data text-anim _anim-items">
                    <p data-splitting="chars">October 15, 2023</p>
                </div>
                <div className="item-event__info info-block">
                    <div className="info-block__body">
                        <div className="info-block__title">
                            <h3>The Quantum Leap in Computing</h3>
                        </div>
                        <div className="info-block__text">
                            <p>Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                        </div>
                    </div>
                    <div className="info-block__button">
                        <a href="#" className="button-arrow button">
                            <span className="button-arrow__text"> View Blog</span>
                            <span className="button-arrow__image">
                                <i className="fa-solid fa-arrow-up"></i>
                            </span>
                            <div className="fill-container"></div>
                        </a>
                    </div>
                </div>
                <div className="item-event__data data-items">
                    <button  className="data__item">
                        <span  className="data__image data-heart">
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        <span className="data__text">24.5k</span>
                    </button>
                    <a href="/" className="data__item">
                        <span className="data__image">
                            <i className="fa-regular fa-comment"></i>
                        </span>
                        <p className="data__text">50</p>
                    </a>
                    <a href="/" className="data__item">
                        <span className="data__image">
                            <i className="fa-regular fa-paper-plane"></i>
                        </span>
                        <p className="data__text">20</p>
                    </a>
                </div>
            </div>
        </div>
)
}

export default FilterItem