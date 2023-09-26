import logo from '../WebImages/logo1.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="">
            <nav className='flex w-screen h-20 items-center justify-between px-28'>

                <div className="logo w-28  flex justify-center ">
                    <img src={logo} alt="" className=' w-full  '  />
                </div>

                    <div className="links w-2/5 flex justify-between items-center">
                        <div className="linksContainer space-x-5 text-lg text-grayscale">
                            <Link to='/'>Home</Link>
                            <Link to='/About'>About Us</Link>
                            <Link to='/Services'>Services</Link>
                            <Link to='/Ourteams'>OurTeams</Link>
                        </div>
                        <div className="button">
                            <button className='bg-primaryblue text-white text-lg font-medium p-3'><Link to='/Contact'>Contact Us</Link></button>
                        </div>
                    </div>

            </nav>
        </div>
     );
}
 
export default Navbar;