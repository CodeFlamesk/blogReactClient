
import HomeMainBlock from "../../components/HomeMainBlock/HomeMainBlock"
import Links from '../../components/Links/Links'
import BlockHeaderItem from '../../components/BlockHeaderItem/BlockHeaderItem'
import RightButton from '../../components/RightButton/RightButton'
import Reviews from "../../components/Reviews/Reviews"
import BottomLogo from "../../components/BottomLogo/BottomLogo"
import Future from "../../components/Future/Future"
import Explore from "../../components/Explore/Explore"
import Unlock from "../../components/Unlock/Unlock"


const Home = () => {
    return (
        <>
            <HomeMainBlock/>
            <Links/>
            <BlockHeaderItem title={"FutureTech Features"} label={"Unlock the Power of"}/>
            <Future/>
            <BlockHeaderItem title={"Explore FutureTech's In-Depth Blog Posts"} label={"A Knowledge Treasure Trove"}>
                <RightButton text={"View All Blogs"}/>
            </BlockHeaderItem>

            <Explore/>
            <BlockHeaderItem title={"Unlock Valuable Knowledge with FutureTech's Resources"} label={"Your Gateway to In-Depth Information"}>
                <RightButton text={"View All Resources"}/>
            </BlockHeaderItem>

            <Unlock/>
            <BlockHeaderItem title={"Real Words from Real Readers"} label={"What Our Readers Say"}>
                <RightButton text={"View All Testimonials"}/>
            </BlockHeaderItem>
            <Reviews/>
            <BottomLogo/>
        </>
    )
}

export default Home