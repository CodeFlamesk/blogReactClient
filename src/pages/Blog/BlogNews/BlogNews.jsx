
import { useSelector } from "react-redux"
import "./blog-news.scss"

import { useState } from "react";


const BlogNews = () => {


    const {
        introductionText,
        author,
        readingTime,
        categoryId,
        likes,
        comments,
        share,
        description
    } = useSelector(store => store.dashboard.post);


    const minuts = Math.ceil(readingTime / 1000 / 60)

    const loadingBlog = useSelector(store => store.dashboard.loadingBlog)


    const [show, setShow] = useState(false)


    return (
        <div className="main__intro main-intro">
            <div className="main-intro__container">
                <div className="main-intro__body">
                    <div className="main-intro__left">
                        <div className="main-intro__labels intro-labels">
                            <div className="intro-labels__title text-anim _anim-items">
                                <h2 data-splitting="chars">Introduction</h2>
                            </div>
                            <div className="intro-labels__text text-anim _anim-items">
                                <p>{introductionText}</p>
                            </div>
                        </div>
                        <div className="main-intro__article blog-article">
                            <div style={{height: `${show ? "auto" : "600px"}`, overflow: "hidden", marginBottom: "20px"}} id="description" dangerouslySetInnerHTML={{__html:description}} >
                                
                            </div>
                            {
                                !show &&  <div className="blog-article__add">
                                            <button onClick={() => setShow(prev => !prev)} className="button-arrow button">
                                                <span className="button-arrow__text button-text">Read Full Blog</span>      
                                                <span className="button-arrow__image-bottom button-text">
                                                    <i className="fa-solid fa-arrow-down"></i>
                                                </span>
                                                <span className="fill-container"></span>
                                            </button>
                                        </div>
                            }
                        </div>
                        
                    </div>
                    <div className="main-intro__right intro-right">
                        <div className="intro-right__data data-items">
                            <a href="/" className="data__item">
                                <span className="data__image">
                                    <i className="fa-regular fa-heart"></i>
                                </span>
                                <p className="data__text">{likes}</p>
                            </a>
                            <a href="/" className="data__item">
                                <span className="data__image">
                                    <i className="fa-regular fa-comment"></i>
                                </span>
                                <p className="data__text">{!loadingBlog ?  comments.length : "Loading"}</p>
                            </a>
                            <a href="/" className="data__item">
                                <span className="data__image">
                                    <i className="fa-regular fa-paper-plane"></i>
                                </span>
                                <p className="data__text">{share}</p>
                            </a>
                        </div>
                        <div className="intro-right__content">
                            <div className="intro-right__list list-item">
                                <ul className="list-item__ul  text-anim _anim-items">
                                    <li data-splitting="chars" className="list-item__text">Publication Date</li>
                                    <li data-splitting="chars" className="list-item__label">October 15, 2023</li>
                                </ul>
                                <ul className="list-item__ul text-anim _anim-items">
                                    <li data-splitting="chars" className="list-item__text">Category</li>
                                    <li data-splitting="chars" className="list-item__label">{categoryId}</li>
                                </ul>
                                <ul className="list-item__ul text-anim _anim-items">
                                    <li data-splitting="chars" className="list-item__text">Reading Time</li>
                                    <li data-splitting="chars" className="list-item__label">{minuts} minutes</li>
                                </ul>
                                <ul className="list-item__ul text-anim _anim-items">
                                    <li data-splitting="chars" className="list-item__text">Author Name</li>
                                    <li data-splitting="chars" className="list-item__label">{author}</li>
                                </ul>
                            </div>
                            <div className="intro-right__table intro-table">
                                <div className="intro-table__title">
                                    <h4>Table of Contents</h4>
                                </div>
                                <ul className="intro-table__list">
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p  data-splitting="chars">Introduction</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">AI in Diagnostic Imaging</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">Predictive Analytics and Disease Prevention</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">Personalized Treatment Plans</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">Drug Discovery and Research</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">AI in Telemedicine</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">Ethical Considerations</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">The Future of AI in Healthcare</p>
                                    </li>
                                    <li className="intro-table__item text-anim _anim-items">
                                        <p data-splitting="chars">Conclusion</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogNews