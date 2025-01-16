import logo from '../WebImages/logo1.png'
import { NavLink} from 'react-router-dom';
import menu from '../WebImages/image (6).png'
import close from '../WebImages/icon-close.svg'
import { useState } from 'react';
import Button from './Button';

const Navbarnew = () => {
       let links = [
        {to: '/',name:"Home",id:1},
        {to: '/about',name:"about us",id:2},
        {to: '/services',name:"services",id:3},
        {to: '/ourteams',name:"our teams",id:4},
       ];

       let [show,Setshow]=useState(false)

    return (
<div className="mb-40 mt-0">
            {/* header-container  */}
        <div className="w-full fixed top-0 bg-white left-0 z-30  ">
            {/* nav-items container */}
        <div className="md:flex w-[85%] items-center justify-between mx-auto bg-white py-5">
            {/* logo */}
            <div className="w-28">
                <img src={logo} alt="" className='w-full' />
            </div>

            {/* mobile menu icon */}

            <div className="w-8 absolute right-8 top-9 cursor-pointer md:hidden" onClick={()=>{Setshow
                (!show)}}>
                <img src={show?close:menu} alt="" className='w-[90%]' />
            </div>

            {/* link items */}
            <ul className={`md:flex items-center capitalize text-xl md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${show? 'top-24':'top-[-460px]'} md:opacity-100 opacity-95`}>
                {links.map(link=>( 
                <li key={link.id} className='md:ml-8 active:text-semigray active:underline md:my-0 my-4' onClick={()=>{Setshow
                    (!show)}}> 
                    <NavLink exact to={link.to} className="navlinks   underline-offset-4 text-grayscale hover:text-semigray" > {link.name}</NavLink> 
                </li>))}
                <Button >
                    <NavLink onClick={()=>{Setshow
                (!show)}} to='/contact'> Contact Us </NavLink>
                 </Button>
            </ul>
        </div>
            
        </div>
</div>
     );
}
 
export default Navbarnew;