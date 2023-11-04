"use client"
import React from "react";
import "./artist.css";
import ChatBot from "@/components/ChatBot";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";


const CarouselHashMap = [
    {
        src: "/about_artist/About_Artist_3.jpg",
        alt: "Artist 1",
        content: "Priyanka Raghuraman is a passionate and talented multidisciplinary artist who is constantly exploring new creative territories. She is the founder and artistic director of Priyada Arts, a vibrant community in the Bay Area that welcomes and nurtures aspiring Bharatanatyam dancers from all backgrounds. Priyanka is also known for her original works that merge contemporary themes with the traditional art form, creating a mirror of our times that is both insightful and thought-provoking. As a trailblazing performer, choreographer, and teacher, Priyanka has earned a reputation for her exceptional skills in both “Nirtta” (pure dance movements) and “Abhinaya” (facial expressions used in storytelling)."
    },
    {
        src: "/about_artist/About_Artist_2.jpg",
        alt: "Artist 2",
        content: "She is a senior performer and faculty member of Anitha Guha's Bharathanjali and is currently pursuing Kuchipudi under the tutelage of Sr. Kasi Aysola. Priyanka has collaborated with some of the most reputable names in the US dance scene, including Nava Dance Theatre, Navatman, Abhinaya Dance Company, Prakriti Dance, and Bharata Dance Company."
    },
    {
        src: "/about_artist/About_Artist_1.jpg",
        alt: "Artist 3",
        content: "Priyanka's early training began at age 4 under the guidance of her mother, Smt. Kamala Raghuraman, and later continued with Guru Kalaimamani Smt. Anitha Guha. As a professional soloist and graded artist with Doordarshan (India), Priyanka has toured and performed at prestigious venues across India, the USA, and Singapore. She has also worked as a professional television anchor, hosting over 100 television shows on national television, and as a theater actor, portraying titular roles in plays staged for the reputed National School of Drama (India)."
    },
    {
        src: "/about_artist/About_Artist_4.jpg",
        alt: "Artist 4",
        content: "Priyanka has received numerous honors and awards for her exceptional work, including 'The Meritorious Performer Award' from Sri Parthasarathy Swami Sabha (2020), 'Yuva Kala Kovida' from Kala Sangha, USA (2019), and the 'Periya Sharadha Endowment' award from Sri Krishna Gana Sabha (2016). During the pandemic, Priyanka continued to perform actively through digital platforms and was featured in a podcast on Spotify for 'The Hindu Business Line, Stage Business'. She also answered Quora Tamil’s VIP questionnaire, showcasing her expertise and passion for the dance form."
    },
    {
        src: "/about_artist/About_Artist_5.jpg",
        alt: "Artist 5",
        content: "Priyanka has been involved in several noteworthy projects, including the award-winning dance film ‘Mahabharata’ by Navatman in 2021 and Sri. Ganesh Vasudeva's acclaimed Bharatanatyam adaptation of ‘Life of Pi’, which was praised by respected art critic Ms. Marina Harss of the New Yorker. In her spare time, Priyanka enjoys working as a professional makeup artist."
    }
]

const AboutArtist = () => {
    return (
        <div>
            <div className='bg-black flex h-auto relative flex-col py-20 mb-50'>
                <div className='mx-auto text-center'>
                    <div className='text-2xl  my-10 text-cream sm:text-3xl capitalize'>
                        <div> About the Artist</div>
                    </div>
                        <div className="text-xl text-cream leading-relaxed w-4/5 mx-auto">
                         <Carousel
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={10000}
                            transitionTime={1000}
                            centerSlidePercentage={100}
                         >
                            {CarouselHashMap.map((item, index) => (
                                <div key={index} className="flex gap-20 items-center justify-center">
                                    <div className="flex flex-col items-center justify-center flex-1">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={300}
                                            height={300}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="text-left text-cream sm:text-lg lg:text-xl leading-relaxed flex-1">
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                         </Carousel>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default AboutArtist
