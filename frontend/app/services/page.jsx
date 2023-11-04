import React from 'react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CreateServiceEnquiry from '@/components/ServiceEnquiryForm';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
    return (
        <>
            <NavBar />
            <div className='bg-black'>
                <div className=''>
                    <div className=''>
                        <ServiceCard />
                    </div>
                </div>

                 <div className="">
                      <CreateServiceEnquiry />
                </div>

            </div>
                <Footer />
                <ChatBot />
        </>
    )
}

export default Services;
