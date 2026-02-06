import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section className="min-h-screen py-20 px-[5%] md:px-[10%] bg-bg-color flex items-center" id="about">
            <div className="w-full flex flex-col md:flex-row gap-16 justify-between items-start">

                {/* Left Column: Services / Highlights */}
                <motion.div
                    className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-10 md:mt-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {[
                        { icon: 'bx-code-alt', title: 'Website Dev', desc: 'Responsive & modern.', color: 'text-cyan-400' },
                        { icon: 'bx-mobile-alt', title: 'App Dev', desc: 'Robust mobile apps.', color: 'text-orange-400' },
                        { icon: 'bx-server', title: 'AI Engineering', desc: 'Intelligent agents.', color: 'text-pink-400' },
                        { icon: 'bx-data', title: 'Data Science', desc: 'Complex analytics.', color: 'text-green-400' }
                    ].map((item, index) => (
                        <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} className="h-full">
                            <div className="glass h-full p-10 rounded-3xl flex flex-col items-start gap-6 hover:bg-white/10 transition-all duration-300 group cursor-default border border-white/5 hover:border-main-color/30 relative overflow-hidden">
                                <div className={`absolute -right-6 -top-6 text-[11rem] ${item.color} opacity-5 group-hover:opacity-10 transition-opacity rotate-12`}>
                                    <i className={`bx ${item.icon}`}></i>
                                </div>
                                <div className={`text-8xl ${item.color} bg-white/5 p-6 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-black/20`}>
                                    <i className={`bx ${item.icon}`}></i>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-main-color transition-colors">{item.title}</h3>
                                    <p className="text-xl text-white/60 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </motion.div>

                {/* Right Column: Bio & Stats */}
                <motion.div
                    className="flex-[1.5]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-8xl font-bold text-white mb-12 leading-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-color to-pink-500">me</span>
                    </h2>

                    <div className="glass p-14 rounded-[2.5rem] border-l-8 border-main-color bg-gradient-to-r from-white/5 to-transparent mb-20">
                        <p className="text-white/80 leading-relaxed text-3xl font-light">
                            I started my software journey from curiosity. That curiosity turned into a passion for building from scratch.
                            <br /><br />
                            As an <strong className="text-main-color font-semibold"> Software Engineer</strong>, I am constantly learning and creating intelligent systems to solve real-world problems.
                        </p>
                    </div>

                    <div className="flex gap-10 flex-wrap">
                        {[
                            { number: '15+', label: 'Projects Built' },
                            { number: '20+', label: 'Tech Skills' },
                            { number: '1+', label: 'Years Experience' }
                        ].map((stat, index) => (
                            <div key={index} className="glass px-12 py-10 rounded-3xl border border-white/5 hover:border-main-color/30 transition-colors flex-1 min-w-[180px] text-center">
                                <h4 className="text-6xl font-bold text-main-color mb-4">{stat.number}</h4>
                                <p className="text-white/50 text-lg uppercase tracking-wider font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
