import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Make sure to import the styles
import { Link } from "react-router-dom";
import img1 from '../../assets/slider/1.jpg'
import img2 from '../../assets/slider/2.jpg'
import img3 from '../../assets/slider/3.jpg'
import img4 from '../../assets/slider/4.jpg'
import img5 from '../../assets/slider/5.jpg'
import img6 from '../../assets/slider/6.jpg'
import img7 from '../../assets/slider/7.jpg'
import img8 from '../../assets/slider/8.jpg'
import img9 from '../../assets/slider/9.jpg'
import img10 from '../../assets/slider/10.jpg'
import img11 from '../../assets/slider/11.jpg'
const TopSelling = () => {
  // Define your images here
  const images = [img1, img2, img3,img4,img5,img6,img7,img8,img9,img10,img11];

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className="mt-24 mb-24"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {images.map((image, index) => (
          <div key={index}>
            <Link to={`/product/${index}`}>
              <img src={image} alt={`Product ${index + 1}`} />
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default TopSelling;
