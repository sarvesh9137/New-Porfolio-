import React from 'react';
import { BentoGrid } from './ui/BentoGrid';
import { BentoItem } from './ui/BentoItem';
import { motion } from 'framer-motion';

const Portfolio = () => {
    // Defined real-world sounding projects matching the new profile
    const projects = [
        {
            title: "AI Stock Guru",
            category: "AI & Machine Learning",
            desc: "Stock price prediction platform using LSTM models for accurate market forecasting. Features real-time data analysis and trend visualization.",
            tags: ["Python", "TensorFlow", "React", "LSTM"],
            link: "https://aistockguru.netlify.app/"
        },
        {
            title: "DecisioAI",
            category: "AI Fintech & Agentic Workflow",
            desc: "Next-gen financial intelligence platform replacing static dashboards with a proactive, agentic AI CFO. Helps business owners track finances and simulate decisions.",
            tags: ["Agentic AI", "Financial LLMs", "React", "Python"],
            link: "https://github.com/sarvesh9137/DecisioAI"
        },
        {
            title: "SaaS Analytics Dashboard",
            category: "Full Stack",
            desc: "Real-time data visualization platform with role-based access control and reporting.",
            tags: ["React", "PostgreSQL", "AWS"],
            link: "#"
        }
    ];

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen py-20 px-[5%] bg-bg-color relative" id="portfolio">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="heading text-[4.5rem] font-bold text-white mb-4">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-color to-pink-500">Projects</span>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    A collection of projects where design meets code.
                </p>

                {/* Navigation Buttons - Visible on Desktop */}
                <div className="hidden md:flex justify-end gap-4 mt-8 mr-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-main-color hover:border-main-color transition-all duration-300 active:scale-95"
                    >
                        <i className='bx bx-chevron-left text-3xl'></i>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-main-color hover:border-main-color transition-all duration-300 active:scale-95"
                    >
                        <i className='bx bx-chevron-right text-3xl'></i>
                    </button>
                </div>
            </motion.div>

            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll-bar px-[5%] -mx-[5%] relative"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-[90vw] md:w-[600px] lg:w-[700px] snap-center group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-main-color/50 transition-all duration-500 flex-shrink-0"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-main-color/20 rounded-full blur-[80px] group-hover:bg-main-color/30 transition-all duration-500"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8 md:p-12 items-start h-full">
                            <div className="flex-1">
                                <span className="inline-block px-4 py-2 rounded-full bg-main-color/10 border border-main-color/20 text-main-color text-sm font-semibold tracking-wider uppercase backdrop-blur-sm mb-6">
                                    {project.category}
                                </span>

                                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-main-color transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-white/70 text-2xl leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                <div className="flex gap-3 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="md:w-auto flex items-start justify-end">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-main-color hover:text-white transition-all duration-300 hover:scale-110 group-hover:rotate-45 border border-white/10">
                                    <i className='bx bx-up-arrow-alt text-4xl'></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="flex items-center justify-center gap-2 mt-4 opacity-50 text-white/60 md:hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ delay: 1 }}
            >
                <span className="text-sm uppercase tracking-widest">Swipe for more</span>
                <motion.i
                    className='bx bx-right-arrow-alt text-2xl'
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.i>
            </motion.div>
        </section>
    );
};

export default Portfolio;
