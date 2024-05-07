import React from 'react'
import FilterList from '../FilterList/FilterList'
import FilterItem from '../FilterItem/FilterItem'


import image from "../Users/img/Image.webp"
import { useSelector } from 'react-redux'
import { useAutoAnimate } from '@formkit/auto-animate/react'





const Explore = () => {

	const [block] = useAutoAnimate()
	const posts = useSelector(store => store.dashboard.posts)
    return (
        <section className="main__explore main-explore">
			<div className="main-explore__container">
				<div className="main-explore__filter filter">
					<FilterList/>
					<div ref={block} className="filter__content">

						{
							posts.map((item , i) => {
								return (
									<FilterItem key={i} img={image} {...item}/>
								)
							})
						}	
					</div>
				</div>
			</div>
		</section>
    )
}

export default Explore