import Title40 from "../Title40/Title40"
import "./future.scss"

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
	},
]


const Future = () => {
    return (
        
        <section className="main__future main-future">
			<div className="main-future__container">
				<div className="main-future__body">
					{
						data.map(({img,title, text, data}, i) => {
							return (
								<div key={i} className="main-future__item item-action">
									<div className="item-action__body">
										<div className="item-action__image ">
											<img width="80" height="80" src={img} alt="image"/>
										</div>
										<div className="item-action__title">
											<Title40 title={title}/>
										</div>
										<div className="item-action__text">
											<p>{text}</p>
										</div>
									</div>
									<div className="item-action__content">
										<div className="item-action__items">
											{
												data.map(({title, text}, i) => {
													return (
														<div key={i} className="item-action__item card-info">
															<div className="card-info__title ">
																<h4>{title}</h4>
															</div>
															<div className="card-info__text">
																<p>{text}</p>
															</div>
														</div>
													)
												})
											}
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
    )
}

export default Future