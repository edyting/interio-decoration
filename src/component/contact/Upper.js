import image from '../../WebImages/hands.jpg'
import Button from '../Button'


const Upper = () => {
    return ( 
        <div className="">
            <div className="container w-[80%] mx-auto text-center mb-12 ">
                {/* header */}
                 <div className="title pb-5">
                    <h1 className="md:text-6xl text-3xl font-bold">Contact Us</h1>
                 </div>
                 {/* paragraph */}
                 <div className="text md:text-xl hidden md:flex flex-col text-grayscale mb-5">
                    <p className="">It is a long established fact that a reader will be distracted by</p>
                    <p>the readable content of a page when looking at its layout</p>
                 </div>
                 {/* mobile */}
                 <div className="text md:text-xl text-md md:hidden text-grayscale mb-5">
                    <p className="">It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout</p>
                 </div>
                 {/* Form */}
                 <div className="form-container pt-6 md:w-[60%] mx-auto">
                  <div className="form">
                     <form className='' >
                        {/* name */}
                        <div className="top md:flex mb-4 justify-between">
                           {/* first */}
                           <div className="first flex  flex-col items-start md:w-[49%]  ">
                              <label htmlFor="">First Name</label>
                              <input type="text" placeholder='First Name' className='border-[1.5px] rounded-sm w-[100%] mt-2 mb-2 md:mb-0 px-4 py-2' />
                           </div>
                           {/* second */}
                           <div className="second  flex flex-col items-start md:w-[49%]">
                              <label htmlFor="">Last Name</label>
                              <input type="text" placeholder='Last Name' className='w-[100%] px-4 py-2 border-[1.5px] mt-2 rounded-sm ' />
                           </div>
                        </div>
                        {/* email */}
                        <div className="email w-full flex flex-col items-start mb-4">
                           <label htmlFor="">Email</label>
                           <input type="text" className='w-full px-4 py-2 border-[1.5px] mt-2 rounded-md' placeholder='Email ' />
                        </div>
                        {/* number */}
                        <div className="number flex w-full flex-col items-start mb-4">
                           <label htmlFor="">Phone Number</label>
                           {/* input area */}
                           <div className="input-area w-full">
                              <select name="" className='bg-white py-[9.7px]  pl-2 md:w-[8%] w-[15%] rounded-l-sm border-[1.5px] border-r-[0px] mt-2' id="">
                                 <option value="">US</option>
                                 <option value="">GH</option>
                                 <option value="">UK</option>
                                 <option value="">other</option>
                              </select>
                              <input type="text" placeholder='Phone Number' className='px-4 py-2 mt-2 w-[85%] md:w-[92%] rounded-r-sm border-l-[0px] border-[1.5px]' />
                           </div>
                        </div>
                        {/* message */}
                        <div className="flex flex-col items-start">
                           <label htmlFor="">Message</label>
                           <textarea name="" id="" cols="30" rows="4" className='rounded-sm border-[1.5px] px-4 py-2 w-full mt-2' placeholder='Message'></textarea>
                        </div>
                        {/* button */}
                        <div className="btn pt-6">
                        <Button>
                           Send Message
                        </Button>
                        </div>
                     </form>
                  </div>
                 </div>
                 
            </div>
        </div>
     );
}
 
export default Upper;