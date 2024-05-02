
import "./filter-list.scss";

const FilterList = () => {
    return (
        <div class="filter__list">
            <div class="filter__body">
                <button class="filter__trigger _active">All</button>
                <button class="filter__trigger">Quantum Computing</button>
                <button class="filter__trigger">AI Ethics</button>
                <button class="filter__trigger">Space Exploration</button>
                <button class="filter__trigger">Biotechnology</button>
                <button class="filter__trigger">Renewable Energy</button>
            </div>
        </div>
    )
}

export default FilterList