import React from 'react'
import Image from 'next/image'
import AnimatedText from './AnimatedText'

const SplashPagePicture = () => {
  return (
    <div className="flex items-center justify-center">
      {/* w-[100%] h-[100vh] bg-cover bg-[url('/splash_pic.JPG')] */}

      <div className=" text-white mb-32 flex-1 text-center flex flex-col gap-4">
        <div className="text-5xl flex flex-row">
          {/* <AnimatedText timer={100}  message={"PRIYANKA RAGHURAMAN"} /> */}
          <div className='font-bold ml-20 lg:ml-40 mr-3'>Priyanka</div>
          <div className=''>Raghuraman</div>
        </div>
        <div className="text-3xl">
          {/* BHARATHANATYAM EXPONENT */}
          <AnimatedText timer={50}  message={"Bharathanatyam Artist"} />
        </div>
      </div>

      <div className="flex-1 h-screen">
        <Image
          src="/splash_pic.JPG"
          alt="Splash Page Picture"
          // objectFit="cover"
          height={1000}
          width={600}

          // layout="fill"
          className="mt-10 rounded-sm fixed top-0 left-50 right-50 bg-center top"
        />
      </div>
    </div>
  )
}

export default SplashPagePicture
