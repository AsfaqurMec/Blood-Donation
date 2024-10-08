import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo from '../../assets/logo.png'
import { LuMenuSquare } from "react-icons/lu";
import './Nav.css';
import { GiHamburgerMenu } from "react-icons/gi";



// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
 

  const handleLogOut = () => {
   logout()
       .then(() => { })
       .catch(error => console.log(error))
}

const [toggle, setToggle] = useState(false);

   const handleToggle = () => {
          setToggle(true);
   }
  
   const handleTogle = () => {
    setToggle(false);
}

    const navLinks = <>
       
                       <li  className="mr-3   rounded-md hover:scale-125 transition duration-300 hover-underline"><NavLink to="/requests" >Donation Requests</NavLink></li>
                       <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><NavLink to="/blog" >Blog</NavLink></li>

                       { user && <>
                      <li  className="mr-3  rounded-md hover:scale-125 transition duration-300 hover-underline"><NavLink to="/fundings" >Fundings</NavLink></li>
          
                        </>}
        
        
    </>
    
   return (
       <>
       <div className="navbar mb-2 shadow-sm bg-transparent shadow-green-200 px-1 md:px-5 lg:px-10">
               <div className="w-[50%] ">
                   {/* <div className="dropdown">
                       <label tabIndex={0} className="btn btn-ghost text-black p-1 md:hidden">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                       </label>
                       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-200 z-50 rounded-box w-52">
                       {navLinks}
                       
                       </ul>
                   </div> */}
<div className="flex justify-start gap-5">
<div className="drawer  md:hidden justify-start p-0">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn p-0 bg-transparent border-none text-slate-50 hover:bg-transparent text-2xl">
    {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>   */}
          {
            !toggle ? 
            <GiHamburgerMenu onClick={handleToggle} className='w-10 h-10 text-black' /> 
             :
             <h1 onClick={handleTogle} className="text-3xl ml-1 border-2 px-3 text-black">X</h1>
          }
             
    </label>
  </div>
  <div className="drawer-side z-50 mt-16">
  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className=" menu bg-[#fffefef0] border-4 border-red-200 text-base-content min-h-full w-80 p-10 z-50 space-y-5">
      {/* Sidebar content here */}
     
      <li  className="mr-3  rounded-md hover:scale-110 transition duration-300 text-xl border-2 border-black"><NavLink to="/requests" >Donation Requests</NavLink></li>
                       <li  className="mr-3 rounded-md hover:scale-110 transition duration-300 text-xl border-2 border-black"><NavLink to="/blog" >Blog</NavLink></li>

                       { user && <>
                      <li  className="mr-3  rounded-md hover:scale-110 transition duration-300 text-xl border-2 border-black"><NavLink to="/fundings" >Fundings</NavLink></li>
          
                        </>}
    </ul>
  </div>
</div>


                   <Link to='/' className="btn btn-ghost text-emerald-300 p-0 font-bold normal-case text-base md:text-xl lg:text-3xl" >
                      <img src={logo} className="h-12 w-14" alt="" /></Link>
                 </div>   
               </div>


               <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" className="navbar-center hidden md:flex">
                   <ul className="menu-horizontal px-1 text-xl font-normal flex gap-10">
                   {navLinks}
                   </ul>
               </div>



               <div className="navbar-end ">
               
                   {
                       user? <div className=" flex items-center justify-center gap-2">
                        <div className="dropdown block dropdown-end">
                               <div className="w-10  rounded-full dropdown dropdown-end">
                               <label tabIndex={0} className="btn btn-ghost text-black p-1">
                               <LuMenuSquare className="w-8 h-7"/>
                       </label> 
                               </div>
                           
                           <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-sky-100 rounded-box w-52'
           >
             
             <li className="hover:bg-green-300 rounded-md">
               <Link className="text-base font-semibold" to='/dashboard'>Dashboard</Link>
             </li>
             
            <li> <button onClick={handleLogOut}className="btn btn-sm bg-sky-400 hover:bg-blue-500 text-white  btn-ghost">Logout</button></li>
           </ul>
                           </div>
                        <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/8xzVgxd/pngtree-user-icon-png-image-1796659.jpg" } /> 
                           
                           </div>  
                           :
                           <div className="flex">
                           <Link to='/login'>
                               <button className="btn btn-sm bg-green-500 hover:bg-blue-500 text-white mr-2  btn-ghost">Login</button>
                           </Link>
                           
                       </div>
                   }
               </div>
           </div>
           
       </>
   );
};


export default Navbar;