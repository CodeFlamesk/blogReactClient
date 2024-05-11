import React from 'react'
import SpollersItems from "components/Spollers/SpollersItems/SpollersItems"
import ContactForm from 'pages/Contact/ContactForm/ContactForm'
import image from "assets/contacts/image1.png"
import image2 from "assets/contacts/image2.png"

import Title40 from "components/Title40/Title40"
import Container from 'components/Container/Container'
const UnlockContact = () => {
	return (
		<section className="main__unlock main-unlock">
			
				<Container>
				<div className="main-unlock__items">
					<div className="main-future__item item-action">
						<div className="item-action__body">
							<div className="item-action__image">
								<img width="80" height="80"  src={image} alt="image"/>
							</div>
							<div className='main-block__header-item header-item'>
								<div className='header-item__title '>
									<h2 >Get in Touch with AI Podcasts</h2>
								</div>
							</div>
						</div>
						<ContactForm/>
					</div>
					<div className="main-future__item item-action">
						<div className="item-action__body">
							<div className="item-action__image ">
								<img width="80" height="80" src={image2} alt="image"/>
							</div>
							<div className="item-action__title title-40 ">
								<h3 data-splitting="chars">Asked question</h3>
								<Title40/> 
							</div>
							<div className="item-action__text">
								<p>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
							</div>
							<div className="item-action__button">
								<button className="button-arrow button-arrow-dark button">
									<span className=" button-arrow__text">Ask Qustion</span>
									<span className="button-arrow__image">
										<i className="fa-solid fa-arrow-up"></i>
									</span>
									<span className="fill-container"></span>
								</button>
							</div>
							
						</div>
						<div className="item-action__content tabs">
							<SpollersItems/>
						</div>
					</div>
				</div>
				</Container>
				
				
			
		</section>
				
	)
}

export default UnlockContact