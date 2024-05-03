import React from 'react'
import FilterList from '../FilterList/FilterList'
import FilterItem from '../FilterItem/FilterItem'


import image from "../Users/img/Image.webp"
import image1 from "../Users/img/Image2.webp"
import image2 from "../Users/img/Image1.webp"


const data = [
    {
		img: image,
        date: "October 15, 2023",
        name: "John Techson",
        shortTitle: "Quantum Computing",
        title: "The Quantum Leap in Computing",
        text:"Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
		comment: 18,
		link:21,
		likes:24,
		category: ""
    },
	{
		img: image1,
        date: "November 5, 2023",
        name: "Sarah Ethicist",
        shortTitle: "AI Ethics",
        title: "The Ethical Dilemmas of AI",
        text:"A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
		comment: 78,
		link:18,
		likes:32,
		category: ""
    },
	{
		img: image2,
        date: "December 10, 2023",
        name: "Astronomer X",
        shortTitle: "Space Exploration",
        title: "The Mars Colonization Challenge",
        text:"Exploring the technical and logistical challenges of human colonization on Mars.",
		comment: 18,
		link:21,
		likes:24,
		category: ""
    }
]

const Explore = () => {
    return (
        
        <section className="main__explore main-explore">
			<div className="main-explore__container">
				<div className="main-explore__filter filter">
					<FilterList/>
					<div className="filter__content">
						{
							data.map(item => {
								return (
									<FilterItem {...item}/>
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