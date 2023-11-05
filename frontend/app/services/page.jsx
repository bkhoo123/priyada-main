import React from 'react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CreateServiceEnquiry from '@/components/ServiceEnquiryForm';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
    return (
        <>
            <div className='bg-white'>
            <NavBar />
            <div className='bg-white font-worksans'>
                <div className='bg-whitefont-didactGothic'>
                    <div className='bg-white font-didactGothic'>
                        <ServiceCard />
                    </div>
                </div>

                 <div className="bg-white text-didactGothic">
                      <CreateServiceEnquiry />
                </div>

            </div>
                <Footer />
                <ChatBot />
        </div>
        </>
    )
}

export default Services;
