import React from 'react';
import './faq.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import Link from 'next/link';

const FAQ = () => {
  return (
    <>
      <NavBar/>
      <div className='faq-page'>
        <div className='faq-page-content'>
          <h1 className='faq-page-title'>Frequently Asked Questions</h1>
          <div className='faq-page-text'>
            <p>1. What is the recommended age to start Bharatanatyam classes?</p>
            <p>4 years is generally a good age to begin training, but this can vary depending on the child’s interest, ability, and attention span.</p>

            <p>2. Is there an upper age limit to join classes?</p>
            <p>There is none. You can start learning the art form at any age. The expected outcome, though will be in accordance with any physical limitations that may exist. Complete training and support that can best address those needs will be provided at Priyada.</p>

            <p>3. Are free trial classes offered?</p>
            <p>Trial classes can be availed at a nominal fee.</p>

            <p>4. What is the fee structure?</p>
            <p>Fees are to be paid monthly by the 5th of each month. If any classes are canceled, a makeup/compensation class will be provided.</p>

            <p>5. How many classes per month?</p>
            <p>Two classes are conducted per week for each level of students.</p>

            <p>6. What is the duration of the class?</p>
            <p>Classes are approximately One hour long. This can vary during annual day programs, class events, summer camps, etc.</p>

            <p>7. What is taught at Priyada Arts?</p>
            <p>Traditional Bharatanatyam Training, Dance Fitness, Theory from the Natya Shastra (Ancient Texts of Indian Classical Dance and other core aspects of being a performing artist are taught at Priyada Arts. Additionally, one-on-one training, choreography sessions, and workshops are provided for those interested.</p>

            <p>8. What is the Baani (Style of Bharatanatyam) taught here?</p>
            <p>Priyada Arts was born from Anitha Guha’s Bharathanjali, the brainchild of Artistic Director, Anitha Guha (Priyanka’s Teacher). Guru Anitha’s training began under the illustrious Govindaraja Pillai Master and then later in the Kalakshetra style with Guru Ananda Shankar Jayant. Thus she amalgamated the intricacies and nuances of these varied styles to evolve a brand of her own. This evolved style is now being practiced and taught through Priyada Arts as well, with a carefully curated syllabus.</p>

            <p>9. What are the levels of training offered and their duration?</p>
            <p>Beginner, Intermediate, and Advanced level training is offered. The beginner level takes about 2-3 years. The intermediate level takes 2 years, and the Advanced level takes another 2-3 years.</p>

            <p>10. When will Salangai Pooja and Arangetram be conducted?</p>
            <p>Salangai Poojai is an initiation ceremony, through which the dancers gain the right to wear the bells on their feet and perform pieces after offering their respects to it. This is usually planned upon the completion of the Beginner Stage. Arangetram is the official stage debut of a dancer, where they are trained to perform a complete “Margam” (repertoire) in front of an audience. This takes 6+ years of rigorous training. This is also decided only upon careful consideration.</p>

            <p>11. Will my kid get to perform on stage?</p>
            <p>Bharatanatyam, just like any other traditional Indian art form, takes years of practice to become proficient in. Beginners require at least 2 years of strong foundational lessons to tackle performing on a stage. That said, if the dancers have the ability to progress at a faster pace, training, and opportunities will be provided accordingly at the teacher’s discretion.</p>

            <p>12. What kind of programs are conducted at Priyada Arts?</p>
            <p>Annual Student Showcase, Summer Showcase, and Summer Camps are conducted for all students. Advanced learners are trained for performances during Shivaratri, Navaratri, and other occasions. Additional workshops for fitness and advanced learning from reputed artists are also organized.</p>

            <p>13. How do I contact Priyanka or book an appointment with her?</p>
            <p>Please visit the Additional Services tab, create an account, and send an inquiry to contact her. Additionally, you can write to <Link href='mailto:priyadaarts@gmail.com'><strong>priyadaarts@gmail.com</strong></Link> or <Link href='mailto:priyankaraghuramandance@gmail.com'><strong>priyankaraghuramandance@gmail.com</strong></Link>.</p>

            <p>14. What additional services does Priyanka provide at Priyada Arts?</p>
            <p>Priyanka does Nattuvangam, Artist Makeup, and Event Emceeing as Professional Services. You can reach out with inquiries for booking.</p>
          </div>
        </div>
        <ChatBot/>
        <Footer/>
      </div>
    </>
  );
}

export default FAQ;
