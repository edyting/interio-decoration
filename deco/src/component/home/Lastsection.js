import two from '../../WebImages/image (9).png'
import three from '../../WebImages/image (8).png'
import one from '../../WebImages/image (10).png'

import {gsap,Power3} from 'gsap'
import {useRef,useEffect} from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin';

import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Lastsection = () => {
    gsap.registerPlugin(ScrollTrigger);
    let tl=gsap.timeline();
    let headerlinemain=useRef(null);
    let header=useRef(null);
    let headermain=useRef(null);

    let imageone=useRef(null);
    let imagetwo=useRef(null);
    let imagethree=useRef(null);

    let imageonecase=useRef(null);
    let imagetwocase=useRef(null);
    let imagethreecase=useRef(null);
   
    let para=useRef(null);

    let once =true;

    useEffect(()=>{
        if(once){
            once=false;
            tl.from(headerlinemain.current,{
                y:'80px',
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 80%',
                    end:'top 50%',
                    scrub:1,
                }
            }).from(header.current,{
                x:'80px',
                opacity:0,
                duration:1,
                
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 85%',
                    end:'top 50%',
                    scrub:1,
                }
            }).from(headermain.current,{
                x:'-80px',
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 85%',
                    end:'top 50%',
                    scrub:1,
                }
            }).from(imageone.current,1,{
                scale:1.2,
                y:'100px',
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 60%',
                    scrub:1,
                }
            }).from(imagetwo.current,1,{
                scale:1.2,
                y:'100px',
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 60%',
                    scrub:1,
                }
            }).from(imagethree.current,1,{
                scale:1.2,
                y:'100px',
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 60%',
                    scrub:1,
                }
            }).from(para.current,1.2,{scale:0.1,opacity:0.1,
                scrollTrigger:{
                    trigger:headerlinemain.current,
                    start:'top 60%',
                    end:'top 35%',
                    scrub:1,
                } })
                .from(imageonecase.current,1,{
                    
                    y:'600px',
                    scrollTrigger:{
                        trigger:headerlinemain.current,
                        start:'top 70%',
                        end:'top 40%',
                        scrub:1,
                    }
                })
                .from(imagetwocase.current,1,{
                    
                    y:'-450px',
                    scrollTrigger:{
                        trigger:headerlinemain.current,
                        start:'top 70%',
                        end:'top 40%',
                        scrub:1,
                    }
                }).from(imagethreecase.current,1,{
                    
                    x:'600px',
                    scrollTrigger:{
                        trigger:headerlinemain.current,
                        start:'top 70%',
                        end:'top 40%',
                        scrub:1,
                    }
                })
        
                }
            },[]);



    return ( 
        <div className=" w-screen overflow-hidden">
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
                                <h2 ref={headerlinemain}>Choice of</h2>
                                <h2 ref={header}>materials for</h2>
                                <h2 ref={headermain}>quality furniture</h2>
                            </div>

                            {/* paragraph */}
                            <div className="paragraph md:text-lg text-semigray text-sm mb-4" ref={para}>
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
                            <div className="one w-[341px] h-[392px] md:absolute bottom-0 overflow-hidden" ref={imageonecase} >
                                <img ref={imageone} src={one} alt="" />
                            </div>
                            <div className="two w-[241px] h-[225px] md:absolute right-0 overflow-hidden" ref={imagetwocase}>
                                <img ref={imagetwo} src={two} alt="" />
                            </div>
                            <div className="three w-[194px] h-[178px] md:absolute right-12 bottom-14 overflow-hidden" ref={imagethreecase}>
                                <img ref={imagethree} src={three} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Lastsection;