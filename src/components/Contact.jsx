import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="contact py-20 pb-40 md:pb-20 px-[5%] md:px-[9%] flex justify-center items-center flex-col relative overflow-hidden" id="contact">
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-main-color/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.h2
                className="heading text-[3.5rem] text-center font-bold mb-12 text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-color to-pink-500">Me</span>
            </motion.h2>

            <motion.div
                className="flex justify-center gap-10 flex-wrap z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-4xl text-white hover:bg-main-color hover:border-main-color hover:scale-110 hover:-translate-y-2 transition-all duration-300 group shadow-[0_0_2rem_rgba(0,0,0,0.2)]">
                    <i className='bx bxl-linkedin group-hover:text-white transition-colors'></i>
                </a>

                <a href="https://github.com/sarvesh9137" target="_blank" rel="noopener noreferrer" className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-4xl text-white hover:bg-gray-800 hover:border-white/50 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group shadow-[0_0_2rem_rgba(0,0,0,0.2)]">
                    <i className='bx bxl-github group-hover:text-white transition-colors'></i>
                </a>

                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-4xl text-white hover:bg-green-500 hover:border-green-500 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group shadow-[0_0_2rem_rgba(0,0,0,0.2)]">
                    <i className='bx bxl-whatsapp group-hover:text-white transition-colors'></i>
                </a>
            </motion.div>

            <motion.form
                action="#"
                className="max-w-[70rem] w-full text-center my-12 relative z-10 glass p-10 rounded-3xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="input-box flex justify-between flex-wrap gap-6">
                    <input type="text" placeholder="Full Name" className="flex-1 min-w-full md:min-w-[45%] p-6 text-[1.6rem] text-white bg-white/5 border border-white/10 rounded-xl placeholder-white/40 focus:border-main-color focus:bg-white/10 focus:shadow-[0_0_1rem_rgba(249,115,22,0.3)] transition-all duration-300" />
                    <input type="email" placeholder="Email Address" className="flex-1 min-w-full md:min-w-[45%] p-6 text-[1.6rem] text-white bg-white/5 border border-white/10 rounded-xl placeholder-white/40 focus:border-main-color focus:bg-white/10 focus:shadow-[0_0_1rem_rgba(249,115,22,0.3)] transition-all duration-300" />
                </div>
                <div className="input-box flex justify-between flex-wrap gap-6 mt-6">
                    <input type="number" placeholder="Mobile Number" className="flex-1 min-w-full md:min-w-[45%] p-6 text-[1.6rem] text-white bg-white/5 border border-white/10 rounded-xl placeholder-white/40 focus:border-main-color focus:bg-white/10 focus:shadow-[0_0_1rem_rgba(249,115,22,0.3)] transition-all duration-300" />
                    <input type="text" placeholder="Email Subject" className="flex-1 min-w-full md:min-w-[45%] p-6 text-[1.6rem] text-white bg-white/5 border border-white/10 rounded-xl placeholder-white/40 focus:border-main-color focus:bg-white/10 focus:shadow-[0_0_1rem_rgba(249,115,22,0.3)] transition-all duration-300" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className="w-full mt-6 p-6 text-[1.6rem] text-white bg-white/5 border border-white/10 rounded-xl resize-none placeholder-white/40 focus:border-main-color focus:bg-white/10 focus:shadow-[0_0_1rem_rgba(249,115,22,0.3)] transition-all duration-300 text-left"></textarea>

                <motion.button
                    type="submit"
                    className="btn mt-8 text-[1.6rem] font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </motion.form>

            <footer className="w-full text-center py-6 mt-8 border-t border-white/10 relative z-50">
                <p className="text-[1.4rem] text-white/60">Copyright &copy; 2026 by Sarvesh Singh | All Rights Reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
