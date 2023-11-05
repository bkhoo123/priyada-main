import Link from 'next/link';

const ShortBio = () => {
    return (
        <div className="bg-black text-cream items-center flex w-100% h-8% relative flex-col justify-between">
            <div className="mb-8 text-left text-cream sm:text-lg lg:text-xl max-w-7xl">
                Priyada Arts, the community founded by Priyanka, is a welcoming and inclusive space for all who wish to learn and explore Bharatanatyam. The name 'Priyada' is derived from Sanskrit, and it means 'with love' (Priya=Love Da=with). True to its name, Priyada Arts is a place of warmth, creativity, and empathy.
            </div>

            <button className='text-cream font-bold border-2 border-cream hover:bg-cream hover:text-black transition delay-200 ease-in  py-2 px-4 rounded-md cursor-pointer max-w-xs text-center sm:text-xl lg:text-2xl'><Link href="/about/artist">Learn More</Link></button>
        </div>
    )
};

export default ShortBio;
