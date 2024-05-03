
import "./filter-list.scss";


const data = [
    {
        text: "All",
    },
    {
        text: "Quantum Computing",
    },
    {
        text: "AI Ethics",
    },
    {
        text: "Space Exploration",
    },
    {
        text: "Biotechnology",
    },
    {
        text: "Renewable Energy",
    },
]
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import useMediaQuery from "hooks/useMediaQuery";




const FilterList = () => {
    const query = useMediaQuery('(max-width:767.98px)');

  //  
    return (
        <div className="filter__body">
            <Swiper
                
                spaceBetween={18}
                slidesPerView={"auto"}
                speed={1000}
                >
                    {
                        data.map(({text} ) => {
                            return (
                                <SwiperSlide style={{"width": query ? "161.66px" : "249.33px"}} className="filter__trigger">
                                    {text}
                                </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
        </div>
    )
}

export default FilterList