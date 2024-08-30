
import img from '../../assets/blood-donation-concept-vector-27379257.jpg'


const ContactUs = () => {
   
const handleSubmit = () => {
    console.log('jdwjh');
}

    return (
        <div className='hero h-full  rounded-lg md:mb-14 bg-[#ffffff] my-5 p-5'>
        <div className="hero-content w-full p-0 flex-col lg:flex-row">
        <div className=' w-full lg:w-1/2  rounded-lg '>
            {/* <h1 className="text-5xl font-bold text-white pb-2">Contact Us!</h1>
            <p className="text-left text-white font-semibold">01956230265</p>
            <p className="text-white font-semibold">asfaqurrahman055@gmail.com</p> */}
           <img src={img} alt="" />
          </div>
          <form  
             onSubmit={handleSubmit} className='w-full lg:w-1/2 space-y-6 bg-[#e8a0a0a5] p-8 rounded-md'
          >
            <div className='space-y-4'>
              <div className='bg-red-600 h-16'>
                <h1 className='text-white text-3xl  font-semibold text-center h-full flex justify-center items-center'>CONTACT US</h1>
              </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-white text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <label htmlFor='massage' className='block mb-2 text-sm'>
                Your massage
              </label>
              {/* lg */}
<textarea placeholder="your massage" className="textarea bg-white textarea-bordered textarea-lg w-full " ></textarea>
            </div>
<div className='w-full flex justify-center'><button className='btn bg-red-700 text-white rounded-sm hover:bg-none hover:border-red-700 hover:border-2 hover:text-red-700 px-5 font-medium  text-2xl uppercase'>SEND MASSAGE</button></div>
            </div> 
          </form>
          
        </div>
      </div>
    );
};

export default ContactUs;