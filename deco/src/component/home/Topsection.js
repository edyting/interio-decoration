import img from '../../WebImages/kitchen.jpg'
const Topsection = () => {
    return ( 
        <div className="container w-screen px-28 relative my-12">
            {/* top */}
            <div className="top w-full relative ">
                <div className="line1 flex items-center justify-between">
                    <h2 className='leading-[5rem] text-6xl font-bold text-grayscale'>Design your</h2>
                    <div className='w-4/6 h-0.5 bg-grayscale'></div>
                </div>
                <div className="line2">
                    <h2 className=' text-grayscale leading-[5rem] text-6xl font-bold'>interior with high</h2>
                </div>
                <div className="line3">
                    <h2 className=' text-grayscale leading-[5rem] text-6xl font-bold'>quality</h2>
                </div>

                <div className="dropdown text-white bg-primaryblue w-40 absolute top-32 right-72 translate-y-1 flex flex-col items-center justify-center z-10 space-y-5 p-2">
                    <div className="one text-center ">
                        <h1 className='font-bold text-2xl mt-4'>350+</h1>
                        <p className=' text-md mb-4'>Project Completed</p>
                    </div>
                    <div className="two text-center">
                        <h1 className='font-bold text-2xl mt-4'>23+</h1>
                        <p className=' text-md mb-4'>Professional Teams</p>
                    </div>
                    <div className="three text-center">
                        <h1 className='font-bold text-2xl mt-4'>15+</h1>
                        <p className=' text-md mb-4'>Years Experience</p>
                    </div>
                </div>
                <div className="copyright absolute -right-12 rotate-270 bottom-10 text-sm ">
                    <p>2023</p>
                    <p>ALL RIGHT RESERVED</p>
                  </div>
            </div>
            
            {/* bottom */}
            <div className="bottom h-[500px] w-full bg-slate-200 relative mt-12">
                <img src={img} alt="" className='w-full h-full absolute ' />
            </div>
        </div>
     );
}
 
export default Topsection;