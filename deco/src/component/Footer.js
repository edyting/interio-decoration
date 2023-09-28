import { Link } from "react-router-dom";

import facebook from '../WebImages/image (1).png'
import instagram from '../WebImages/image (2).png'
import tiktok from '../WebImages/image (3).png'
import youtube from '../WebImages/image (4).png'
import logo from '../WebImages/logo1.png'
import arrow from '../WebImages/image (5).png'

const Footer = () => {
    return ( 
        <div className="">
            <div className="footer">

                <div className="top w-screen h-36 bg-primaryblue md:px-36">

                    <div className="big-text text-white       flex  space-x-40 items-center    font-semibold">
                        <div className="text-region">
                            <div className="topper text-4xl">
                                 <h2>let's discuss making your interior</h2>
                            </div>
                             <div className="down text-4xl">
                                <h2>like a dream place</h2>
                            </div>
                       </div>

                        <div className="text-container">
                            <div className="container text-xl pt-2">
                            <h2>Contact us below to work together   to build your</h2>
                            <h2>amazing interior</h2>
                            </div>

                            <div className="button ">
                        <button className='bg-white hover:scale-[1.03] hover:bg-lightgray transition-ease text-grayscale text-lg font-medium p-2'><Link to='/Contact '>Contact Us</Link></button>
                 
                    </div>
                        </div>
                     
                </div>
                </div>
                    {/* bottom */}


                <div className="bottom w-screen pt-8 p-16">
                   <div className="container w-[80%] mx-auto flex justify-between h-[15rem]">
                    <div className="left">
                          <div className="logo w-48 mb-4">
                            <h2><img src={logo} alt="" /></h2>
                          </div>
                          <div className="text-2xl text-grayscale">
                            <h2>One of the best furniture</h2>
                            <h2>agency.</h2>
                          </div>
                    </div>
                    <div className="right relative">
                        <div className="top pt-12">
                            <label htmlFor="email" className="flex items-center space-x-1 mb-2 relative">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                                 <h2>Enter you email to get the latest news</h2>
                            </label>
                            <div className="arrow w-8 absolute right-0 text-lightgray mix-blend-multiply">
                                <img src={arrow} className="
                                " alt="" />
                            </div>
                            <input type="text" name="email" placeholder="Email Address " className="ml-4 border-b-2 pb-2 w-full" />
                        </div>
                        <div className="down absolute bottom-10 right-0">
                             <h2 className="text-mg text-grayscale capitalize"> follow us on</h2>
                             <div className="icons flex space-x-1">
                                    <img src={facebook} className="w-8 h-8 hover:scale-[1.3]" alt="" />
                                
                                    <img src={instagram} className="w-8 h-8 hover:scale-[1.3]" alt="" />

                                    <img src={tiktok} className="w-8 h-8 hover:scale-[1.3]" alt="" />

                                    <img src={youtube} className="w-8 h-8 hover:scale-[1.3]" alt="" />
                                
                             </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;