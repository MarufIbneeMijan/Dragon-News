import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const MarqueeSection = () => {
    return (
        <div className="mt-6">
            <div className='w-3/4 mx-auto flex items-center py-2 bg-gray-400 space-x-3 ' >
                <p className='bg-red-600 px-4 py-2 text-base-300'> Latest</p>
             <Marquee pauseOnHover="true" speed={100} >
                <Link to={"news"} >Lorem ipsum dolor sit amet.</Link>
                <Link to={"news"} >Lorem ipsum dolor sit amet.</Link>
                <Link to={"news"} >Lorem ipsum dolor sit amet.</Link>
             </Marquee>
                
            </div>
        </div>
    );
};

export default MarqueeSection;