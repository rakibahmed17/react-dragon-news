import BreakingNews from "./BreackingNews/BreakingNews";
import Header from "./Shared/Header/Header";
import LiftSIdeNav from "./Shared/LiftSideNav/LiftSIdeNav";
import Navbar from "./Shared/Navbar/Navbar";
import Rightsidenav from "./Shared/Rightsidenav/Rightsidenav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="border">
            <LiftSIdeNav></LiftSIdeNav>
        </div>
        <div className="col-span-2 border p-7">
            <h2 className="text-3xl text-center font-extrabold mb-3">Famous News</h2>
            <p className="font-semibold text-center">Moreover, the World Bank (WB) and Asian Development Bank (ADB) are progressively tightening their financial support, creating a significant challenge for Bangladesh. The country now finds itself in a desperate situation. The diminishing funds allocated for the Rohingya crisis are placing an immense financial burden on Bangladesh, forcing the country to resort to borrowing for the refugees' well-being.</p>

            <p className="mt-7">
            Moreover, the World Bank (WB) and Asian Development Bank (ADB) are progressively tightening their financial support, creating a significant challenge for Bangladesh. The country now finds itself in a desperate situation. The diminishing funds allocated for the Rohingya crisis are placing an immense financial burden on Bangladesh, forcing the country to resort to borrowing for the refugees' well-being.
            </p>
            <p className="mt-7">
            Moreover, the World Bank (WB) and Asian Development Bank (ADB) are progressively tightening their financial support, creating a significant challenge for Bangladesh. The country now finds itself in a desperate situation. The diminishing funds allocated for the Rohingya crisis are placing an immense financial burden on Bangladesh, forcing the country to resort to borrowing for the refugees' well-being.
            </p>
            <p className="mt-7">
            Moreover, the World Bank (WB) and Asian Development Bank (ADB) are progressively tightening their financial support, creating a significant challenge for Bangladesh. The country now finds itself in a desperate situation. The diminishing funds allocated for the Rohingya crisis are placing an immense financial burden on Bangladesh, forcing the country to resort to borrowing for the refugees' well-being.
            </p>
            <p className="mt-7">
            Moreover, the World Bank (WB) and Asian Development Bank (ADB) are progressively tightening their financial support, creating a significant challenge for Bangladesh. The country now finds itself in a desperate situation. The diminishing funds allocated for the Rohingya crisis are placing an immense financial burden on Bangladesh, forcing the country to resort to borrowing for the refugees' well-being.
            </p>
        </div>
        <div className="border">
            <Rightsidenav></Rightsidenav>
        </div>
       </div>
        </div>
    );
};

export default Home;