import image1 from '../../WebImages/man2.jpg'
import image2 from '../../WebImages/boy.jpg'
import image3 from '../../WebImages/lady.jpg'
import image4 from '../../WebImages/maninjacket.jpg'
import image5 from '../../WebImages/boy.jpg'
import image6 from '../../WebImages/man.jpg'
import image7 from '../../WebImages/boy.jpg'
import image8 from '../../WebImages/boy2.jpg'

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
            <div className="c-container grid md:grid-cols-4 md:grid-rows-2 space-y-4 row-span-1 col-span-auto space-x-4 ">
                {cards.map((card)=>(
                    <div className="bg-primaryblue   text-center  rounded-lg" key={card.id}>
                        {/* top */}
                        <div className="w-full h-full mix-blen-difference flex items-center justify-center mx-auto">
                            <img className='' src={card.image} alt="" />
                        </div>
                       <div className="bg-white">
                         {/* header */}
                         <div className="capitalize font-semibold text-xl pt-4 text-grayscale">
                            {card.title}
                        </div>
                        {/* text */}
                        <div className=" text-semigray">
                            {card.text}
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