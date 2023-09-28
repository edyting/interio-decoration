import two from '../../WebImages/image (9).png'
import three from '../../WebImages/image (8).png'
import one from '../../WebImages/image (10).png'

const Lastsection = () => {
    return ( 
        <div className=" w-screen">
            <div className="container w-full  mt-12">
                <div className="content-container w-[80%] mx-auto  flex h-[490px] mb-12 justify-between px-5 relative">
                    {/* left */}
                        <div className="left relative">

                                <div className="upper flex justify-start items-center space-x-10 mb-5 pt-10">
                                <h2 className='text-xl uppercase'       >materials</h2>
                                <div className="w-[35rem] h-[0.5px] left-20  bg-grayscale z-10 absolute">
                                </div>
                            </div>
                {/* text */}
                            <div className="text-header md:text-5xl font-medium leading-loose mb-8 text-grayscale">
                                <h2>Choice of</h2>
                                <h2>materials for</h2>
                                <h2>quality furniture</h2>
                            </div>

                            {/* paragraph */}
                            <div className="paragraph text-lg text-semigray mb-4">
                                <p>You can choose the materials as desired. And our</p>
                                <p>furniture uses the best materials and selected quality</p>
                                <p>materials.</p>
                            </div>
                            {/* button */}
                            <div className="btn">
                                <button className="capitalize hover:scale-[1.05] hover:border-grayscale bg-white text-grayscale p-2 border-lightgray shadow border">
                                    see materials
                                </button>
                            </div>
                        </div>
                        {/* right */}
                        <div className="right  relative w-[52%] ">
                            <div className="one w-[341px] h-[392px] md:absolute bottom-0">
                                <img src={one} alt="" />
                            </div>
                            <div className="two w-[241px] h-[225px] absolute right-0">
                                <img src={two} alt="" />
                            </div>
                            <div className="three w-[194px] h-[178px] absolute right-12 bottom-14">
                                <img src={three} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Lastsection;