import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Term from '../components/Term'

const TermCondition = () => {
    return (
        <>
            <Header />
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <Term />
            </div>
            <Footer />
        </>
    )
}

export default TermCondition