import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Image from "next/image";

const CarouselHashMap = [
    {
        src: "/about_artist/About_Artist_3.jpg",
        alt: "Artist 1",
        content:
            "Priyanka Raghuraman is a passionate and talented multidisciplinary artist who is constantly exploring new creative territories. She is the founder and artistic director of Priyada Arts, a vibrant community in the Bay Area that welcomes and nurtures aspiring Bharatanatyam dancers from all backgrounds. Priyanka is also known for her original works that merge contemporary themes with the traditional art form, creating a mirror of our times that is both insightful and thought-provoking. As a trailblazing performer, choreographer, and teacher, Priyanka has earned a reputation for her exceptional skills in both “Nirtta” (pure dance movements) and “Abhinaya” (facial expressions used in storytelling).",
    },
    {
        src: "/about_artist/About_Artist_2.jpg",
        alt: "Artist 2",
        content:
            "She is a senior performer and faculty member of Anitha Guha's Bharathanjali and is currently pursuing Kuchipudi under the tutelage of Sr. Kasi Aysola. Priyanka has collaborated with some of the most reputable names in the US dance scene, including Nava Dance Theatre, Navatman, Abhinaya Dance Company, Prakriti Dance, and Bharata Dance Company.",
    },
    {
        src: "/about_artist/About_Artist_1.jpg",
        alt: "Artist 3",
        content:
            "Priyanka's early training began at age 4 under the guidance of her mother, Smt. Kamala Raghuraman, and later continued with Guru Kalaimamani Smt. Anitha Guha. As a professional soloist and graded artist with Doordarshan (India), Priyanka has toured and performed at prestigious venues across India, the USA, and Singapore. She has also worked as a professional television anchor, hosting over 100 television shows on national television, and as a theater actor, portraying titular roles in plays staged for the reputed National School of Drama (India).",
    },
    {
        src: "/about_artist/About_Artist_4.jpg",
        alt: "Artist 4",
        content:
            "Priyanka has received numerous honors and awards for her exceptional work, including 'The Meritorious Performer Award' from Sri Parthasarathy Swami Sabha (2020), 'Yuva Kala Kovida' from Kala Sangha, USA (2019), and the 'Periya Sharadha Endowment' award from Sri Krishna Gana Sabha (2016). During the pandemic, Priyanka continued to perform actively through digital platforms and was featured in a podcast on Spotify for 'The Hindu Business Line, Stage Business'. She also answered Quora Tamil’s VIP questionnaire, showcasing her expertise and passion for the dance form.",
    },
    {
        src: "/about_artist/About_Artist_5.jpg",
        alt: "Artist 5",
        content:
            "Priyanka has been involved in several noteworthy projects, including the award-winning dance film ‘Mahabharata’ by Navatman in 2021 and Sri. Ganesh Vasudeva's acclaimed Bharatanatyam adaptation of ‘Life of Pi’, which was praised by respected art critic Ms. Marina Harss of the New Yorker. In her spare time, Priyanka enjoys working as a professional makeup artist.",
    },
]
const AboutTheArtist = () => {
  return (
    <div className="bg-black text-cream min-h-screen">
      <NavBar />
      <div className="p-8">
        <div className="text-center text-cream text-2xl font-bold mb-15 gap-20">
          About the Artist
        </div>
        {CarouselHashMap.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap items-center justify-center m-8 relative ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
           <div className="image-wrapper rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="text-lg leading-7 bg-black bg-opacity-70 rounded-lg p-6">
                <p className="text-cream text-left text-lg gap-20">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutTheArtist;
