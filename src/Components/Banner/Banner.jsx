
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/Banner/1.png";
import img2 from "../../assets/Banner/2.png";
import img3 from "../../assets/Banner/3.png";

const Banner = () => {
  return (
    <Carousel className="mb-24">
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Banner;
