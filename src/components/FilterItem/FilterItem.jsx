import React from 'react'
import "./filter-item.scss";

import image from "../../components/Users/img/Image.webp"

const FilterItem = () => {
    return (
        <div class="filter__item item-event">
            <div class="item-event__content">
                <div class="item-event__person person">
                    <div class="person__image">
                        <img loading="lazy" width="80" height="80" src={image} alt="user"/>
                    </div>
                    <div class="person__info text-anim _anim-items">
                        <div class="person__title">
                            <h3 data-splitting="chars">John Techson</h3>
                        </div>
                        <div class="person__text">
                            <p data-splitting="chars">Quantum Computing</p>
                        </div>
                    </div>
                </div>
                <div class="item-event__button">
                    <a href="#" class="button-arrow button">
                        <span class="button-arrow__text"> View Blog</span>
                        <span class="button-arrow__image">
                            <i class="fa-solid fa-arrow-up"></i>
                        </span>
                        <div class="fill-container"></div>
                    </a>
                </div>
            </div>
            <div class="item-event__body">
                <div class="item-event__data text-anim _anim-items">
                    <p data-splitting="chars">October 15, 2023</p>
                </div>
                <div class="item-event__info info-block">
                    <div class="info-block__body">
                        <div class="info-block__title">
                            <h3>The Quantum Leap in Computing</h3>
                        </div>
                        <div class="info-block__text">
                            <p>Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                        </div>
                    </div>
                    <div class="info-block__button">
                        <a href="#" class="button-arrow button">
                            <span class="button-arrow__text"> View Blog</span>
                            <span class="button-arrow__image">
                                <i class="fa-solid fa-arrow-up"></i>
                            </span>
                            <div class="fill-container"></div>
                        </a>
                    </div>
                </div>
                <div class="item-event__data data-items">
                    <button  class="data__item">
                        <span  class="data__image data-heart">
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <span class="data__text">24.5k</span>
                    </button>
                    <a href="/" class="data__item">
                        <span class="data__image">
                            <i class="fa-regular fa-comment"></i>
                        </span>
                        <p class="data__text">50</p>
                    </a>
                    <a href="/" class="data__item">
                        <span class="data__image">
                            <i class="fa-regular fa-paper-plane"></i>
                        </span>
                        <p class="data__text">20</p>
                    </a>
                </div>
            </div>
        </div>
)
}

export default FilterItem