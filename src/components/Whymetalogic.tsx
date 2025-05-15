import React from 'react'
import Image from 'next/image';


interface WhyPointProps {
    number: string;
    title: string;
    description: string;
}

const WhyPoint = ({ number, title, description }: WhyPointProps) => (
    <div className="space-y-4  lg:text-right  animate-fade-up"
        data-aos="fade-up" data-aos-delay="300">
        <div className='flex lg:justify-end '>
            <span className="flex items-center justify-center w-14 h-14   text-2xl font-bold 
                     bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full transition-colors">
                {number}
            </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
);


const Whymetalogic = () => {
    // convert all the content appropriate for IT services
    const leftPoints = [
        {
            number: "1",
            title: "Innovation at the Core",
            description: "At Metalogic, we prioritize innovation by embracing emerging technologies to craft forward-thinking solutions that set your business apart."
        },
        {
            number: "2",
            title: "Client-Centric Collaboration",
            description: "We work hand-in-hand with you to understand your goals, challenges, and vision—ensuring our solutions align with your success strategy."
        },
        {
            number: "3",
            title: "Future-Ready Solutions",
            description: "Our forward-looking approach enables us to deliver scalable, adaptive solutions that prepare your business for long-term success."
        }
    ];

    const rightPoints = [
        {
            number: "4",
            title: "Driven by Your Success",
            description: "Every solution we build is crafted to drive measurable impact—enhancing efficiency, boosting productivity, and maximizing ROI."
        },
        {
            number: "5",
            title: "Trusted Technology Partner",
            description: "We don't just build software—we build lasting partnerships through transparency, technical expertise, and shared outcomes."
        },
        {
            number: "6",
            title: "Agile & Scalable Delivery",
            description: "Our agile development practices ensure we can adapt quickly to your evolving needs, delivering high-quality solutions that scale with your business."
        }
    ];


    return (
        <section className="bg-gray-50 dark:bg-gray-800/50 transition-colors">
            <div className="container mx-auto px-6 py-16 ">

                <div className="text-center mb-16">
                    <h1 className="my-3 text-4xl font-bold tracking-wide text-center capitalize underline-offset-[10px] decoration-gray-900 dark:decoration-gray-100 mb-7 text-gray-900 dark:text-gray-100">

                        why Metalogic?
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        At Metalogic, we take pride in delivering cutting-edge digital solutions that empower businesses to innovate, grow, and stay ahead in a rapidly evolving tech landscape. Here's why Metalogic stands out as a trusted technology partner for future-ready organizations
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {leftPoints.map((point, index) => (
                            <WhyPoint key={index} {...point} />
                        ))}
                    </div>

                    {/* Center Column - Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full aspect-square ">
                            {/* Decorative Circle */}
                            {/* <div className="absolute inset-0 border-4 border-blue-50 rounded-full 
                            transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                            w-[120%] h-[120%] animate-pulse"></div> */}

                            <Image
                                src="/metalogic-phn-mockup.svg"
                                alt="Metalogic Features"
                                // fill
                                className="object-contain z-10 dark:brightness-95 dark:contrast-125 transition-all"
                                width={1370}
                                height={640}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        {rightPoints.map((point, index) => (
                            <div key={index}
                                className="flex flex-col items-start space-y-4 md:text-left animate-fade-up"
                                data-aos="fade-up" data-aos-delay="300">
                                <span className="flex items-center justify-center w-14 h-14 text-2xl 
                               font-bold bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full transition-colors">
                                    {point.number}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{point.title}</h3>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whymetalogic