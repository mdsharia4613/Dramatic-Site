import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Navigation এবং Autoplay এর জন্য style import করা হলো

import 'swiper/css/autoplay';
import './Banner.css'



// প্রয়োজনীয় মডিউল: Pagination, Autoplay, Navigation
import { Pagination, Autoplay } from 'swiper/modules';

// --- আপনার ছবিগুলি ইম্পোর্ট করুন ---
import image1 from '../../assets/banner.jpg';
import image2 from '../../assets/banner2.jpg';
import image3 from '../../assets/movie.jpg';
import image4 from '../../assets/squad.webp';
import image5 from '../../assets/Wednesday.webp';

// ছবির অ্যারে
const sliderImages = [image1, image2, image3, image4, image5];
const Banner = () => {
    return (
        <>
            <div className=''>
                <Swiper
                    // ১. Autoplay সেটিংস
                    autoplay={{
                        delay: 2500, 
                        disableOnInteraction: false, 
                    }}

                    // ২. Pagination সেটিংস
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    loop={true}
                    slidesPerView={1}
                    // ৩. Navigation (Arrow buttons)
                    // navigation={true}

                   

                    // ৫. প্রয়োজনীয় মডিউল
                    modules={[Autoplay, Pagination, ]}
                    className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[100vh]"
                >
                    
                    {sliderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                // img ট্যাগটিকে স্লাইড কন্টেইনারের পুরো জায়গা জুড়ে ফেলার জন্য স্টাইল
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
};

export default Banner;