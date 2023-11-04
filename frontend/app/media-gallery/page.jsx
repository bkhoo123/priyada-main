"use client"
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import axios from "axios"
import Image from "next/image";
import { UserGlobalState } from '@/context/UserContext';
import {useRouter} from 'next/navigation';

const MediaGallery = () => {
    const router = useRouter()
    const [media, setMedia] = useState([])
    const [active, setActive] = useState("All Pictures")
    const { sessionUser, setSessionUser, authenticated, setAuthenticated} = UserGlobalState()
    const [isLoading, setIsLoading] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null)

    useEffect(() => {
        const fetchMedia = async () => {
            const mediaData = await axios.get("http://127.0.0.1:5000/api/media")
            setMedia(mediaData.data)
        }
        fetchMedia()
    }, [])


    useEffect(() => {
        if (!sessionUser) {
            alert("You are not authorized to view this page. Please login.")
            router.push("/login")
        }
    }, [sessionUser])

    const ArtistPictures = media?.filter(item => {
        return item.type === "Artist Pictures"
    })


    const DanceSchoolPictures = media?.filter(item => {
        return item.type === "Dance School Pictures"
    })

    const MakeUpPictures = media?.filter(item => {
        return item.type === "Makeup"
    })

    const CollaborationPictures = media?.filter(item => {
        return item.type === "Collaboration"
    })

    const Theatre_ActingPictures = media?.filter(item => {
        return item.type === "Theatre/Acting"
    })


    const hashtable = {
        "All Pictures": media,
        "Artist Pictures": ArtistPictures,
        "Dance School Pictures": DanceSchoolPictures,
        "Makeup": MakeUpPictures,
        "Collaboration": CollaborationPictures,
        "Theatre/Acting": Theatre_ActingPictures
    }

    useEffect(() => {

    }, [active])



    // filter
    // state management of which ones active
    // delete state management
    // delete button on each picture?


    // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px] rounded-sm"
    return (
        <>
            <NavBar />
            <div className=''>
                <div className="bg-black px-32">

                  {/* Dashboard for Media Gallery */}
                  <div className="fixed top-[30%] flex flex-col justify-center items-center self-center text-cream gap-3 py-10">
                    {/* <button className="p-4 bg-teal-950 rounded-md font-semibold text-xl flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-to-line"><path d="M5 3h14"/><path d="m18 13-6-6-6 6"/><path d="M12 7v14"/></svg>Upload Picture</button>
                    <button className="p-4 bg-teal-950 rounded-md font-semibold text-xl flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>Delete Picture</button> */}
                    <button className="mb-10 text-lightcream font-bold border-2 border-lightcream transition delay-200 ease-in  py-2 px-4 rounded-md cursor-pointer max-w-xs text-center sm:text-xl lg:text-2xl hover:bg-lightcream hover:text-black flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="9" x2="15" y1="15" y2="15"/></svg>Upload Media</button>
                    
                    <button
                        onClick={() => setActive("All Pictures")}
                        className={`p-4 text-xl font-semibold border-b-2 ${active === "All Pictures" ? "border-cream" : "border-transparent"} hover:border-cream transition-border duration-500 ease-in-out`}
                    >
                        All Pictures
                    </button>
                    <button
                        onClick={() => setActive("Artist Pictures")}
                        className={`p-4 text-xl font-semibold border-b-2 ${active === "Artist Pictures" ? "border-cream" : "border-transparent"} hover:border-cream transition-border duration-500 ease-in-out`}
                    >
                        Artist Gallery
                    </button>

                    <button
                        onClick={() => setActive("Dance School Pictures")}
                        className={`p-4 text-xl font-semibold border-b-2 ${active === "Dance School Pictures" ? "border-cream" : "border-transparent"} hover:border-cream transition-border duration-500 ease-in-out`}
                    >
                        Dance School Gallery
                    </button>

                    <button
                        onClick={() => setActive("Makeup")}
                        className={`p-4 text-xl font-semibold border-b-2 ${active === "Makeup" ? "border-cream" : "border-transparent"} hover:border-cream transition-border duration-500 ease-in-out`}
                    >
                        Makeup Gallery
                    </button>

                    <button
                        onClick={() => setActive("Collaboration")}
                        className={`p-4 text-xl font-semibold border-b-2 ${active === "Collaboration" ? "border-cream" : "border-transparent"} hover:border-cream transition-border duration-500 ease-in-out`}
                    >
                        Collaborating Gallery
                    </button>
                  </div>

                    {/* Dynamic Gallery */}

                    <div className="flex flex-col items-center ">
                        <div className="my-10 ml-40 flex space-x-10 items-center">
                            <span className="text-cream text-4xl font-semibold ">{active}</span>
                            
                        </div>
                        
                        
                        <div className="flex flex-wrap gap-4 space-y-2 space-x-2 justify-end">

                            {hashtable[active]?.map((item, index) => {
                                return (
                                    <div 
                                        key={index} 
                                        className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[auto]"
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <img src={item.url} layout="fill" objectFit="contain" className="rounded-md m-2 hover:scale-110 transition delay-400 ease-in" />
                                        {/* {hoveredItem === index && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button className="bg-white p-3 rounded-md" onClick={() => handleDelete(item.id)}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                                </button>
                                            </div>
                                        )} */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>



                </div>
                <Footer />
                <ChatBot />
            </div>
        </>
    )
}

export default MediaGallery;
