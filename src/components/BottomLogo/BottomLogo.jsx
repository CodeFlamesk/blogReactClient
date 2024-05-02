
import "./bottom-logo.scss"

import logoSmall from "./img/logo-smal.webp"
import logoMobile from "./img/logo-mobile.webp"
import logoDes from "./img/logo-large.webp"
import useMediaQuery from "../../hooks/useMediaQuery"


const BottomLogo = () => {
    const query = useMediaQuery('(max-width:600.98px)');

    return (
        <section className="main__logo main-logo">
            <div className="main-logo__container">
                <div className="main-logo__body"> 
                    { !query && <Logo/>}
                    <div className='main-logo__header-item header-item'>
                        <div className="header-item__block">
                            {
                                query && <Logo/> 
                            }
                            <div className='header-item__label '>
                                <p >Learn, Connect, and Innovate</p>
                            </div>
                        </div>
                        <div className='header-item__title '>
                            <h2>Be Part of the Future Tech Revolution</h2>
                        </div>
                        <div className='header-item__text text  '>
                            <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                        </div>
                    </div>
                </div>
                <div className="main-logo__items item-go">
                    <div className="item-go__item">
                        <div className="item-go__header-link header-link">
                            <div className="header-link__body">
                                <div className="header-link__title text-anim _anim-items">
                                    <h3 data-splitting="chars">Resource Access</h3>
                                </div>
                            </div>
                                <a href="#" className="header-link__button ">
                                    <i className="fa-solid fa-arrow-up"></i>
                                </a>
                            
                        </div>
                        <div className="item-go__text">
                            <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                        </div>
                    </div>
                    <div className="item-go__item">
                        <div className="item-go__header-link header-link">
                            <div className="header-link__body">
                                <div className="header-link__title text-anim _anim-items">
                                    <h3 data-splitting="chars">Community Forum</h3>
                                </div>
                                
                            </div>
                            
                                <a href="#" className="header-link__button">
                                    <i className="fa-solid fa-arrow-up"></i>
                                </a>
                        
                        </div>
                        <div className="item-go__text">
                            <p>Join our active community forum to discuss industry trends, share insights, and collaborate with peers.</p>
                        </div>
                    </div>
                    <div className="item-go__item">
                        <div className="item-go__header-link header-link">
                            <div className="header-link__body">
                                <div className="header-link__title text-anim _anim-items">
                                    <h3 data-splitting="chars">Tech Events</h3>
                                </div>
                                
                            </div>
                            
                                <a href="#" className="header-link__button">
                                    <i className="fa-solid fa-arrow-up"></i>
                                </a>
                            
                        </div>
                        <div className="item-go__text">
                            <p>Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Logo = () => {

    return (
        <div className="main-logo__image ">
            <picture>
                <source media="(min-width:1300px )" srcset={logoDes} type="image/webp"/>
                <source media="(min-width:700.98px )" srcset={logoSmall} type="image/webp"/>
                <img loading="lazy" src={logoMobile} alt="Logo"/>
            </picture>
        </div>
    )
}
export default BottomLogo