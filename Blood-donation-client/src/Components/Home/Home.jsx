import Banner from "./Banner";
import ContactUs from "./ContactUs";
import img1 from '../../assets/Screenshot 2024-07-25 104603.png'
import img2 from '../../assets/Screenshot 2024-07-25 104615.png'
import img3 from '../../assets/Screenshot 2024-07-25 104629.png'
import img4 from '../../assets/Screenshot 2024-07-25 104643.png'
import img5 from '../../assets/Screenshot 2024-07-25 141725.png'
import img6 from '../../assets/Screenshot 2024-07-25 141736.png'
import img7 from '../../assets/Screenshot 2024-07-25 141747.png'
import img8 from '../../assets/Screenshot 2024-07-25 141758.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Blog from "../Blog/Blog";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 

          {/* donation process */}

         <section>

          <div className="text-center py-5 mt-10">
            <h1 className="text-4xl font-semibold mb-4">DONATION PROCESS</h1>
            <p className="text-lg  mb-4">The donation process from the time you arrive center until the time you leave</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 md:mx-20">

          <div className="card card-compact rounded-sm  bg-[#ffffff] shadow-2xl">
        <div className="flex flex-col gap-3">
            <div className='w-full border rounded-lg'>
            <img className=' w-full rounded-sm' src={img1} alt="" />
            </div>
            
           
            <h2 className='text-2xl font-bold primary-font px-5'>REGISTRATION</h2>
            <p className=" px-5 mb-5">You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
            
        </div>
    </div>


    <div className="card card-compact  rounded-sm  bg-[#ffffff] shadow-xl ">
        <div className="flex flex-col gap-3">
            <div className='w-full border rounded-lg'>
            <img className='w-full mx-auto rounded-sm' src={img2} alt="" />
            </div>
            
           
            <h2 className='text-2xl font-bold primary-font px-5'>SCREENING</h2>
            <p  className=" px-5 mb-5">A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
            
        </div>
    </div>


    <div className="card card-compact rounded-sm  bg-[#ffffff] shadow-xl">
        <div className="flex flex-col gap-3">
            <div className='w-full border rounded-lg'>
            <img className=' w-full mx-auto rounded-sm' src={img3} alt="" />
            </div>
            
           
            <h2 className='text-2xl font-bold primary-font px-5'>DONATION</h2>
            <p  className=" px-5 mb-5">After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
            
        </div>
    </div>


    <div className="card card-compact rounded-sm  bg-[#ffffff] shadow-xl">
        <div className="flex flex-col gap-3">
            <div className='w-full border rounded-lg'>
            <img className='w-full mx-auto rounded-sm' src={img4} alt="" />
            </div>
            
           
            <h2 className='text-2xl font-bold primary-font px-5'>REFRESHMENT</h2>
            <p  className=" px-5 mb-5">You can also stay in sitting room until you feel strong enough to leave our center. You will receive awesome drink from us in donation zone.</p>
            
        </div>
    </div>


          </div>


         </section>



        {/* count section */}


        <section className='w-full bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/BVJ3qNv/Fb0d78a-Xg-Acvqy2.jpg")] mt-20'>

        <div className="bg-[#020202aa] w-full h-full py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-0 md:mx-32 my-14 ">
        
        <div className="bg-white py-8 flex flex-col justify-center items-center gap-5">
        <img className=' mx-auto rounded-sm h-20 w-28' src={img5} alt="" />
        <h1 className="text-5xl font-semibold text-orange-600">2578</h1>
        <p className="text-xl font-semibold ">SUCCESS SMILE</p>
        </div>

        <div className="bg-white py-8 flex flex-col justify-center items-center gap-5">
        <img className='mx-auto rounded-sm h-20 w-28' src={img6} alt="" />
        <h1  className="text-5xl font-semibold text-orange-600">3235</h1>
        <p className="text-xl font-semibold ">HAPPY DONORS</p>
        </div>

        <div className="bg-white py-8 flex flex-col justify-center items-center gap-5">
        <img className='mx-auto rounded-sm h-20 w-28' src={img7} alt="" />
        <h1  className="text-5xl font-semibold text-orange-600">3568</h1>
        <p className="text-xl font-semibold ">HAPPY RECIPIENT</p>
        </div>

        <div className="bg-white py-8 flex flex-col justify-center items-center gap-5">
        <img className='mx-auto rounded-sm h-20 w-28' src={img8} alt="" />
        <h1  className="text-5xl font-semibold text-orange-600">1364</h1>
        <p  className="text-xl font-semibold ">TOTAL AWARDS</p>
        </div>

        </div>
        </div>
        </section>



           <div className='gadgetContainer px-2 md:px-10 py-24 mt-20 bg-cover bg-center bg-no-repeat bg-[url("https://i.ibb.co/FzdP4Ch/v0X2kM8.jpg")] rounded-lg'>
          {/* header */}
          <div className="text-center md:text-left  w-full">
            <p className="font-semibold text-[#e36619] mb-3 text-center text-3xl">
              <span className="bg-[#de7493] text-black mr-3 text-xl px-2 py-1 rounded-full">
              <i className='bx bxs-quote-single-left'></i>
              </span>
              Testimonial
            </p>
            <p className="text-[32px] lg:text-[40px] text-center font-semibold text-black">
              Users Feedback
            </p>
          </div>

          {/* Container */}
          <div className="text-gray-600 dark:text-gray-200 body-font">
  <div className="mx-20 md:mx-52 mt-8">


  <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-none"
      >
        <SwiperSlide className=''>
           
        <div className="h-full  bg-[#ededeef1] p-8 shadow-lg rounded text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I recently donate blood from the website, and I must say, I am thoroughly impressed with this fantastic service of yours. From your qualityful volunteer, it has exceeded my expectations in every way.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/TKYdH3g/girl1.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 ">Mrs X</span>
              
            </span>
          </a>
        </div>
            
        </SwiperSlide>
        
        <SwiperSlide >
           
        <div className="h-full bg-gray-100 dark:bg-[#e5e6e8d5] shadow-lg p-8 rounded  text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed  mb-6">I have donated my blood through many website, but I must say, I am thoroughly impressed with this fantastic service of yours.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 ">Mr. Y</span>
              
            </span>
          </a>
        </div>
            
        </SwiperSlide>
        
        <SwiperSlide className=''>
           
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] p-8 shadow-lg rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I recently donate blood from the website, and I must say, I am thoroughly impressed with this fantastic service of yours. From your qualityful volunteer, it has exceeded my expectations in every way.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/TKYdH3g/girl1.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mrs X</span>
              
            </span>
          </a>
        </div>
            
        </SwiperSlide>
        
        <SwiperSlide >
           
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed  mb-6">I have donated my blood through many website, but I must say, I am thoroughly impressed with this fantastic service of yours.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mr. Y</span>
              
            </span>
          </a>
        </div>
            
        </SwiperSlide>
        
      </Swiper>

    
  </div>
</div>
</div>
<ContactUs></ContactUs>
<Blog></Blog>


        </div>
    );
};

export default Home;