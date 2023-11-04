import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./artist.css";
import ChatBot from "@/components/ChatBot";

const AboutArtist = () => {
    return (
        <div>
            <div className='artist-page pb-[10%]'>
                <NavBar/>
                <div className='artist-page-content'>
                    <div className='artist-page-title font-elsie'>
                        <div>About the Artist</div>
                    </div>
                        <div className="artist-page-text">
                            <p>
                                Priyanka Raghuraman is a passionate and talented multidisciplinary artist who is constantly exploring new creative territories. She is the founder and artistic director of <strong>Priyada Arts</strong>, a vibrant community in the Bay Area that welcomes and nurtures aspiring Bharatanatyam dancers from all backgrounds. Priyanka is also known for her original works that merge contemporary themes with the traditional art form, creating a mirror of our times that is both insightful and thought-provoking. As a trailblazing performer, choreographer, and teacher, Priyanka has earned a reputation for her exceptional skills in both “Nirtta” (pure dance movements) and “Abhinaya” (facial expressions used in storytelling).
                            </p>

                            <p>
                                She is a senior performer and faculty member of Anitha Guha's Bharathanjali and is currently pursuing Kuchipudi under the tutelage of Sr. Kasi Aysola. Priyanka has collaborated with some of the most reputable names in the US dance scene, including Nava Dance Theatre, Navatman, Abhinaya Dance Company, Prakriti Dance, and Bharata Dance Company.
                            </p>

                            <p>
                                Priyanka's early training began at age 4 under the guidance of her mother, Smt. Kamala Raghuraman, and later continued with Guru Kalaimamani Smt. Anitha Guha. As a professional soloist and graded artist with Doordarshan (India), Priyanka has toured and performed at prestigious venues across India, the USA, and Singapore. She has also worked as a professional television anchor, hosting over 100 television shows on national television, and as a theater actor, portraying titular roles in plays staged for the reputed National School of Drama (India).
                            </p>

                            <p>
                                Priyanka has received numerous honors and awards for her exceptional work, including 'The Meritorious Performer Award' from Sri Parthasarathy Swami Sabha (2020), 'Yuva Kala Kovida' from Kala Sangha, USA (2019), and the 'Periya Sharadha Endowment' award from Sri Krishna Gana Sabha (2016). During the pandemic, Priyanka continued to perform actively through digital platforms and was featured in a podcast on Spotify for 'The Hindu Business Line, Stage Business'. She also answered Quora Tamil’s VIP questionnaire, showcasing her expertise and passion for the dance form.
                            </p>

                            <p>
                                Priyanka has been involved in several noteworthy projects, including the award-winning dance film ‘Mahabharata’ by Navatman in 2021 and Sri. Ganesh Vasudeva's acclaimed Bharatanatyam adaptation of ‘Life of Pi’, which was praised by respected art critic Ms. Marina Harss of the New Yorker. In her spare time, Priyanka enjoys working as a professional makeup artist.
                            </p>
                        </div>
                    </div>
                </div>
            <Footer/>
            <ChatBot/>
        </div>
    )
}
export default AboutArtist
