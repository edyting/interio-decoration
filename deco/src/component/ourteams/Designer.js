import image1 from '../../WebImages/man2.png'
import image2 from '../../WebImages/boyy.png'
import image3 from '../../WebImages/lady.png'
import image4 from '../../WebImages/maninjacket.png'
import image5 from '../../WebImages/boyy.png'
import image6 from '../../WebImages/man.png'
import image7 from '../../WebImages/boyy.png'
import image8 from '../../WebImages/boy2.png'

const Designer = () => {
    let cards=[{image:image1,title:'Shoo Phar Dhie',id:1,text:'CEO'},
    {image:image2,title:'Shoo Phar Dhie',text:'CEO',id:2},
    {image:image3,title:'Shoo Phar Dhie',text:'CEO',id:3},
    {image:image4,title:'Shoo Phar Dhie',text:'CEO',id:4},
    {image:image5,title:'Shoo Phar Dhie',text:'CEO',id:5},
    {image:image6,title:'Shoo Phar Dhie',text:'CEO',id:6},
    {image:image7,title:'Shoo Phar Dhie',text:'CEO',id:7},
    {image:image8,title:'Shoo Phar Dhie',text:'CEO',id:8}]

    return ( 
        
       <div >
         <div className="md:w-[83%] md:mx-28 px-4 mb-12">
            {/* top */}
            <div className="top flex items-center space-x-8 mb-4">
                <h2 className='text-lg uppercase md:text-xl '>Designer</h2>
                <div className="md:w-[45%] w-[70%] h-[0.5px] bg-grayscale">
                </div>
            </div>
            {/* title */}
            <div className=" mb-4">
                <h2 className="capitalize text-2xl md:text-4xl font-medium">creative person</h2>
            </div>
            {/* text */}
            <div className="text text-md text-semigray md:w-[20.9%] mb-6">
                <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
            </div>

            {/* cards container */}
            <div className="c-container md:w-[90%] md:mx-auto grid md:grid-cols-4 md:grid-rows-2  row-span-1 gap-x-4 gap-4 col-span-auto md:p-4 grid-cols-2">
                {cards.map((card)=>(
                <div className="w-[100%] relative  bg-primaryblue p-4 ">
                    {/* inner */}
                    <div className=""> 
                    {/* image */}
                    <div className="w-full h-full">
                        <img src={card.image} alt="" className="w-[100%] h-full" />
                    </div>
                    {/* text-card */}
                    <div className=" w-[95%] md:h-[4rem] -mt-4 absolute z-10 bottom-2 md:left-2 left-1 text-center bg-white">
                        <h2 className='md:text-xl font-medium'>{card.title}</h2>
                        <p className='text-grayscale'>{card.text}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
       </div>
     );
}
 
export default Designer;