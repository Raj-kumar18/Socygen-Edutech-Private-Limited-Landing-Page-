import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Rocket, Brain, TestTube, Menu, X, ChevronRight, Github,
    Linkedin, Twitter, Mail, Phone, MapPin, Users, BookOpen,
    Award, Zap, Globe, Shield, GraduationCap, Building, Heart,
    HelpCircle, CheckCircle2, Star, MessageCircle, School
} from 'lucide-react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Home = () => {

    const products = [
        {
            title: 'SocyGen',
            description: 'Revolutionary social learning platform connecting students worldwide',
            icon: <Brain className="w-12 h-12 text-purple-500" />,
            features: ['Collaborative Learning', 'Real-time Interaction', 'Global Community']
        },
        {
            title: 'MedGen',
            description: 'Advanced medical education and training solutions',
            icon: <TestTube className="w-12 h-12 text-indigo-500" />,
            features: ['Virtual Labs', 'Case Studies', 'Expert Consultations']
        },
        {
            title: 'TesGen',
            description: 'Next-generation testing and assessment platform',
            icon: <Rocket className="w-12 h-12 text-violet-500" />,
            features: ['AI-Powered Analysis', 'Adaptive Testing', 'Detailed Analytics']
        }
    ];

    const stats = [
        { number: '50K+', label: 'Active Users', icon: <Users className="w-8 h-8" /> },
        { number: '100+', label: 'Courses', icon: <BookOpen className="w-8 h-8" /> },
        { number: '25+', label: 'Countries', icon: <Globe className="w-8 h-8" /> },
        { number: '98%', label: 'Satisfaction', icon: <Award className="w-8 h-8" /> }
    ];

    const features = [
        {
            icon: <Zap className="w-6 h-6 text-purple-500" />,
            title: 'Lightning Fast',
            description: 'Experience seamless learning with our optimized platform'
        },
        {
            icon: <Shield className="w-6 h-6 text-indigo-500" />,
            title: 'Secure Platform',
            description: 'Your data is protected with enterprise-grade security'
        },
        {
            icon: <Globe className="w-6 h-6 text-violet-500" />,
            title: 'Global Access',
            description: 'Learn from anywhere, anytime with our cloud-based solution'
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Medical Student",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            quote: "SocyGen transformed my learning experience. The personalized approach helped me excel in my medical studies.",
            product: "MedGen"
        },
        {
            name: "David Chen",
            role: "Computer Science Major",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            quote: "The collaborative features and AI-powered assessments made learning programming concepts much more engaging.",
            product: "TesGen"
        },
        {
            name: "Maria Garcia",
            role: "High School Teacher",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
            quote: "SocyGen has revolutionized how I connect with my students. The platform's features are incredibly intuitive.",
            product: "SocyGen"
        }
    ];

    const partners = [
        {
            name: "Ashaeservices",
            logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Malviya institute varansi",
            logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "MIT",
            logo: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        },
        {
            name: "Oxford University",
            logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        }
    ];

    const impactStats = [
        {
            number: "100K+",
            label: "Students Impacted",
            icon: <GraduationCap className="w-6 h-6 text-purple-500" />
        },
        {
            number: "500+",
            label: "Partner Institutions",
            icon: <Building className="w-6 h-6 text-purple-500" />
        },
        {
            number: "1M+",
            label: "Lives Changed",
            icon: <Heart className="w-6 h-6 text-purple-500" />
        }
    ];

    const faqs = [
        {
            question: "How do I get started with SocyGen?",
            answer: "Sign up for a free account and complete our quick assessment to get personalized learning recommendations."
        },
        {
            question: "Are the courses certified?",
            answer: "Yes, all our courses come with verified certificates recognized by leading institutions."
        },
        {
            question: "What support do you provide?",
            answer: "We offer 24/7 technical support, mentor guidance, and peer learning communities."
        },
        {
            question: "Is financial aid available?",
            answer: "Yes, we offer scholarships and flexible payment plans based on need and merit."
        },
        {
            question: "Can I access the courses on mobile devices?",
            answer: "Absolutely! Our platform is fully responsive and accessible on smartphones, tablets, and desktops."
        },
        {
            question: "Do you offer courses for beginners?",
            answer: "Yes, we have courses designed for learners at all levels, including beginners, intermediate, and advanced learners."
        }
    ];

    const ImpactStoriesSection = () => (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
                    <p className="text-xl text-gray-600">Real stories from our community of learners</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="testimonial-card rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                            <div className="flex items-center text-purple-600">
                                <Star className="w-5 h-5 mr-1" />
                                <Star className="w-5 h-5 mr-1" />
                                <Star className="w-5 h-5 mr-1" />
                                <Star className="w-5 h-5 mr-1" />
                                <Star className="w-5 h-5" />
                            </div>
                            <div className="mt-4 text-sm text-purple-600">
                                Using {testimonial.product}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="impact-card rounded-xl p-6 text-center"
                        >
                            <div className="flex justify-center mb-4">{stat.icon}</div>
                            <h3 className="text-4xl font-bold stats-gradient mb-2">{stat.number}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    const PartnersSection = () => (
        <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Trusted Partners
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Collaborating with industry leaders and institutions to redefine the future of education.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-white cursor-pointer shadow-md hover:shadow-lg rounded-xl p-6 flex flex-col items-center justify-center transition-transform transform hover:-translate-y-2"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-25 cursor-pointer rounded-sm object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mb-4"
                            />
                            <p className="text-gray-800 text-xl font-medium text-center">{partner.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    const HowWeHelpSection = () => (
        <section className="help-section py-20 bg-gradient-to-b from-purple-50 via-white to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Making quality education accessible to everyone.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
                    >
                        <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full mb-6">
                            <School className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Education</h3>
                        <p className="text-gray-600 mb-6">
                            Access to high-quality educational content at no cost, breaking down financial barriers.
                        </p>
                        <div className="border-t border-gray-200 mt-4 pt-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                    <span>Free core courses</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                    <span>Learning resources</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                    <span>Practice materials</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
                    >
                        <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 w-16 h-16 rounded-full mb-6">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Guidance</h3>
                        <p className="text-gray-600 mb-6">
                            One-on-one mentoring and support to help you achieve your learning goals.
                        </p>
                        <div className="border-t border-gray-200 mt-4 pt-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                    <span>Expert mentors</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                    <span>Career guidance</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                    <span>Progress tracking</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
                    >
                        <div className="flex items-center justify-center bg-gradient-to-r from-violet-500 to-violet-600 w-16 h-16 rounded-full mb-6">
                            <HelpCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Support</h3>
                        <p className="text-gray-600 mb-6">
                            Round-the-clock assistance and resources to ensure your success.
                        </p>
                        <div className="border-t border-gray-200 mt-4 pt-4">
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                                    <span>24/7 support</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                                    <span>Community forums</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                                    <span>Resource library</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    );

    const FAQSection = () => (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">Find answers to common questions about our platform</p>
                </motion.div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-start">
                                <span className="text-purple-600 mr-3">
                                    <HelpCircle className="w-6 h-6" />
                                </span>
                                {faq.question}
                            </h3>
                            <p className="text-gray-600 ml-9">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    const ContactSection = () => (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">info@socygen.edu</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Location</h4>
                                        <p className="text-gray-600">123 Innovation Drive, Tech Valley, CA 94025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors"
                                >
                                    <Twitter className="w-6 h-6 text-purple-600" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6 text-purple-600" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#"
                                    className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors"
                                >
                                    <Github className="w-6 h-6 text-purple-600" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );


    return (

        <div className="min-h-screen">
            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 mesh-gradient">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Revolutionizing Education Through Innovation
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-gray-100">
                            Empowering learners worldwide with cutting-edge educational technology
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-purple-600 cursor-pointer px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 cursor-pointer border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="bg-purple-100 p-5 rounded-full cursor-pointer">
                                        {stat.icon}
                                    </div>
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
                        <p className="text-xl text-gray-600">Innovative solutions for modern education</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex  mb-6">
                                    {product.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                                <p className="text-gray-600 mb-6">{product.description}</p>
                                <ul className="space-y-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-8 bg-gradient-to-r cursor-pointer from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
                                >
                                    Learn More
                                    <ChevronRight className="w-5 h-5 inline-block ml-2" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                        <p className="text-xl text-gray-600">Features that set us apart</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center mb-4">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Sections */}
            <ImpactStoriesSection />
            <PartnersSection />
            <HowWeHelpSection />
            <FAQSection />
            <ContactSection />
            <Footer />

        </div>
    )
}

export default Home