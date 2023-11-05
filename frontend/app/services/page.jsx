import React from 'react';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CreateServiceEnquiry from '@/components/ServiceEnquiryForm';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
    return (
        <>
            <div className='bg-black'>
            <NavBar />
            <div className='bg-black font-worksans'>
                <div className='bg-black font-didactGothic'>
                    <div className='bg-black font-didactGothic'>
                        <ServiceCard />
                    </div>
                </div>

                 <div className="bg-black text-didactGothic">
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
