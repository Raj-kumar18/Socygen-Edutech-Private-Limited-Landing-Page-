import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Refund from '../components/Refund'
const RefundPolicy = () => {
    return (
        <>
            <Header />
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <Refund />
            </div>
            <Footer />
        </>
    )
}

export default RefundPolicy