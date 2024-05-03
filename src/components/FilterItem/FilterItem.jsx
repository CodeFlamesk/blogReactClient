import React from 'react'
import "./filter-item.scss";
import RightButton from 'components/RightButton/RightButton';
import DataItem from 'components/DataItem/DataItem';



const FilterItem = ({img,name,  shortTitle,date, title, text, link, comment, likes }) => {
    return (
        <div className="filter__item item-event">
            <div className="item-event__content">
                <div className="item-event__person person">
                    <div className="person__image">
                        <img loading="lazy" width="80" height="80" src={img} alt="user"/>
                    </div>
                    <div className="person__info text-anim _anim-items">
                        <div className="person__title">
                            <h3 data-splitting="chars">{name}</h3>
                        </div>
                        <div className="person__text">
                            <p data-splitting="chars">{shortTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="item-event__button">
                    <RightButton text={"View Blog"}/>
                </div>
            </div>
            <div className="item-event__body">
                <div className="item-event__data text-anim _anim-items">
                    <p data-splitting="chars">{date}</p>
                </div>
                <div className="item-event__info info-block">
                    <div className="info-block__body">
                        <div className="info-block__title">
                            <h3>{title}</h3>
                        </div>
                        <div className="info-block__text">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="info-block__button">
                        <RightButton text={"View Blog"}/>
                    </div>
                </div>
                <div className="item-event__data data-items">
                    <DataItem link={link} likes={likes} comment={comment}/> 
                </div>
            </div>
        </div>
)
}

export default FilterItem