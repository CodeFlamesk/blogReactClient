
import HomeMainBlock from "components/HomeMainBlock/HomeMainBlock"
import Links from 'components/Links/Links'
import BlockHeaderItem from 'components/BlockHeaderItem/BlockHeaderItem'
import RightButton from 'components/RightButton/RightButton'
import Reviews from "components/Reviews/Reviews"


import Explore from "components/Explore/Explore"
import Unlock from "components/Unlock/Unlock"
import UnlockBlockParent from "components/UnlockBlock/UnlockBlockParent/UnlockBlockParent"
import FututreBlockParent from "components/UnlockBlock/FutureBlockParent/FututreBlockParent"
import FutureItems from "components/Future/FutureItems/FutureItems"
import ItemAction from "components/Future/ItemAction/ItemAction"

import future from "./img/future.png"
import research from "./img/research.png"


const data = [
	{
		title: "Future Technology Blog",
		text:"Stay informed with our blog section dedicated to future technology.",
		img: future,
		data: [
			{
				title:"Quantity",
				text:"Over 1,000 articles on emerging tech trends and breakthroughs."
			},
			{
				title:"Variety",
				text:"Articles cover fields like AI, robotics, biotechnology, and more."
			},
			{
				title:"Frequency",
				text:"Fresh content added daily to keep you up to date."
			},
			{
				title:"Authoritative",
				text:"Written by our team of tech experts and industry professionals."
			},
		]			
	},
	{
		title: "Research Insights Blogs",
		text:"Dive deep into future technology concepts with our research section.",
		img: research,
		data: [
			{
				title:"Depth",
				text:"500+ research articles for in-depth understanding."
			},
			{
				title:"Graphics",
				text:"Visual aids and infographics to enhance comprehension."
			},
			{
				title:"Trends",
				text:"Explore emerging trends in future technology research."
			},
			{
				title:"Contributors",
				text:"Contributions from tech researchers and academics."
			},
		]			
	}
]

const Home = () => {
    return (
       <div>STMG</div>
    )
}

export default Home