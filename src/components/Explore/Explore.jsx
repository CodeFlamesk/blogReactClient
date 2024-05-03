import React from 'react'
import FilterList from '../FilterList/FilterList'
import FilterItem from '../FilterItem/FilterItem'

const Explore = () => {
    return (
        
        <section className="main__explore main-explore">
					<div className="main-explore__container">
						
						<div className="main-explore__filter filter">
							<FilterList/>
							<div className="filter__content">
								<FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
							</div>
						</div>
					</div>
				</section>
    )
}

export default Explore