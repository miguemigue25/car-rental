import React from 'react'

const Contact = () => {
    return (
        <>
            <span id="contact"></span>
            <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 dark:bg-white/20 bg-gray-100 text-black py-8 px-6 rounded-lg">
                        <div className="col-span-2 space-y-3">
                            <h1 className="text-4xl text-center sm:text-5xl font-semibold text-black dark:text-white">
                                Let&apos;s Detail Your Car to Perfection
                            </h1>
                            <p className="text-gray-400 text-center dark:text-white">
                                At Ovation Auto Detail, we provide top-notch mobile auto detailing
                                services to keep your car looking brand new. Reach out to us today
                                to schedule an appointment or to learn more about our services.
                            </p>
                        </div>
                        <div className="grid place-items-center">
                            <button
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300"
                            >
                                Contact Us Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact