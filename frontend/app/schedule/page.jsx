"use client";
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import DanceRegistrationButton from '@/components/DanceRegistrationButton';
import Background from "./ClassesBackground.jpg"

const Classes = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    return (
        <>
            <div className="relative min-h-screen">
                <NavBar/>
                <div className="absolute inset-0 bg-center bg-contain opacity-50 z-0" style={{ backgroundImage: `url(https://i.imgur.com/16Qo4hh.jpg)` }}></div>
                <div className="relative z-10">
                    <div className="text-[#fef3c7] h-auto text-center py-12">
                        <h1 className="sm:text-2xl lg:text-4xl">CLASSES</h1>
                    </div>

                    <div className="text-[#fef3c7] flex justify-center mx-20">
                        <div className="flex-1 flex flex-col items-center font-semibold gap-32">
                            <div className="sm:text-xl lg:text-2xl">Monday</div>
                            <div className="sm:text-xl lg:text-2xl">Tuesday</div>
                            <div className="sm:text-xl lg:text-2xl">Wednesday</div>
                            <div className="sm:text-xl lg:text-2xl">Thursday</div>
                            <div className="sm:text-xl lg:text-2xl">Friday</div>
                            <div className="sm:text-xl lg:text-2xl">Saturday</div>
                        </div>

                        <div className="flex-1 flex flex-col gap-12 sm:text-lg lg:text-xl">
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Beginnner</span>
                                    <span className="w-24 text-center">5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Intermediate</span>
                                    <span className="w-24 text-center">6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Adults (Senior)</span>
                                    <span className="w-24 text-center">7:00 PM</span>
                                </div>

                                {/* More schedules for Monday if needed */}
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Beginnner</span>
                                    <span className="w-24 text-center">5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Intermediate</span>
                                    <span className="w-24 text-center">6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Advanced</span>
                                    <span className="w-24 text-center">7:00 PM</span>
                                </div>
                                {/* More schedules for Tuesday if needed */}
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex justify-between">
                                        <span className="w-40 text-center">Beginnner</span>
                                        <span className="w-24 text-center">5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="w-40 text-center">Intermediate</span>
                                        <span className="w-24 text-center">6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="w-40 text-center">Advanced</span>
                                        <span className="w-24 text-center">7:00 PM</span>
                                    </div>
                                {/* More schedules for Wednesday if needed */}
                            </div>
                            <div className="flex flex-col items-center gap-4">
                            <div className="flex justify-between">
                                    <span className="w-40 text-center">Beginnner</span>
                                    <span className="w-24 text-center">5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Intermediate</span>
                                    <span className="w-24 text-center">6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Advanced</span>
                                    <span className="w-24 text-center">7:00 PM</span>
                                </div>
                                {/* More schedules for Thursday if needed */}
                            </div>
                            <div className="flex flex-col items-center gap-4">
                            <div className="flex justify-between">
                                    <span className="w-40 text-center">Beginnner</span>
                                    <span className="w-24 text-center">5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Intermediate</span>
                                    <span className="w-24 text-center">6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Advanced</span>
                                    <span className="w-24 text-center">7:00 PM</span>
                                </div>
                                {/* More schedules for Friday if needed */}
                            </div>
                            <div className="flex flex-col items-center gap-4">
                            <div className="flex justify-between">
                                    <span className="w-40 text-center">Beginnner</span>
                                    <span className="w-24 text-center">5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Intermediate</span>
                                    <span className="w-24 text-center">6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="w-40 text-center">Advanced</span>
                                    <span className="w-24 text-center">7:00 PM</span>
                                </div>
                                {/* More schedules for Saturday if needed */}
                            </div>
                        </div>
                    </div>
                    <DanceRegistrationButton/>
                </div>
            </div>
            <Footer/>
            <ChatBot />
        </>
    );
};

export default Classes;
