import Title40 from "../Title40/Title40"
import "./future.scss"

import future from "./img/future.png"
import research from "./img/research.png"

const Future = () => {
    return (
        
        <section className="main__future main-future">
					<div className="main-future__container">
						<div className="main-future__body">
							<div className="main-future__item item-action">
								<div className="item-action__body">
									<div className="item-action__image ">
										<img width="80" height="80" src={future} alt="image"/>
									</div>
									<div className="item-action__title">
                                        <Title40 title={"Future Technology Blog"}/>
									</div>
									<div className="item-action__text">
										<p>Stay informed with our blog section dedicated to future technology.</p>
									</div>
								</div>
								<div className="item-action__content">
									<div className="item-action__items">
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars" >Quantity</h4>
											</div>
											<div className="card-info__text">
												<p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
											</div>
										</div>
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Variety</h4>
											</div>
											<div className="card-info__text">
												<p>Articles cover fields like AI, robotics, biotechnology, and more.</p>
											</div>
										</div>
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Frequency</h4>
											</div>
											<div className="card-info__text">
												<p>Fresh content added daily to keep you up to date.</p>
											</div>
										</div>
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Authoritative</h4>
											</div>
											<div className="card-info__text">
												<p>Written by our team of tech experts and industry professionals.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="main-future__item item-action">
								<div className="item-action__body">
									<div className="item-action__image ">
										<img width="80" height="80" src={research} alt="image"/>
									</div>
									<div className="item-action__title">
                                        <Title40 title={"Research Insights Blogs"}/>
									</div>
									<div className="item-action__text">
										<p>Dive deep into future technology concepts with our research section.</p>
									</div>
								</div>
								<div className="item-action__content">
									<div className="item-action__items">
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Depth</h4>
											</div>
											<div className="card-info__text">
												<p>500+ research articles for in-depth understanding.</p>
											</div>
										</div>
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Graphics</h4>
											</div>
											<div className="card-info__text">
												<p>Visual aids and infographics to enhance comprehension.</p>
											</div>
										</div>
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Trends</h4>
											</div>
											<div className="card-info__text">
												<p>Explore emerging trends in future technology research.</p>
											</div>
										</div>
										<div className="item-action__item card-info">
											<div className="card-info__title text-anim _anim-items">
												<h4 data-splitting="chars">Contributors</h4>
											</div>
											<div className="card-info__text">
												<p>Contributions from tech researchers and academics.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
    )
}

export default Future