import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="">
            <div className="footer">

                <div className="top w-screen h-36 bg-primaryblue px-36">

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
                        <button className='bg-white text-grayscale text-lg font-medium p-2'><Link to='/Contact'>Contact Us</Link></button>
                 
                    </div>
                        </div>
                     
                </div>
                </div>

                <div className="bottom">
                 
                </div>
            </div>
        </div>
     );
}
 
export default Footer;