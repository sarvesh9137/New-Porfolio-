import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#portfolio', id: 'portfolio' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full px-[9%] py-6 flex justify-between items-center z-[100] transition-all duration-300 ${scrolled ? 'glass-strong py-4 shadow-xl' : 'bg-transparent'
                }`}
        >
            <a href="#" className="text-[2.5rem] font-bold cursor-default tracking-wide relative group text-text-color">
                Port<span className="text-main-color">folio</span>
            </a>

            <div className="md:hidden z-50">
                <div
                    className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-[3.6rem] text-text-color cursor-pointer hover:text-main-color transition-colors`}
                    id="menu-icon"
                    onClick={toggleMenu}
                ></div>
            </div>

            <nav className={`navbar hidden md:flex items-center gap-8`}>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        onClick={() => handleNavClick(link.id)}
                        className={`text-[1.7rem] font-medium transition-all duration-300 relative group ${activeSection === link.id ? 'text-main-color' : 'text-text-color hover:text-main-color'}`}
                    >
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-main-color to-pink-500 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </a>
                ))}
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="navbar absolute top-[100%] left-0 w-full bg-bg-color/95 backdrop-blur-xl border-t border-white/10 flex flex-col p-8 md:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => handleNavClick(link.id)}
                                className={`text-[2rem] block my-4 transition-colors ${activeSection === link.id ? 'text-main-color font-bold' : 'text-text-color hover:text-main-color'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
