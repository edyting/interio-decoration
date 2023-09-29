import arrow from '../../WebImages/image (7).png'

const Fourthsection = () => {
    return ( 
        <div className=" w-screen  mb-12">
            <div className="container md:w-[80%] px-4 md:px-0 mx-auto ">
                {/* top */}
                <div className="top">
                
                <div className="upper flex md:justify-start items-center space-x-5 md:space-x-10 mb-5">
                    <h2 className='text-xl uppercase' >product</h2>
                    <div className="md:w-[30%] w-[60%] h-[0.5px] bg-grayscale">
                 </div>
                </div>
                  {/* text region */}
                  <div className="header md:flex justify-between items-center">
                    {/* left */}
                    <div className="left md:text-5xl text-3xl font-medium md:pl-12 text-grayscale">
                        <h2>Choose your</h2>
                        <h2>product themes.</h2>
                    </div>
                    {/* right */}
                    <div className="right text-sm pt-5 md:pt-0 md:text-md text-semigray md:pr-16 ">
                        <p>Find the theme you want.if our choice of theme is</p>
                        <p>not what you want,you can customize it as you</p>
                        <p>want</p>
                    </div>
                 </div>
                </div>
                {/* lists */}
                <div className="lists  mb-12 w-full">
                    {/* list-item */}
                    <div className="list-container w-full p-2 mt-12 md:pr-16 hover:shadow">
                        <div className="top flex  justify-between">
                            <div className="left md:w-[35%] w-[75%] flex  justify-between space-x-7 md:space-x-0">
                                <h2 className="text-2xl">01</h2>
                                <div className="">
                                <h1 className="text-2xl capitalize mb-2">vintage</h1>
                                <div className="text-semigray text-sm md:text-md">
                            <p >The use of simple and limited elements to get </p> <p>the best effect or impression</p>
                        </div>
                                </div>
                            </div>
                           <div className="arrow md:w-24 w-8 ">
                             <h2 className="md:pr-16">
                                <img src={arrow} alt="" />
                             </h2>
                           </div>
                        </div>
                       
                    </div>  
                    {/* list-item-end */}

                    {/* list-item */}
                    <div className="list-container w-full p-2 mt-12 md:pr-16 hover:shadow">
                        <div className="top flex  justify-between">
                            <div className="left md:w-[35%] w-[75%] flex  justify-between space-x-7 md:space-x-0">
                                <h2 className="text-2xl">02</h2>
                                <div className="">
                                <h1 className="text-2xl capitalize mb-2">minimalist</h1>
                                <div className="text-semigray text-sm md:text-md">
                            <p >The use of simple and limited elements to get </p> <p>the best effect or impression</p>
                        </div>
                                </div>
                            </div>
                           <div className="arrow md:w-24 w-8">
                             <h2 className="md:pr-16">
                                <img src={arrow} alt="" />
                             </h2>
                           </div>
                        </div>
                       
                    </div>  
                    {/* list-item-end */}
                    {/* list-item */}
                    <div className="list-container w-full p-2 mt-12 md:pr-16 hover:shadow">
                        <div className="top flex  justify-between">
                            <div className="left md:w-[35%] w-[75%] flex  justify-between space-x-7 md:space-x-0">
                                <h2 className="text-2xl">03</h2>
                                <div className="">
                                <h1 className="text-2xl capitalize mb-2">modern</h1>
                                <div className="text-semigray text-sm md:text-md">
                            <p >The use of simple and limited elements to get </p> <p>the best effect or impression</p>
                        </div>
                                </div>
                            </div>
                           <div className="arrow md:w-24 w-8">
                             <h2 className="md:pr-16">
                                <img src={arrow} alt="" />
                             </h2>
                           </div>
                        </div>
                       
                    </div>  
                    {/* list-item-end */}

                    {/* list-item */}
                    <div className="list-container w-full md:p-2 md:mt-12 md:pr-16 hover:shadow">
                        <div className="top md:flex hidden justify-between">
                            <div className="left md:w-[35%] w-[75%] space-x-7 md:space-x-0 flex  justify-between">
                                <h2 className="text-2xl">04</h2>
                                <div className="">
                                <h1 className="text-2xl capitalize mb-2">transitional</h1>
                                <div className="text-semigray text-sm md:text-md">
                            <p >The use of simple and limited elements to get </p> <p>the best effect or impression</p>
                        </div>
                                </div>
                            </div>
                           <div className="arrow md:w-24 w-8">
                             <h2 className="md:pr-16">
                                <img src={arrow} alt="" />
                             </h2>
                           </div>
                        </div>
                       
                    </div>  
                    {/* list-item-end */}

                    {/* list-item */}
                    <div className="list-container md:w-full md:p-2 md:mt-12 md:pr-16 hover:shadow">
                        <div className="top md:flex hidden justify-between">
                            <div className="left md:w-[35%] w-[75%] space-x-7 md:space-x-0 flex  justify-between">
                                <h2 className="text-2xl">05</h2>
                                <div className="">
                                <h1 className="text-2xl capitalize mb-2">executive</h1>
                                <div className="text-semigray text-sm md:text-md">
                            <p >The use of simple and limited elements to get </p> <p>the best effect or impression</p>
                        </div>
                                </div>
                            </div>
                           <div className="arrow md:w-24 w-8">
                             <h2 className="md:pr-16">
                                <img src={arrow} alt="" />
                             </h2>
                           </div>
                        </div>
                       
                    </div>  
                    {/* list-item-end */}
                        
                </div>
            </div>
        </div>
     );
}
 
export default Fourthsection;