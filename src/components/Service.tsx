import React from 'react';
import Servicecard from './Servicecard';

interface ServicecardProps {
    title: string;
    descrip: string;
    url: string;
}

const Services: ServicecardProps[] = [
    {
        title: "Web Development",
        descrip: "Build responsive and modern websites tailored to your needs.",
        url: "/web-development.svg"
    },
    {
        title: "Mobile App Development",
        descrip: "Create user-friendly mobile applications for Android and iOS.",
        url: "/mobile-app-development.svg"
    },
    {
        title: "Cloud Computing",
        descrip: "Leverage cloud solutions to scale and optimize your business.",
        url: "/cloud-security.svg"
    },
    {
        title: "Cybersecurity",
        descrip: "Protect your digital assets with our advanced security solutions.",
        url: "/cybersecurity.svg"
    },
    {
        title: "Quality Assurance and Testing",
        descrip: "Ensure your software performs flawlessly with our end-to-end QA and testing services.",
        url: "/quality-assurance.svg"
    },
    {
        title: "UX/UI Designing",
        descrip: "Create intuitive and engaging user experiences with our expert UI/UX design services.",
        url: "/ux-ui.svg"
    },
    {
        title: "Blockchain Solutions",
        descrip: "Implement secure, scalable blockchain systems tailored to your business needs.",
        url: "/blockchain.svg"
    },

    {
        title: "IT Consulting",
        descrip: "Get expert advice to align technology with your business goals.",
        url: "/consulting.svg"
    }
];

const Service = () => {
    return (
        <section className="bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="container mx-auto px-6 py-16">
                <h1 className="my-3 text-4xl font-bold tracking-wide text-center capitalize underline-offset-[10px] decoration-gray-900 dark:decoration-gray-100 text-gray-900 dark:text-gray-100">
                    our Services
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-9">
                    {Services.map((service, index) => (
                        <Servicecard
                            key={index}
                            title={service.title}
                            descrip={service.descrip}
                            url={service.url}

                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service