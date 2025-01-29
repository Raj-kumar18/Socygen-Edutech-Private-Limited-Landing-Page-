import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Privacy from '../components/Privacy'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
           <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <Privacy />
           </div>
            <Footer />
        </>

    )
}

export default PrivacyPolicy