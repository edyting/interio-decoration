const Location = () => {
    let locations=[{title:'Jakarta',body:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{title:'Surakarta',body:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{title:'Yogyakarta',body:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},{title:'Bandung',body:'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'},]
    return ( 
        <div className="w-[80%] mx-auto mb-8">
             {/* top */}
        <div className="top flex items-center  space-x-8 mb-4">
                <h2 className='text-lg uppercase md:text-xl '>Location</h2>
                <div className="md:w-[45%] w-[70%] h-[0.5px] bg-grayscale">
                </div>
            </div>
            {/* down */}
            <div className="w-full flex md:flex-row flex-col">
                {/* first */}
                <div className="md:w-[40%] p-4 pt-8">

                {/* title */}
                <div className="">
                    <h2 className='capitalize text-4xl font-medium mb-4'>
                        visit our stores
                    </h2>
                    <p>
                        Find us at these locations.
                    </p>
                </div>

                {/* email */}
                <div className="">
                    <h2 className='capitalize text-2xl font-medium mb-4 mt-4'>Email</h2>
                    <p>edyting@gmail.com</p>
                </div>

                {/* phone */}
                <div className="">
                    <h2 className='capitalize text-2xl font-medium mb-4 mt-4'>Phone</h2>
                    <p>+233 558 012 190</p>
                </div>

                </div>
                {/* second */}
                <div className="md:w-[60%] ">
                    {/* card */}
                    <div className="grid md:grid-cols-2 md:grid-rows-2  md:space-y-4 md:space-x-4 md:p-4">
                        {locations.map((location)=>(
                            <div className=" p-4" key={location.title}>
                                <h2 className='text-xl py-2 font-medium'>{location.title}</h2>
                                <p>{location.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Location;