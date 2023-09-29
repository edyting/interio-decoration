import two from '../../WebImages/image (9).png'
import three from '../../WebImages/image (8).png'
import one from '../../WebImages/image (10).png'

const Lastsection = () => {
    return ( 
        <div className=" w-screen">
            <div className="container w-full  mt-12">
                <div className="content-container md:w-[80%] px-4 mx-auto  flex flex-col md:flex-row md:h-[490px] md:mb-12 justify-between md:px-5 relative">
                    {/* left */}
                        <div className="left md:relative">

                                <div className="upper flex justify-start items-center md:space-x-10 space-x-4 mb-5 md:pt-10 pt-0">
                                <h2 className='text-xl uppercase'       >materials</h2>
                                <div className="md:w-[35rem] w-[75%]  md:space-x-0 h-[0.5px] left-20  bg-grayscale md:z-10 md:absolute">
                                </div>
                            </div>
                {/* text */}
                            <div className="text-header md:text-5xl text-3xl font-medium md:leading-[4rem] leading-10 md:mb-8 text-grayscale mb-4">
                                <h2>Choice of</h2>
                                <h2>materials for</h2>
                                <h2>quality furniture</h2>
                            </div>

                            {/* paragraph */}
                            <div className="paragraph md:text-lg text-semigray text-sm mb-4">
                                <p>You can choose the materials as desired. And our</p>
                                <p>furniture uses the best materials and selected quality</p>
                                <p>materials.</p>
                            </div>
                            {/* button */}
                            <div className="btn">
                                <button className="capitalize hover:scale-[1.05] hover:border-grayscale bg-white text-grayscale p-2 border-lightgray shadow border mb-4 ">
                                    see materials
                                </button>
                            </div>
                        </div>
                        {/* right */}
                        <div className="right hidden md:flex  md:relative w-[52%] ">
                            <div className="one w-[341px] h-[392px] md:absolute bottom-0">
                                <img src={one} alt="" />
                            </div>
                            <div className="two w-[241px] h-[225px] md:absolute right-0">
                                <img src={two} alt="" />
                            </div>
                            <div className="three w-[194px] h-[178px] md:absolute right-12 bottom-14">
                                <img src={three} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Lastsection;