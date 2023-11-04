import React from 'react';
import Image from "next/image"
import DanceRegistrationButton from '@/components/DanceRegistrationButton';

const imageArray = [
    {
        src: "/splash_page/Splash page.jpg",
        alt: "Splash Page Picture 1"
    },
    {
        src: "/splash_page/Splash Page(1).jpg",
        alt: "Splash Page Picture 2",
    },
    {
        src: "/splash_page/Splash Page(2).jpg",
        alt: "Splash Page Picture 3",
    },
    {
        src: "/splash_page/Splash Page(3).jpg",
        alt: "Splash Page Picture 4",
    },
    {
        src: "/dance_school/ABOUT US MAIN SCHOOL PIC.jpg",
        alt: "Splash Page Picture 5",
    },
    {
        src: "/dance_school/ABOUT US MAIN TEACHER PIC.jpg",
        alt: "Splash Page Picture 6",
    }
]

const AboutStudio = () => {
    return (
        <>
            <div className='z-[0] bg-black flex flex-row justify-center items-center self-center px-20 py-32 my-20'>
                <div className="flex-1 gap-10 flex flex-col justify-center items-center self-center">

                <div className="relative w-[400px] h-[400px]">
                        <Image
                            src={imageArray[4].src}
                            alt={imageArray[4].alt}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>

                    <div className="relative w-[400px] h-[400px]">
                        <Image
                            src={imageArray[5].src}
                            alt={imageArray[5].alt}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>

                </div>

                <div className='flex-1 text-center'>
                <h1 className='text-2xl mt-10 mb-10 text-cream sm:text-2xl'>About Us</h1>
                <div className='leading-relaxed  text-[#fef3c7] sm:text-lg '>
                        <p className="mb-8 text-left text-cream sm:text-lg lg:text-xl">Priyada Arts, the community founded by Priyanka, is a welcoming and inclusive space for all who wish to learn and explore Bharatanatyam. The name 'Priyada' is derived from Sanskrit, and it means 'with love' (Priya=Love Da=with). True to its name, Priyada Arts is a place of warmth, creativity, and empathy.  It is the founder, Priyanka’s wish to seamlessly braid the rigorous and wholesome training imbibed by her teachers with thoughtful creativity and empathy she has come to practice as a multidisciplinary performing artist.</p>
                        <p className="mb-8 text-left text-cream sm:text-lg lg:text-xl">The community offers in-person and online classes to learners of all ages and backgrounds, with a curated syllabus and learning resources that cover not only practical dance lessons but also theory, dance fitness, costuming, makeup, and stagecraft. Priyada Arts is more than just a studio or a lab; it is a safe and inspiring space where artists can come together to create and grow. Priyanka has received numerous testimonials from her students and collaborators, praising her exceptional skills, passion, and dedication. </p>
                    </div>
                        <DanceRegistrationButton />
                </div>
            </div>
        </>
    )
}

export default AboutStudio;
