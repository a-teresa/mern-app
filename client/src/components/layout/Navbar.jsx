import {react} from "react"
import { HiLogout } from "react-icons/hi";
import { PiSignInBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  
  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content px-10"> 
    <div className="container mx-auto ">
    <div className="flex-none px-2 mx-2 hidden lg:block md:block md:flex-row md:px-0">
    <img src={logo} style={{ width: '50px', height: '45px' } } className='inline pr-2 text-3xl'/>
    <Link to='/' className='text-lg font-bold align-middle text-black'>
            FarmShop
      </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end ">
      <Link to='/sign-in' className='btn btn-ghost btn-sm rounded-btn text-black'>
         <PiSignInBold className='inline pr-2 text-3xl'/>
      </Link>
      <Link to='/' className='btn btn-ghost btn-sm rounded-btn text-black'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </Link>
      <Link className='btn btn-ghost btn-sm rounded-btn text-black' >
            <FaShoppingCart className='inline pr-2 text-3xl'/>
      </Link>
      <Link className='btn btn-ghost btn-sm rounded-btn text-black' >
            <HiLogout className='inline pr-2 text-3xl'/>
      </Link>
          </div>
          </div>
          </div> 
      </nav>
  )
}


export default Navbar