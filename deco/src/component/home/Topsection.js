import img from '../../WebImages/kitchen.jpg'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {useRef,useEffect} from 'react'
// import { TweenMax } from 'gsap/gsap-core'

const Topsection = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    let drop =useRef(null);
    let container =useRef(null);
    let image =useRef(null);
    let tl =gsap.timeline();
    let once =true;


    useEffect(()=>{
      if(once){
        once=false;
        tl.from(drop.current,{
            y:'-100px',
            opacity:0,
            duration:0.7,
            scrollTrigger:{
                trigger:container.current,
                start:'top 100px',
                scrub:1,
            }
        }).from(image.current,1.2,{scale:1.1,
            scrollTrigger:{
                trigger:drop.current,
                start:'center 40%',
                end:'top 15%',
                scrub:1.5,
            }
        })
      }
    },[])


    return ( 
        <div className="container w-screen px-4 md:px-28 relative my-12" >
            {/* top */}
            <div className="top w-full md:relative ">
                <div className="line1 flex items-center justify-between" ref={container}>
                    <h2 className='md:leading-[5rem] md:text-6xl text-[2rem] font-bold text-grayscale'>Design your</h2>
                    <div className='md:w-4/6 w-3/6 h-0.5 bg-grayscale'></div>
                </div>
                <div className="line2">
                    <h2 className=' text-grayscale md:leading-[5rem] md:text-6xl font-bold text-[2rem]'>interior with high</h2>
                </div>
                <div className="line3">
                    <h2 className=' text-grayscale md:leading-[5rem] md:text-6xl font-bold text-[2rem]'>quality</h2>
                </div>

                <div className="dropdown text-white bg-primaryblue w-40 hidden absolute top-32 right-72 translate-y-1 md:flex flex-col items-center justify-center z-10 space-y-5 p-2  " ref={drop}>
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
                <div className="copyright hidden md:absolute -right-12 md:rotate-270 bottom-10 text-sm ">
                    <p>2023</p>
                    <p>ALL RIGHT RESERVED</p>
                  </div>
            </div>
            
            {/* bottom */}
            <div className="bottom md:h-[500px] h-[15rem] w-full bg-slate-200 relative mt-12 overflow-hidden">
                <img src={img} alt="" ref={image} className='w-full h-full absolute ' />
            </div>
        </div>
     );
}
 
export default Topsection;