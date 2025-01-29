import React from 'react'
import {
    Github,
    Linkedin, Twitter, GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 rounded-tl-[50px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
                            <GraduationCap className="w-8 h-8" />
                            SocyGen EduTech
                        </h3>
                        <p className="text-gray-400">
                            Transforming education through innovation and technology.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">SocyGen</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">MedGen</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">TesGen</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Enterprise</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">API Reference</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to={"/privacy-policy"} className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={"/terms-of-service"} className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link to={"/refund-policy"} className="text-gray-400 hover:text-purple-400 transition-colors">Refund Policy</Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Security</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© 2024 SocYGen EduTech. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer