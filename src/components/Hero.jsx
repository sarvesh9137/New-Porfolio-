import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen pt-32 pb-10 px-[9%] flex flex-col justify-center relative overflow-hidden" id="home">
            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-main-color/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full z-10 gap-12">

                {/* Left Content */}
                <motion.div
                    className="flex-1 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white mb-2 opacity-90">Hello<span className="text-main-color">.</span></h3>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-main-color"></div>
                        <h2 className="text-3xl text-white/80 font-medium">I'm Sarvesh Singh</h2>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-8 leading-tight tracking-tight">
                        Software <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-color to-pink-500 glitch-text cursor-pointer inline-block">Developer</span>
                    </h1>

                    <div className="flex gap-6">
                        <a href="#contact" className="btn hover:scale-105">
                            Get a project
                        </a>
                        <a href="img/CV-Sarvesh_Singh.docx" className="px-10 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-semibold text-xl hover:border-main-color hover:text-main-color transition-all duration-300 hover:shadow-[0_0_1rem_rgba(249,115,22,0.3)]">
                            My resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Image with Circle Glow */}
                <motion.div
                    className="flex-1 relative flex justify-center items-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Glowing Background Graphic */}
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-main-color/40 to-transparent rounded-full blur-[80px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Decorative Circle behind (Outline) */}
                    <div className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full border border-main-color/20 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Profile Image (Full Visibility) */}
                    <div className="relative z-10 w-[280px] h-[280px] md:w-[500px] md:h-[500px] flex justify-center items-end mt-10 md:mt-0">
                        <img
                            src="img/Mypic_nobg.png"
                            alt="Sarvesh"
                            className="w-full h-full object-contain object-bottom drop-shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-transform duration-500 rounded-b-full"
                        />
                    </div>

                    {/* Floating Icons decoration */}
                    <motion.div
                        className="absolute top-20 right-10 md:right-20 text-main-color text-6xl drop-shadow-2xl glass p-4 rounded-xl"
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <i className='bx bx-code-alt'></i>
                    </motion.div>
                </motion.div>
            </div>

            {/* Tech Stack Strip */}
            <motion.div
                className="w-full mt-24 pt-10 border-t border-white/5 flex justify-center md:justify-between items-center flex-wrap gap-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {[
                    { name: 'HTML5', icon: 'bx bxl-html5', color: 'text-orange-500' },
                    { name: 'CSS3', icon: 'bx bxl-css3', color: 'text-blue-500' },
                    { name: 'JavaScript', icon: 'bx bxl-javascript', color: 'text-yellow-400' },
                    { name: 'React', icon: 'bx bxl-react', color: 'text-cyan-400' },
                    { name: 'Node.js', icon: 'bx bxl-nodejs', color: 'text-green-500' },
                    { name: 'Tailwind', icon: 'bx bxl-tailwind-css', color: 'text-cyan-300' },
                    { name: 'Git', icon: 'bx bxl-git', color: 'text-red-500' },
                    { name: 'GitHub', icon: 'bx bxl-github', color: 'text-white' }
                ].map((tech, index) => (
                    <motion.div
                        key={index}
                        className={`text-6xl md:text-7xl transition-all duration-300 cursor-pointer ${tech.color} opacity-80 hover:opacity-100`}
                        whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.8, y: 0 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                        title={tech.name}
                    >
                        <i className={tech.icon}></i>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default Hero;
