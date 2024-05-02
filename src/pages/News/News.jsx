import BlockHeaderItem from "../../components/BlockHeaderItem/BlockHeaderItem"
import BottomLogo from "../../components/BottomLogo/BottomLogo"
import Explore from "../../components/Explore/Explore"
import RightButton from "../../components/RightButton/RightButton"


const News = () => {
    return (
        <>


            <BlockHeaderItem title={"Discover the World of Headlines"} label={"Welcome to Our News Hub"}>
                <RightButton text={"View All News"}/>
            </BlockHeaderItem>
            <Explore/>


            <BlockHeaderItem title={"Visual Insights for the Modern Viewer"} label={"Featured Videos"}>
                <RightButton text={"View All"}/>
            </BlockHeaderItem>




            <BottomLogo/>
        </>
    )
}

export default News