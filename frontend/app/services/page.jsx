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
            <div className='bg-black font-didactGothic'>
                <div className='font-didactGothic'>
                    <div className='font-didactGothic'>
                        <ServiceCard />
                    </div>
                </div>

                 <div className="text-didactGothic">
                      <CreateServiceEnquiry />
                </div>

            </div>
                <Footer />
                <ChatBot />
        </>
    )
}

export default Services;
