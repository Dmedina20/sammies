import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Review from "../Cards/Reviews";
import ReviewData from "../../db/reviews.json";
SwiperCore.use([Autoplay]);
function Testimonials() {
  return (
    <>
      <Swiper
        className="bg-primary w-screen"
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {ReviewData.map((review) => (
          <SwiperSlide key={review.id}>
            <Review
              name={review.name}
              title={review.title}
              image={review.image}
              text={review.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Testimonials;
