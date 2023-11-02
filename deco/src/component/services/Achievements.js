import image1 from '../../WebImages/room2.jpg'
import image2 from '../../WebImages/twopeople.jpg'
import image3 from '../../WebImages/brainstorming.jpg'


const Achievements = () => {
    let cards=[{image:image1,title:'interior design',text:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{image:image2,title:'consultant',text:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{image:image3,title:'construction consultant',text:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'}]

    return ( 
    <div className=" md:w-[84%] md:mx-32 mx-4  mb-8">
        {/* top */}
        <div className="top flex items-center  space-x-8 mb-4">
                <h2 className='text-lg uppercase md:text-xl '>Service</h2>
                <div className="md:w-[45%] w-[70%] h-[0.5px] bg-grayscale">
                </div>
            </div>
        {/* body */}
        <div className=" w-full">
            {cards.map((card)=>(
                <div className="flex md:flex-row md:space-x-20 w-full items-center flex-col md:space-y-24" key={card.image}>
                    {/* image */}
                    <div className="image md:w-[120%] mt-12">
                        <img src={card.image} alt="images" className='md:w-full'/>
                    </div>
                    {/* text */}
                    <div className="">
                        {/* header */}
                        <div className="capitalize md:text-start text-center text-2xl font-medium text-grayscale pt-2">
                            <h2>{card.title}</h2>
                        </div>
                        {/* paragraph */}
                        <div className="">
                            <p>{card.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
     );
}
 
export default Achievements;