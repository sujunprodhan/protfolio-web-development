'use client';
import React from 'react';
import Image from 'next/image';
import { MdOutlineStar } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const testimonials = [
    {
      author: 'Daniel Rodriguez',
      title: 'Author',
      position: 'Operations Manager',
      image: '/author2.webp',
      service: 'CloudNova Inc.',
      date: 'Operations Manager',
      rating: 5,
      quote:
        'Professional web development with scalable architecture, optimized performance, smooth user experience, and reliable project delivery exceeding expectations.',
    },
    {
      author: 'Emily Carter',
      title: 'BrightTech Solutions',
      position: 'Product Manager',
      image: '/author4.webp',
      service: 'BrightTech Solutions',
      date: 'Product Manager',
      rating: 4,
      quote:
        'Delivered a responsive, high-performance website with clean code, modern design, excellent communication, and timely delivery throughout the project.',
    },
    {
      author: 'Michael Thompson',
      title: 'Startup Founder',
      position: 'Startup Founder',
      image: '/author1.webp',
      service: 'NexaSoft LLC (USA)',
      date: 'Startup Founder',
      rating: 5,
      quote:
        'Professional web development with scalable architecture, optimized performance, smooth user experience, and reliable project delivery exceeding expectations.',
    },
  ];

  return (
    <section className="w-full py-30 border-b border-b-black">
      <div className="text-center mb-10">
        <p className="text-[#FF014F]">CLIENT SAY</p>
        <h1 className="text-5xl font-bold text-white">Testimonial</h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full pb-30 relative"
        style={{
          '--swiper-pagination-color': '#BF0A4D',
          '--swiper-pagination-bullet-size': '12px',
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="min-h-120 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Left */}
              <div
                className="w-full md:w-[30%] bg-white/5 backdrop-blur-xl
  border border-white/10
  shadow-[0_3px_10px_rgba(0,0,0,0.5)]
  transition-all duration-500 rounded-md flex justify-center flex-col items-center p-5 mb-5 md:mb-0"
              >
                <Image
                  src={t.image}
                  alt="author"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <h1 className="text-white text-2xl font-bold mt-4">{t.author}</h1>
                <p className="text-white/50">{t.position}</p>
              </div>

              {/* Right */}
              <div className="w-full md:w-[65%] p-5">
                <Image src="/quote.png" alt="quote" width={100} height={100} className="mb-4" />
                <div
                  className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_3px_10px_rgba(0,0,0,0.5)] transition-all duration-500; rounded-md w-full text-center text-white/70 p-10"
                >
                  <h1 className="text-2xl font-bold">{t.service}</h1>
                  <p>{t.date}</p>

                  <span className="flex justify-center text-yellow-300 my-2">
                    {Array.from({ length: t.rating }).map((_, index) => (
                      <MdOutlineStar key={index} />
                    ))}
                  </span>

                  <p className="border-t-2 mt-7 border-white/5 pt-4">{t.quote}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
