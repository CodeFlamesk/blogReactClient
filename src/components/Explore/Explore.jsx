import React from 'react'
import FilterList from '../FilterList/FilterList'
import FilterItem from '../FilterItem/FilterItem'

const Explore = () => {
    return (
        
        <section class="main__explore main-explore">
					<div class="main-explore__container">
						
						<div class="main-explore__filter filter">
							<FilterList/>
							<div class="filter__content">
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