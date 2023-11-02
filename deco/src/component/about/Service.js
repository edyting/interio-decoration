const Service = () => {
    let cards=[{image:'1',title:'high quality',text:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{image:'2',title:'professional designer',text:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{image:'3',title:'the best services',text:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'}]

    return ( 
        
       <div >
         <div className="md:w-[83%] md:mx-28 px-4 mb-12">
            {/* top */}
            <div className="top flex items-center space-x-8 mb-4">
                <h2 className='text-lg uppercase md:text-xl '>Service</h2>
                <div className="md:w-[45%] w-[70%] h-[0.5px] bg-grayscale">
                </div>
            </div>
            {/* title */}
            <div className=" mb-4">
                <h2 className="capitalize text-2xl md:text-4xl font-medium">why choose us</h2>
            </div>
            {/* text */}
            <div className="text text-md text-semigray md:w-[20.9%] mb-6">
                <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
            </div>
            {/* cards container */}
            <div className="c-container  flex justify-between md:flex-row flex-col md:w-[80%] md:mx-auto space-y-4 md:space-y-0">
                {cards.map((card)=>(
                    <div className="md:w-[30%] border-[1px] border-grayscale p-4 text-center rounded-lg" key={card.title}>
                        {/* top */}
                        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mx-auto">
                            {card.image}
                        </div>
                        {/* header */}
                        <div className="capitalize font-semibold text-xl pt-4 text-grayscale">
                            {card.title}
                        </div>
                        {/* text */}
                        <div className=" text-semigray">
                            {card.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
     );
}
 
export default Service;