import {Link} from 'react-router-dom'
import image from '../../WebImages/dinning.jpg'
import me from '../../WebImages/me.jpg'

const Second = () => {
    return ( 
        <div className="container w-screen md:px-28 p-4 mb-12">
            <div className="top">

                <div className="upper flex justify-start items-center space-x-5 md:space-x-10 mb-5">
                    <h2 className='md:text-xl text-lg uppercase' >About</h2>
                    <div className="md:w-[45%] w-[70%] h-[0.5px] bg-grayscale">
                    </div>
                </div>

                <div className="uppertext w-full mb-2 ">
                        <h2 className='md:text-[2rem] text-lg text-grayscale tracking-[0.01rem]'>"We're one of the best furniture agency.Prioritizing customers and making purchases easy are the hallmarks of our agency."</h2>
                      </div>

            </div>

            <div className="bottom mt-5 flex flex-col md:flex-row relative w-full space-x-1">
                
                <div className="img md:w-4/5">
                    <img src={image} alt="" />
                </div>

                <div className="absolute  profile md:flex hidden items-center space-x-2 bg-white p-2 top-10 right-72 shadow  rounded">
                     <div className="img w-16 h-16 bg-slate-200 rounded-full ">
                        <img src={me} alt=""className='rounded-full shadow-2xl  mix-blend-darken text-center' />
                     </div>
                     <div className="text">
                        <h2 className='text-xl'>E.Y.T Dankyi</h2>
                        <p className='text-grayscale'>CEO OF EDYTING</p>
                     </div>
                </div>
                <div className="text md:self-center md:w-1/5">
                <p className='md:text-sm pt-5 md:pt-0 md:pr-16 leading-[1.2rem] text-grayscale'>
                Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                </p>
                <div className="btn text-white bg-primaryblue text-center p-2 w-2/5 mt-8 hover:scale-[1.06]">

                    <Link to='/About' className=''>
                    Learn More
                    </Link>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Second;