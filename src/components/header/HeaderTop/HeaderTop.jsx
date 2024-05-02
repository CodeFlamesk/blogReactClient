

import useMediaQuery from "../../../hooks/useMediaQuery"
import "./header-top.scss"

const HeaderTop = () => {

    const query = useMediaQuery('(max-width:767.98px)');

    return (
        <div className="header-top">
            <a href="/" className="header-top__link">
                {
                query ? 
                <span>Subscribe to our Newsletter For Blogs and Resources</span>
                : 
                <span>Subscribe to our Newsletter For New & latest Blogs and Resources</span>
                }
                <i className="fa-solid fa-arrow-left"></i>
            </a>
        </div>
    )
}

export default HeaderTop