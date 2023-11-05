"use client"
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Link from 'next/link';

const FAQ = () => {
  return (
    <>
      <NavBar />
      <div className='faq-page bg-black text-cream flex flex-col items-center justify-center min-h-screen '>
        <div className='faq-page-content max-w-800 p-6 bg-black shadow-md rounded-md text-left p-20 m-10'>
          <h1 className='faq-page-title text-3xl font-bold mb-10 text-center '>
            Frequently Asked Questions
          </h1>
          <div className='faq-page-text text-left gap-20'>

             <p className='text-2xl font-bold text-cream mb-4'>
              1. What is the recommended age to start Bharatanatyam classes?
            </p>

            <p className='text-cream ml-5 mb-10'>
              4 years is generally a good age to begin training, but this can vary depending on the child's interest, ability, and attention span.
            </p>


            <p className='text-2xl font-bold text-cream mb-4'>
              2. Is there an upper age limit to join classes?</p>
            <p className='text-cream ml-5 mb-10'>There is none. You can start learning the art form at any age. The expected outcome, though will be in accordance with any physical limitations that may exist. Complete training and support that can best address those needs will be provided at Priyada.</p>

            <p className='text-2xl font-bold text-cream mb-4'>3. Are free trial classes offered?</p>
            <p className='text-cream ml-5 mb-10'>Trial classes can be availed at a nominal fee.</p>

            <p className='text-2xl font-bold text-cream mb-4'>4. What is the fee structure?</p>
            <p  className='text-cream ml-5 mb-10'>Fees are to be paid monthly by the 5th of each month. If any classes are canceled, a makeup/compensation class will be provided.</p>

            <p className='text-2xl font-bold text-cream mb-4'>5. How many classes per month?</p>
            <p className='text-cream ml-5 mb-10'>Two classes are conducted per week for each level of students.</p>

            <p  className='text-2xl font-bold text-cream mb-4'>6. What is the duration of the class?</p>
            <p className='text-cream ml-5 mb-10'>Classes are approximately One hour long. This can vary during annual day programs, class events, summer camps, etc.</p>

            <p  className='text-2xl font-bold text-cream mb-4'>7. What is taught at Priyada Arts?</p>
            <p className='text-cream ml-5 mb-10'>Traditional Bharatanatyam Training, Dance Fitness, Theory from the Natya Shastra (Ancient Texts of Indian Classical Dance and other core aspects of being a performing artist are taught at Priyada Arts. Additionally, one-on-one training, choreography sessions, and workshops are provided for those interested.</p>

            <p className='text-2xl font-bold text-cream mb-4'>8. What is the Baani (Style of Bharatanatyam) taught here?</p>
            <p className='text-cream ml-5 mb-10'>Priyada Arts was born from Anitha Guha's Bharathanjali, the brainchild of Artistic Director, Anitha Guha (Priyanka's Teacher). Guru Anitha's training began under the illustrious Govindaraja Pillai Master and then later in the Kalakshetra style with Guru Ananda Shankar Jayant. Thus she amalgamated the intricacies and nuances of these varied styles to evolve a brand of her own. This evolved style is now being practiced and taught through Priyada Arts as well, with a carefully curated syllabus.</p>

            <p className='text-2xl font-bold text-cream mb-4'>9. What are the levels of training offered and their duration?</p>
            <p className='text-cream ml-5 mb-10'>Beginner, Intermediate, and Advanced level training is offered. The beginner level takes about 2-3 years. The intermediate level takes 2 years, and the Advanced level takes another 2-3 years.</p>

            <p className='text-2xl font-bold text-cream mb-4'>10. When will Salangai Pooja and Arangetram be conducted?</p>
            <p className='text-cream ml-5 mb-10'>Salangai Poojai is an initiation ceremony, through which the dancers gain the right to wear the bells on their feet and perform pieces after offering their respects to it. This is usually planned upon the completion of the Beginner Stage. Arangetram is the official stage debut of a dancer, where they are trained to perform a complete “Margam” (repertoire) in front of an audience. This takes 6+ years of rigorous training. This is also decided only upon careful consideration.</p>

            <p className='text-2xl font-bold text-cream mb-4'>11. Will the student get to perform on stage?</p>
            <p className='text-cream ml-5 mb-10'>Bharatanatyam, just like any other traditional Indian art form, takes years of practice to become proficient in. Beginners require at least 2 years of strong foundational lessons to tackle performing on a stage. That said, if the dancers have the ability to progress at a faster pace, training, and opportunities will be provided accordingly at the teacher's discretion.</p>

            <p className='text-2xl font-bold text-cream mb-4'>12. What kind of programs are conducted at Priyada Arts?</p>
            <p className='text-cream ml-5 mb-10'>Annual Student Showcase, Summer Showcase, and Summer Camps are conducted for all students. Advanced learners are trained for performances during Shivaratri, Navaratri, and other occasions. Additional workshops for fitness and advanced learning from reputed artists are also organized.</p>

            <p className='text-2xl font-bold text-cream mb-4'>13. How do I contact Priyanka or book an appointment with her?</p>
            <p className='text-cream ml-5 mb-10'>Please visit the Additional Services tab, create an account, and send an inquiry to contact her. Additionally, you can write to <Link href='mailto:priyadaarts@gmail.com'><strong>priyadaarts@gmail.com</strong></Link> or <Link href='mailto:priyankaraghuramandance@gmail.com'><strong>priyankaraghuramandance@gmail.com</strong></Link>.</p>

            <p className='text-2xl font-bold text-cream mb-4'>14. What additional services does Priyanka provide at Priyada Arts?</p>
            <p className='text-cream ml-5 mb-10'>Priyanka offers various services such as Nattuvangam, Dance/Theatre Makeup, and Emceeing for events. You can reach out to Priyanka for further details.</p>

          </div>
        </div>
        <ChatBot />
        <Footer />
      </div>
    </>
  );
}

export default FAQ;
