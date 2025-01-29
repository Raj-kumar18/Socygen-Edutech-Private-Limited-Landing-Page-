import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center"
                    >

                        <Link to="/">
                            <span className="text-xl md:text-2xl font-bold text-purple-600 flex items-center space-x-2 gap-2 cursor-pointer">
                                <GraduationCap className="w-8 h-8" />
                                SocyGen EduTech Private Limited
                            </span>

                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
                        <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
                        <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                        <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
                        <a href="#contact" className="text-gray-700 hover:text-purple-600 transition- colors">Contact</a>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-purple-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden py-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
                            <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
                            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
                            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Header