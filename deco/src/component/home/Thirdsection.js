import arrow from '../../WebImages/image (7).png'

import room from '../../WebImages/roomwithredchair.jpg'

import {gsap,Power3} from 'gsap'
import {useRef,useEffect} from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin';

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Thirdsection = () => {

    gsap.registerPlugin(ScrollTrigger);
    let imgrevealsec=CSSRulePlugin.getRule(".img-home:after");
    let tl=gsap.timeline();
    let headerline=useRef(null);
    let imageselfsec=useRef(null);
   
    let paragraphsec=useRef(null);

    let once =true;

    useEffect(()=>{
        if(once){
            once=false;
            tl.from(headerline.current,{
                y:'80px',
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:headerline.current,
                    start:'top 85%',
                    end:'top 50%',
                    scrub:1,
                }
            }).to(imgrevealsec,1,{width:'0%',ease:Power3.easeOut,
            scrollTrigger:{
                        trigger:headerline.current,
                        start:'top 50%',
                        scrub:1,
                    }
            }).from(imageselfsec.current,1,{
                scale:1.2,
                scrollTrigger:{
                    trigger:headerline.current,
                    start:'top 60%',
                    scrub:1,
                }
            }).from(paragraphsec.current,1.2,{scale:0.1,opacity:0.1,
                scrollTrigger:{
                    trigger:headerline.current,
                    start:'top 60%',
                    end:'top 35%',
                    scrub:1,
                }  })
        
                }
            },[]);


    return (  <div className=" w-screen md:px-28 px-4 md:h-[50rem] my-12">
        <div className="container bg-white w-[80
            %] h-full relative">
            {/* text */}
            <div className="top md:w-[883px] md:h-[467px] md:absolute md:top-0 left-0 z-10 ">
           {/* title */}
            <div className="upper flex justify-start items-center md:space-x-10 space-x-5 md:mb-5">
                    <h2 className='md:text-xl text-lg uppercase' >services</h2>
                    <div className="w-[55%] h-[0.5px] bg-grayscale">
                    </div>
                </div>
                {/* head */}
                <div className="w-full md:text-4xl text-3xl my-5 md:my-10">
                    <h2 ref={headerline}>Attractive furniture with the best quality.</h2>
                </div>
                {/* paragraph */}
                <div className="text-container">
                    <div className=" text-sm leading-6 text-grayscale md:tracking-[1px]" ref={paragraphsec}>
                        <p>Customize your interior design into a dream place</p>
                        <p>with the best designers and quality furniture.We try</p>
                        <p>our best to fulfill your expectations.</p>
                    </div>
                </div>
                {/* links */}
                <div className="links w-full h-[15.5rem] bg-white">
                        {/* link-item */}
                        <div className="link-container flex justify-between py-10 text-xl capitalize items-center ">
                           <div className="left md:w-[45%] flex md:space-x-32 space-x-10 items-center">
                                 <div className="num">
                                     <h2>01</h2>
                                </div>
                                <div className="text md:self-start">
                                    <h2>interior design</h2>
                                </div>
                        </div>

                        <div className="arrow  w-[25px]">
                        <img src={arrow} alt="" />
                        </div>
                    
                    </div>
                    {/* 2 */}
                    <div className="link-container flex justify-between  text-xl capitalize items-center">
                           <div className="left md:w-[45%] flex md:space-x-32 space-x-10 items-center">
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
                           <div className="left md:w-[45%] space-x-10 flex md:space-x-32 items-center">
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
               
                <div className="img-container w-full h-full img-home overflow-hidden relative">
                    <img ref={imageselfsec} src={room} alt="" className='w-full md:h-full h-[11rem] ' />
                </div>

            </div>
        </div>
    </div> );
}
 
export default Thirdsection;