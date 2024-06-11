import React from 'react'
import car1 from "../../assets/car1.png"

const About = () => {
    return (
        <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center text-center">
                    <div data-aos="slide-right" data-aos-duration="1500">
                        <img src={car1} alt="" className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" />
                    </div>
                    <div>
                        <div className="space-y-5 sm:p-16 pb-6">
                            <h1 className="text-3xl sm:text-4xl font-bold font-sans" data-aos="fade-up">
                                About Us
                            </h1>
                            <p data-aos="fade-up" className="leading-8 tracking-wide font-thin">
                                Welcome to Ovation Auto Detail, your go-to service for top-notch
                                car care in Los Angeles, California. We bring the shine and
                                protection your car deserves right to your doorstep.
                            </p>
                            <p data-aos="fade-up">
                                Whether it&rsquo;s a luxury sedan or a family SUV, our expert
                                team is equipped to handle all your detailing needs. Experience
                                convenience, quality, and a pristine finish with our mobile
                                detailing services.
                            </p>
                            {/* <button data-aos="fade-up" className="button-outline">
                                Get Started
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About