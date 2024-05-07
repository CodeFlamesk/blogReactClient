import { useSelector } from "react-redux"
import ImageItem from "./ImageItem/ImageItem"
import "./news-block.scss";

const NewsBlockPopular = () => {

    const posts = useSelector(store => store.dashboard.posts);

    return (
        <section className="main__image main-activity">
            <div className="main-activity__container">
                <div className="main-activity__items">
                    {
                        posts.map((item) => {
                            return (
                                <ImageItem key={item._id} {...item}/> 
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default NewsBlockPopular