

import imageLarge from "./img/image-large.webp"
import imageSmall from "./img/image-small.webp"
import imageMobile from "./img/image-mobile.webp"

import "./blog-main-block.scss"

const BlogMainBlock = () => {
    return (
        <section className="main__page-blog page-blog">
                    
                <div className="page-blog__body">
                    <div className="page-blog__image">
                        <picture>
                            <source media="(min-width:1300px )" srcSet={imageLarge} type="image/webp"/>
                            <source media="(min-width:991.98px )" srcSet={imageSmall} type="image/webp"/>
                            <img src={imageMobile} alt="image"/>
                        </picture>
                    </div>
                    <div className="page-blog__title ">
                        <h1 >The Rise of Artificial Intelligence in Healthcare</h1>
                    </div>
                </div>
            
        </section>
    )
}

export default BlogMainBlock