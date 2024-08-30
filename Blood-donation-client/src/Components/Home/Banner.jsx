import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='rounded-sm'>
           <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-none"
      >
        <SwiperSlide className='rounded-sm w-full h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/1r8LNfN/107317099-blooddonor976.jpg")]'>
           
            <div className='w-full gap-4 h-[60vh] md:h-[90vh] flex flex-col justify-center items-start pl-8 bg-[#02020298]'>
            
            <h1 className='  text-white font-medium tracking-[.12em] text-3xl'>Save Life! Give Blood!!!</h1>
            <h1 className='  text-white font-bold text-4xl mb-1 md:text-5xl space-y-6'>DONATE YOUR BLOOD AND</h1>
            <h1 className='  text-white font-bold text-4xl  md:text-5xl space-y-6'>INSPIRES TO OTHERS</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            <Link to="/register"><button className='btn bg-red-700 text-white border-none rounded-sm hover:bg-green-700 px-5 font-bold  text-2xl'>Join as a donor</button></Link>
            {/* <Link to="/search"><button className='btn btn-info px-8 text-xl'>Search Donors</button></Link> */}
            </div>

            </div>
        </SwiperSlide>
        
        <SwiperSlide className='rounded-sm w-full h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/7WqKtBG/Screenshot-2024-07-25-115844.png")]'>
           
            <div className='w-full gap-4 h-[60vh] md:h-[90vh] flex flex-col justify-center items-start pl-8 bg-[#02020299]'>
            
            <h1 className='  text-white font-medium tracking-[.12em] text-3xl'>Save Life! Give Blood!!!</h1>
            <h1 className='  text-white font-bold text-4xl mb-1 md:text-5xl'>YOUR DONATION CAN BRING</h1>
            <h1 className='  text-white font-bold text-4xl  md:text-5xl'>SMILE AT OTHERS FACE</h1>
            <div className='flex flex-col gap-3 md:flex-row'>
            {/* <Link to="/register"><button className='btn bg-red-700 text-white border-none rounded-sm hover:bg-green-700 px-5 font-bold  text-2xl'>Join as a donor</button></Link> */}
            <Link to="/search"><button className='btn bg-red-700 text-white border-none rounded-sm hover:bg-green-700 px-5 font-bold  text-2xl'>Search Donors</button></Link>
            </div>

            </div>
        </SwiperSlide>
        
        
      </Swiper>

      <div className='bg-slate-200 w-full flex flex-col lg:flex-row gap-10 justify-evenlyitems-center py-8 px-6'>
        <div className='w-full lg:w-2/3'>
          <h1 className='font-semibold text-3xl mb-3'>WE ARE HELPING PEOPLE FROM 50 YEARS</h1>
          <p className='text-slate-600 font-medium text-lg'>You can give blood at any of our blood donation venues all over the world. We have total sixty thousands donor centers and visit thousands of other venues on various occasions.</p>

        </div>
        <div className='w-full lg:w-1/3 flex items-center justify-center'>
        <Link to="/search"><button className='btn bg-red-700 text-white rounded-sm hover:bg-none hover:border-red-700 hover:border-2 hover:text-red-700 px-5 font-medium  text-2xl uppercase'>Search Donors</button></Link>
        </div>
      </div>



        </div>
    );
};

export default Banner;