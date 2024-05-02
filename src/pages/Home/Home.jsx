
import HomeMainBlock from "../../components/HomeMainBlock/HomeMainBlock"
import Links from '../../components/Links/Links'
import BlockHeaderItem from '../../components/BlockHeaderItem/BlockHeaderItem'
import RightButton from '../../components/RightButton/RightButton'
import Reviews from "../../components/Reviews/Reviews"
import BottomLogo from "../../components/BottomLogo/BottomLogo"


const Home = () => {
    return (
        <div>
            <HomeMainBlock/>
            <Links/>
            <BlockHeaderItem title={"FutureTech Features"} label={"Unlock the Power of"}/>
            
            <BlockHeaderItem title={"Explore FutureTech's In-Depth Blog Posts"} label={"A Knowledge Treasure Trove"}>
                <RightButton text={"View All Blogs"}/>
            </BlockHeaderItem>

            <BlockHeaderItem title={"Unlock Valuable Knowledge with FutureTech's Resources"} label={"Your Gateway to In-Depth Information"}>
                <RightButton text={"View All Resources"}/>
            </BlockHeaderItem>

            <BlockHeaderItem title={"Real Words from Real Readers"} label={"What Our Readers Say"}>
                <RightButton text={"View All Testimonials"}/>
            </BlockHeaderItem>
            <Reviews/>
            <BottomLogo/>
        </div>
    )
}

export default Home