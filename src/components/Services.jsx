import React from 'react';
import { BentoGrid } from './ui/BentoGrid';
import { BentoItem } from './ui/BentoItem';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: 'bx bx-code-alt',
            title: 'Full Stack Engineering',
            description: "End-to-end web application development using React, Node.js, and Python. Building scalable, secure, and high-performance architectures."
        },
        {
            icon: 'bx bxs-brain',
            title: 'AI & LLM Solutions',
            description: "Designing RAG pipelines, autonomous agents, and chatbots using LangChain, OpenAI, and Vector Databases to solve complex business problems."
        },
        {
            icon: 'bx bxs-data',
            title: 'System Architecture',
            description: "Planning and optimizing cloud infrastructure (AWS/Azure) for reliability and growth. Expertise in microservices and serverless deployment."
        },
        {
            icon: 'bx bxs-network-chart',
            title: 'Network Optimization',
            description: "Ensuring secure and efficient data communication across complex networks. Familiar with routing, switching, and cloud networking protocols."
        }
    ];

    return (
        <section className="min-h-screen py-20 px-[5%] bg-bg-color relative" id="services">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="heading text-[4rem] font-bold text-white">
                    Technical <span className="text-main-color">Expertise</span>
                </h2>
                <p className="text-white/60 mt-4 text-xl">Delivering robust solutions across the stack</p>
            </motion.div>

            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <BentoItem key={index} className="col-span-1 group hover:-translate-y-2 transition-transform duration-500 min-h-[320px] p-8">
                        <div className="w-20 h-20 rounded-3xl bg-main-color/10 flex items-center justify-center text-main-color text-5xl mb-8 group-hover:bg-main-color group-hover:text-bg-color transition-colors duration-300">
                            <i className={service.icon}></i>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-white/70 leading-relaxed text-lg">{service.description}</p>
                    </BentoItem>
                ))}
            </BentoGrid>
        </section>
    );
};

export default Services;
