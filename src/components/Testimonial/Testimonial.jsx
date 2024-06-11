import React from 'react'

const testimonialData = [
    {
        name: "Tom",
        image: "https://picsum.photos/id/1005/200",
        description: "Ovation Auto Detail exceeded my expectations with their thorough and professional service.",
        aosDelay: "0",
    },
    {
        name: "Anna",
        image: "https://picsum.photos/id/1011/200",
        description: "The convenience and quality of their mobile service are unmatched.",
        aosDelay: "300",
    },
    {
        name: "Jimmy",
        image: "https://picsum.photos/id/1012/200",
        description: "My car looks brand new thanks to Ovation Auto Detail's meticulous attention to detail.",
        aosDelay: "1000",
    },
];


const Testimonial = () => {
    return (
        <>
            <span id="about"></span>
            <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
                <div className="container">
                    <div className="space-y-4 pb-12">
                        <p className="text-3xl font-semibold text-center sm:text-4xl font-sans" data-aos="fade-up">
                            What Our Clients Say About Us
                        </p>
                        <p className="text-center sm:px-44" data-aos="fade-up">
                            Our clients appreciate the exceptional service and convenience we offer.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
                        {testimonialData.map((skill) => (
                            <div key={skill.name} data-aos="fade-up" data-aos-delay={skill.aosDelay}
                                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg"
                            >
                                <div className="grid place-items-center">
                                    <img src={skill.image} alt="" className="rounded-full w-20 h-20" />
                                </div>
                                <div className="text-2xl">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p>{skill.description}</p>
                                <p className="text-center font-semibold">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Testimonial