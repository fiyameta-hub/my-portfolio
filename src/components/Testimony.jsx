import React from 'react';
import womenimage from '../images/Habesha kemis_zuria.jpg';
import menimage from '../images/ethiopian man.jpg';
import husoimage from'../images/manishaaaaaa.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const TestimonialCard = ({ name, feedback, role, image }) => (
  <div className=" rounded-lg shadow-lg p-6 text-center dark:bg-black bg-white inset-shadow-xl ">
   
    <img
      src={image}
      alt={name}
      className="w-24 h-24 mx-auto rounded-full  mb-4"
    />
    <p className="dark:text-white/70 text-dark mb-4 ">"{feedback}"</p>
    <div className="text-center">
      <h3 className="text-xl font-semibold dark:text-[#FFFFA9] text-black mb-2">{name}</h3>
      <p className="dark:text-white/70 text-black">{role}</p>
    </div>
  </div>
);

const Testimony = () => {
  const testimonials = [
    {
      name: "Etsubdink Gedyon",
      feedback:
        "This platform has streamlined our operations and significantly improved our efficiency!",
      role: "Hotel Manager",
      image: womenimage,
    },
    {
      name: "Leul Kassahun",
      feedback:
        "An excellent tool for planning and managing our tours. Highly recommended!",
      role: "Tour Operator",
      image: menimage,
    },
    {
      name: " Husseniyat mohammed",
      feedback:
        "An excellent tool for planning and managing our supermarket. Highly recommended!",
      role: "supermarket owner",
      image: husoimage,
    },

  ];

  return (
    <section id="testimony" className="py-20 dark:bg-black/90 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-[#FFFFA9] text-black text-center mb-16">
          Testimonials
        </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        effect="fade" 
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, 
        }}
        className="my-8"
      >
          {testimonials.map((testimonial, index) => (
          <SwiperSlide >
            <TestimonialCard
              key={index}
              name={testimonial.name}
              feedback={testimonial.feedback}
              role={testimonial.role}
              image={testimonial.image}
            />
          </SwiperSlide>
          ))}
      </Swiper>


        </div>

    </section>
  );
};

export default Testimony;
