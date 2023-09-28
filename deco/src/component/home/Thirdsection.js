import arrow from '../../WebImages/image (7).png'

import room from '../../WebImages/roomwithredchair.jpg'

const Thirdsection = () => {
    return (  <div className=" w-screen px-28 h-[50rem] my-12">
        <div className="container bg-white w-[80
            %] h-full relative">
            {/* text */}
            <div className="top md:w-[883px] md:h-[467px] md:absolute md:top-0 left-0 z-10 ">
           {/* title */}
            <div className="upper flex justify-start items-center space-x-10 mb-5">
                    <h2 className='text-xl uppercase' >services</h2>
                    <div className="w-[45%] h-[0.5px] bg-grayscale">
                    </div>
                </div>
                {/* head */}
                <div className="w-full text-4xl my-10">
                    <h2>attractive furniture with the best quality.</h2>
                </div>
                {/* paragraph */}
                <div className="text-container">
                    <div className=" text-sm leading-6 text-grayscale tracking-[1px]">
                        <p>Customize your interior design into a dream place</p>
                        <p>with the best designers and quality furniture.We try</p>
                        <p>our best to fulfill your expectations.</p>
                    </div>
                </div>
                {/* links */}
                <div className="links w-full h-[15.5rem] bg-white">
                        {/* link-item */}
                        <div className="link-container flex justify-between py-10 text-xl capitalize items-center">
                           <div className="left w-[45%] flex space-x-32 items-center">
                                 <div className="num">
                                     <h2>01</h2>
                                </div>
                                <div className="text self-start">
                                    <h2>interior design</h2>
                                </div>
                        </div>

                        <div className="arrow  w-[25px]">
                        <img src={arrow} alt="" />
                        </div>
                    
                    </div>
                    {/* 2 */}
                    <div className="link-container flex justify-between  text-xl capitalize items-center">
                           <div className="left w-[45%] flex space-x-32 items-center">
                                 <div className="num">
                                     <h2>02</h2>
                                </div>
                                <div className="text self-start">
                                    <h2>consultant</h2>
                                </div>
                        </div>

                        <div className="arrow w-[25px]">
                            <img src={arrow} alt="" />
                        </div>
                    
                    </div>
                    {/* 3 */}
                    <div className="link-container flex justify-between py-10 text-xl capitalize items-center">
                           <div className="left w-[45%] flex space-x-32 items-center">
                                 <div className="num">
                                     <h2>03</h2>
                                </div>
                                <div className="text">
                                    <h2>construction consultant</h2>
                                </div>
                        </div>

                        <div className="arrow  w-[25px]">
                        <img src={arrow} alt="" />
                        </div>
                    
                    </div>
                </div>
            </div>
            {/* image */}
            <div className="img-container md:w-[1076px] md:h-[524.55px]  md:absolute md:right-0 md:bottom-0">
                <div className="img-container w-full h-full">
                    <img src={room} alt="" className='w-full h-full ' />
                </div>
            </div>
        </div>
    </div> );
}
 
export default Thirdsection;