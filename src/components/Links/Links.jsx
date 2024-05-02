
import "./links.scss"

import image1 from "./img/Icon.png"
import image2 from "./img/image2.png"
import image3 from "./img/image3.png"

const data = [
    {
        label:"Latest News Updates",
        title:"Stay Current",
        text:"Over 1,000 articles published monthly",
        img: image1
    },
    {
        label:"Expert Contributors",
        title:"Trusted Insights",
        text:"50+ renowned AI experts on our team",
        img: image2
    },
    {
        label:"Global Readership",
        title:"Worldwide Impact",
        text:"2 million monthly readers",
        img: image3
    }
]

const Links = () => {
    return (
        <section class="main__links main-links">	
            <div class="main-links__container">
                <div class="main-links__body">
                    {
                        data.map(item => {
                            return (
                                <Link key={item.img} {...item}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

const Link = ({img, text, title, label}) => {
    return (
        <div class="main-links__item link-item">
            <div class="link-item__image ">
                <img width="50" height="50" src={img} alt="icon"/>
            </div>
            <div class="link-item__header header-link">
                <div class="header-link__body">
                    <div class="header-link__title">
                        <h3>{label}</h3>
                    </div>
                    <div class="header-link__text">
                        <p>{title}</p>
                    </div>
                </div>
                <div class="header-link__btn">
                    <a href="#" class="header-link__button">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>
                </div>
            </div>
            <div class="link-item__text">
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Links