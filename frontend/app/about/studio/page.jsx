import React from 'react';
import './studio.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


const About = () => {
    return (
        <div className='bg-transparent about-page'>
            <NavBar className='navbar'/>
            <div className='about-page-content'>
                <h1 className='bg-transparent font-poiretOne about-page-title'>About The School</h1>
                <div className='font-didactGothic about-page-text'>
                    <p>Priyada Arts, the community founded by Priyanka, is a welcoming and inclusive space for all who wish to learn and explore Bharatanatyam. The name 'Priyada' is derived from Sanskrit, and it means 'with love' (Priya=Love Da=with). True to its name, Priyada Arts is a place of warmth, creativity, and empathy.  It is the founder, Priyanka’s wish to seamlessly braid the rigorous and wholesome training imbibed by her teachers with thoughtful creativity and empathy she has come to practice as a multidisciplinary performing artist.</p>
                    <p>The community offers in-person and online classes to learners of all ages and backgrounds, with a curated syllabus and learning resources that cover not only practical dance lessons but also theory, dance fitness, costuming, makeup, and stagecraft. Priyada Arts is more than just a studio or a lab; it is a safe and inspiring space where artists can come together to create and grow. Priyanka has received numerous testimonials from her students and collaborators, praising her exceptional skills, passion, and dedication. </p>
                </div>
            </div>
            <Footer className='footer'/>
        </div>
    )
}

export default About;
