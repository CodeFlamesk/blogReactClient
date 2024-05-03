

import image from "./img/Image.png"
import image2 from "./img/Image2.png"
import image3 from "./img/Image3.png"

import "./download.scss"

const DownloadPDF = () => {
    return (
        <div className="main__latest main-latest">
        <div className="main-latest__container">
            
            <div className="main-latest__items">
                <article className="main-latest__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image} alt="image"/>
                    </div>
                    <a className="item-video__title">
                        <h3 >FutureTech Trends 2024</h3>
                    </a>
                    <div className="item-video__text">
                        <p>An ebook that predicts upcoming technology trends for the next year, including AI developments</p>
                    </div>
                    <div className="item-video__buttons">
                        <a href="/" className="button-arrow button ">
                            <span className="button-arrow__text">View Details</span>     
                            <div className="fill-container"></div> 
                        </a>
                        <a href="/" className="button-arrow button">
                            <span className="button-arrow__text">Download PDF Now</span>
                            <div className="fill-container"></div>      
                        </a>
                    </div>
                </article>
                <article className="main-latest__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image2} alt="image"/>
                    </div>
                    <a className="item-video__title ">
                        <h3 >Space Exploration Ebook</h3>
                    </a>
                    <div className="item-video__text">
                        <p>An ebook that predicts upcoming technology trends for the next year, including AI developments</p>
                    </div>
                    <div className="item-video__buttons">
                        <a href="/" className="button-arrow button ">
                            <span className="button-arrow__text">View Details</span>     
                            <div className="fill-container"></div> 
                        </a>
                        <a href="/" className="button-arrow button">
                            <span className="button-arrow__text">Download PDF Now</span>
                            <div className="fill-container"></div>      
                        </a>
                    </div>
                </article>
                <article className="main-latest__item item-video">
                    <div className="item-video__iframe">
                        <img loading="lazy" src={image3} alt="image"/>
                    </div>
                    <a className="item-video__title ">
                        <h3 >Quantum Computing Whitepaper</h3>
                    </a>
                    <div className="item-video__text">
                        <p>An in-depth whitepaper exploring the principles, applications.</p>
                    </div>
                    <div className="item-video__buttons">
                        <a href="/" className="button-arrow button ">
                            <span className="button-arrow__text">View Details</span>     
                            <div className="fill-container"></div> 
                        </a>
                        <a href="/" className="button-arrow button">
                            <span className="button-arrow__text">Download PDF Now</span>
                            <div className="fill-container"></div>      
                        </a>
                    </div>
                </article> 
            </div>
        </div>
    </div>

    )
}

export default DownloadPDF