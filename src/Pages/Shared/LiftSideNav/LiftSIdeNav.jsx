import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LiftSIdeNav = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className="p-6 space-y-2 ">
           <h1 className="text-3xl">All categories</h1>
           {
            categories.map(category=> <Link to={`'/category/'${category.id}`} className="block mb-4 font-bold border p-2 rounded shadow-orange-100">{category.name}</Link>)
           }
        </div>
    );
};

export default LiftSIdeNav;