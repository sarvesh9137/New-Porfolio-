import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "NEC Software Solutions, India",
            role: "Associate Software Developer",
            duration: "Jan 2026 - Present",
            desc: "Developing robust enterprise software solutions and contributing to full-cycle development. Collaborating with cross-functional teams to deliver high-quality digital products."
        },
        {
            company: "Plus Fitness India, Mazgaon",
            role: "Data Analyst Intern",
            duration: "Nov 2024 – May 2025",
            desc: "Analyzing fitness data and membership trends to optimize business operations. Creating interactive dashboards for actionable insights."
        }
    ];

    return (
        <section className="min-h-screen py-20 px-[5%] bg-bg-color" id="experience">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="heading text-[4.5rem] font-bold text-white mb-4">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-color to-pink-500">Experience</span>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
                    My professional journey and career milestones.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-main-color border-4 border-bg-color shadow-[0_0_15px_var(--main-color)] z-10 hidden md:block"></div>

                        {/* Content */}
                        <div className="w-full md:w-[45%] glass p-8 rounded-2xl border border-white/5 hover:border-main-color/30 transition-all duration-300 relative group">
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-main-color transition-colors">{exp.role}</h3>
                            <h4 className="text-xl text-main-color font-semibold mb-2">{exp.company}</h4>
                            <p className="text-white/50 text-sm italic mb-4">{exp.duration}</p>
                            <p className="text-white/80 leading-relaxed text-lg">
                                {exp.desc}
                            </p>
                        </div>

                        {/* Spacer for the other side */}
                        <div className="w-full md:w-[45%] hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
