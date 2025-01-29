import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Info, FileText } from 'lucide-react';

const Privacy = () => {
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
        Privacy Policy
      </motion.h1>

      <div className="space-y-12">
        <section className="space-y-4">
          <motion.h2
            className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Info className="w-6 h-6 text-indigo-600" />
            <span>1. Information You Provide Directly to Us</span>
          </motion.h2>
          <p className="text-lg text-gray-700">
            At SocyGen, we collect various types of information depending on how you interact with our services. Below are some examples to help you understand what we may gather:
          </p>
          <ul className="list-inside list-disc space-y-4 text-gray-700 mt-4">
            <li><strong>Registration Information:</strong> Basic info like email, password, date of birth, and age.</li>
            <li><strong>Profile Information:</strong> Add a profile picture, website link, and social media profiles.</li>
            <li><strong>Public Posting/Shared Content:</strong> Be mindful that posts you share may be public.</li>
            <li><strong>Learner of the Day/Month:</strong> Standout learners may have their info showcased for marketing purposes.</li>
            <li><strong>Course Information:</strong> Data on your progress, topics covered, and assessments.</li>
            <li><strong>Payment Information:</strong> Payment details are processed securely via partners, not stored by us.</li>
            <li><strong>Third-Party Platform Information:</strong> We may collect details if accessed via third-party platforms like Facebook.</li>
            <li><strong>Promotions and Surveys:</strong> We may collect data from you for surveys or promotions.</li>
            <li><strong>Communications and Support:</strong> If you contact us, we'll collect details to assist you.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <motion.h2
            className="text-2xl font-semibold text-indigo-600 flex items-center space-x-3"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FileText className="w-6 h-6 text-indigo-600" />
            <span>2. Information We Collect Automatically</span>
          </motion.h2>
          <p className="text-lg text-gray-700">
            We also gather some data automatically to improve your experience:
          </p>
          <ul className="list-inside list-disc space-y-4 text-gray-700 mt-4">
            <li><strong>Technical and Usage Data:</strong> Includes IP address, device type, browser, and platform interactions.</li>
            <li><strong>Cookies and Web Beacons:</strong> We use cookies and beacons to improve your experience and remember preferences.</li>
          </ul>
        </section>

        <section className="mt-8 text-center">
          <motion.p
            className="text-gray-700 text-lg italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            For more on how we use cookies and similar technologies, check out our full Cookies Policy.
          </motion.p>
        </section>
      </div>

      <footer className="mt-12 flex items-center justify-center space-x-3">
        <Lock className="text-indigo-600" />
        <p className="text-sm text-gray-600">Your privacy is important to us. We strive to protect your data with the highest standards.</p>
      </footer>
    </motion.div>
  );
};

export default Privacy;
