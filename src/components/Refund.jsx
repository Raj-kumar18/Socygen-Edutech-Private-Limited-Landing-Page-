import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Package, CheckCircle, RefreshCcw, Shield } from 'lucide-react';

const Refund = () => {
    return (
        <motion.div
            className="max-w-8xl mx-auto p-8 bg-white text-gray-800 rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="text-4xl font-extrabold text-center text-indigo-600 mb-8"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Refund Policy
            </motion.h1>

            <div className="space-y-12">
                {/* Introduction Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <CreditCard className="w-6 h-6 text-indigo-600" />
                        <span>Our Refund Process</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700">
                        At SocyGen, we strive to ensure your satisfaction with our products and services. Here's how our return and refund process works:
                    </p>
                </section>

                {/* Cancelling Parchment Order Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Package className="w-6 h-6 text-indigo-600" />
                        <span>Cancelling a Parchment Order</span>
                    </motion.h2>
                    <ul className="list-inside list-disc space-y-4 text-gray-700 mt-4">
                        <li><strong>Before Shipping:</strong> Contact our support team immediately to cancel. If the order hasn’t shipped yet, we’ll refund your full payment—no questions asked.</li>
                        <li><strong>After Shipping:</strong> We’ll issue a refund once we receive the returned item(s). A full refund is possible only for postal issues. If the return is due to a change of mind, the shipping fee will be deducted from your refund.</li>
                    </ul>
                </section>

                {/* Pre-Ordered Certificates Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <RefreshCcw className="w-6 h-6 text-indigo-600" />
                        <span>Pre-Ordered Certificates</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700">
                        If you’ve pre-ordered a certificate but haven’t redeemed it yet, you’re eligible for a refund. However, once the certificate is redeemed, refunds are not possible.
                    </p>
                </section>

                {/* Digital Certificates Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <CreditCard className="w-6 h-6 text-indigo-600" />
                        <span>Digital Certificates</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700">
                        We’ll gladly refund payments for digital certificates that haven't been downloaded. However, once you’ve downloaded the certificate, we can’t process a refund.
                    </p>
                </section>

                {/* Premium Subscriptions Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <CheckCircle className="w-6 h-6 text-indigo-600" />
                        <span>Premium Subscriptions</span>
                    </motion.h2>
                    <ul className="list-inside list-disc space-y-4 text-gray-700 mt-4">
                        <li><strong>Monthly Subscription:</strong> No refunds are issued for Premium Monthly Subscription fees that have already been paid.</li>
                        <li><strong>Yearly Subscription:</strong> If you decide to cancel your Premium 1-Year Subscription, we’ll refund you, but we’ll retain the fee for each month of use up until the cancellation date, converting your subscription to a monthly plan.</li>
                    </ul>
                </section>

                {/* Refund Confirmation Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <CheckCircle className="w-6 h-6 text-indigo-600" />
                        <span>Refund Confirmation</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700">
                        All refund recipients will receive a confirmation email once the refund is processed.
                    </p>
                </section>

                {/* Our Right to Refuse Section */}
                <section className="space-y-4">
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Shield className="w-6 h-6 text-indigo-600" />
                        <span>Our Right to Refuse</span>
                    </motion.h2>
                    <p className="text-lg text-gray-700">
                        Please note, SocyGen reserves the right to refuse a refund in certain situations.
                    </p>
                </section>

                {/* Footer Section */}
                <footer className="mt-12 text-center text-gray-600 text-sm">
                    <p>Thank you for choosing SocyGen. We are committed to providing quality service and ensuring your satisfaction.</p>
                </footer>
            </div>
        </motion.div>
    );
};

export default Refund;
