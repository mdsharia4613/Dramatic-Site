
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import MovieData from '../../../public/Movies.json';
import MovieCard from '../MovieCard/MovieCard.jsx';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';


const TopRatingMovies = () => {
    const topRating = MovieData.filter(movie => movie.rating > 7);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const prevref = useRef(null);
    const nextref = useRef(null);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevref.current; // <-- prevref
            swiperInstance.params.navigation.nextEl = nextref.current; // <-- nextref
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <>
            
            <div className="py-5 px-10 md:py-10 md:px-20 container mx-auto relative">
                <h2 className="text-2xl text-center md:text-left font-semibold mb-6">⭐ Top Rated Movies</h2>
                {/* custom navigation */}
                <button ref={prevref} className='custom-prv cursor-pointer left-8 md:left-10 absolute bg-black/40 translate-y-52 rounded-full p-2 flex justify-center items-center'><MdOutlineKeyboardArrowLeft fontSize={28}/>
</button>
                <button ref={nextref} className='custom-next cursor-pointer right-11 md:right-16 absolute bg-black/40 translate-y-52 rounded-full p-2 flex justify-center items-center'><MdKeyboardArrowRight fontSize={28}/>
</button>
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    spaceBetween={25} 
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    pagination={{ clickable: true }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevref.current;
                        swiper.params.navigation.nextEl = nextref.current;
                    }}
                    modules={[Autoplay,  Navigation]}
                    className="mySwiper"
                >
                    {topRating.map(movie => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        
            
        </>
    );
};

export default TopRatingMovies;
