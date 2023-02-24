// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";
// import styles from '../style'
// import { clients } from '../constants'

// const Clients = () => {
//     return (
//         <section className={`flex flex-wrap py-4 gap-4 ${styles.paddingX} ${styles.flexCenter} bg-primary`}>
//             {
//                 clients.map((client, index) => (
//                     <div className="card py-2 px-8  border-slate-500 rounded-lg feature-card cursor-pointer" key={index}>
//                         <img
//                             src={client.logo}
//                             alt="logo"
//                             className='h-[80px] w-full' />
//                     </div>
//                 ))
//             }
//         </section>
//     )
// }

// export default Clients


import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { clients } from '../constants';
import { EffectCoverflow, Pagination } from "swiper";
import styles from '../style';


const Clients = () => {
    return (
        <section className={`py-4 ${styles.paddingX} ${styles.flexCenter} bg-primary`}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,

                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper" >
                {
                    clients.map((client, index) => (
                        <SwiperSlide className="card py-2 px-8  border-slate-500 rounded-lg feature-card cursor-pointer" key={index}>
                            <img
                                src={client.logo}
                                alt="logo"
                                className='h-[80px]' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Clients