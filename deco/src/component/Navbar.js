import logo from '../WebImages/logo1.png'
import { Link } from 'react-router-dom';
import menu from '../WebImages/image (6).png'
import close from '../WebImages/icon-close.svg'
import { useState } from 'react';

const Navbar = () => {
        let [drop,setDrop]=useState(false);
        let handleClick=()=>{
            setDrop((drop=>!drop))
        }

        let image= !drop?menu:close;
        let display=(image === close) ?'hide':'show';

    return ( 
        <div className="">
            <nav className="md:w-full  md:h-[8rem] relative md:px-24 md:static">
                <div className="container flex justify-between items-center relative md:static">
                    {/* logo */}
                    <div className="logo w-[10rem]">
                        <img src={logo} alt="" />
                    </div>
                    {/* link items */}
                    <div className="links md:flex md:justify-between  md:items-center md:static absolute right-0 top-12 md:space-x-5 md:w-[40rem] ">

                    <div className="relative mb-8">
                    <div className="btn md:hidden absolute right-10"><img src={image} alt="" onClick={handleClick} className='' /></div>
                    </div>


                        <div className={`link-items md:flex mr-5 md:mr-0  w-[10rem] md:w-auto bg-white md:bg-transparent shadow md:shadow-none space-y-3 md:space-y-0 md:static md:justify-between md:items-center md:space-x-6 text-xl z-10 ${display}      md:opacity-100 block`}>
                           
                            <div className="capitalize text-grayscale md:text-xl ">
                            <Link className='focus:text-black hover:text-black ' to='/'>Home</Link>
                            </div>
                            <div className="capitalize text-grayscale md:text-xl">
                            <Link className='focus:text-black hover:text-black ' to='/About'>About us</Link>
                            </div>
                            <div className="capitalize text-grayscale md:text-xl">
                            <Link className='focus:text-black hover:text-black ' to='/Services'>services</Link>
                            </div>
                            <div className="capitalize text-grayscale md:text-xl">
                            <Link className='focus:text-black hover:text-black ' to='/Ourteams'>our teams</Link>
                            </div>
                            <div className="capitalize text-grayscale md:text-xl block md:hidden ">
                            <Link className='focus:text-black hover:text-black ' to='/Contact'>contact us</Link>
                            </div>
                        </div>
                        <div className="capitalize bg-primaryblue p-2 text-white w-[6rem] hidden md:inline-block">
                            <Link to='/Contact'>contact us</Link>
                            </div>
                            
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;