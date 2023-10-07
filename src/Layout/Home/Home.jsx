import Banner from "../../Components/Banner/Banner";
import Feature from "../../Components/Feature/Feature";
import TopSelling from "../../Components/TopSelling/TopSelling";
import WhyUs from "../../Components/WhyUs/WhyUs";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Feature></Feature>
           <TopSelling></TopSelling>
           <WhyUs></WhyUs>
        </div>
    );
};

export default Home;