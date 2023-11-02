import image from '../../WebImages/groupatdesk.jpg'


const Upper = () => {
    return ( 
        <div className="">
            <div className="container w-[80%] mx-auto text-center mb-12 ">
                {/* header */}
                 <div className="title pb-5">
                    <h1 className="md:text-6xl text-3xl font-bold">About</h1>
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
                 {/* image */}
                 <div className="image w-full ">
                    <img className="w-full "src={image} alt="" />
                 </div>
            </div>
        </div>
     );
}
 
export default Upper;