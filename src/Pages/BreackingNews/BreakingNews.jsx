
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} >
 <Link className="mr-4  text-red-700 font-bold" to='/'> The diminishing funds allocated for the Rohingya crisis are placing an immense.</Link>
 <Link className="mr-4  text-red-700 font-bold" to='/'> The diminishing funds allocated for the Rohingya crisis are placing an immense.</Link>
 <Link className="mr-4 text-red-700 font-bold" to='/'> The diminishing funds allocated for the Rohingya crisis are placing an immense.</Link>

</Marquee>

        </div>
    );
};

export default BreakingNews;