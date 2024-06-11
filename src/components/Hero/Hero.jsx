import React, { useEffect } from 'react'
import car from '../../assets/car.png'
import yellow from '../../assets/banner-car.png'
import AOS from 'aos'


const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
      <div className="container min-h-[620px] flex text-center">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div className="order-1 sm:order-2" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="false">
            <img src={theme === "dark" ? car : yellow} alt=''
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p className="text-primary text-xl" data-aos="fade-up">
              Providing mobile auto detailing services throughout the San Diego community. 
            </p>
            <h1 className="text-5xl lg:text-7xl font-semibold font-sans" data-aos="fade-up" data-aos-delay="600">
              Aviato Car Detail
            </h1>
            <p className="text-2xl" data-aos="fade-up" data-aos-delay="1000">
              We come to you!
            </p>
            <button data-aos="fade-up" data-aos-delay="1500" onClick={() => {
              AOS.refreshHard();
            }}
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80"
            >
              Contact: (858) 466-4547
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero