'use client'
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import SearchIcon from '@mui/icons-material/Search';
import ReorderIcon from '@mui/icons-material/Reorder';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function Hero() {
    return (
        <section
            className="bg-fixed relative h-screen bg-[url('/hero-bg.png')] bg-cover bg-center text-white flex items-center px-6 md:px-12 rounded-3xl">
            <div
                className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/40 to-transparent z-0 pointer-events-none"/>
            <div
                className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent z-0 pointer-events-none"/>
            <div
                className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/10 to-transparent z-0 pointer-events-none"/>
            <div
                className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/6 to-transparent z-0 pointer-events-none"/>

            <div className="max-w-3xl" data-aos="fade-up">
                <p className="text-sm tracking-widest text-green-400">// WELCOME TO KROSE.</p>
                <h1 className="text-5xl md:text-7xl font-light leading-tight mt-2">
                    Expert your life & <br/>
                    <span className="text-green-400 font-semibold">business coaching</span>
                </h1>

                <div className="mt-6 flex gap-4">
                    <button
                        className="cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                        Get In Touch →
                    </button>
                    <button
                        className="cursor-pointer bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-1000 transition duration-300">
                        Explore More →
                    </button>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  text-gray-500 pt-32"
                     data-aos="fade-up" data-aos-delay="200">
                    <div className='border-t-2 border-gray-300 flex pl-12 hover:border-green-400 delay-100'>
                        <p className="font-semibold"><LegendToggleIcon/> Tailored Coaching Solutions</p>
                    </div>
                    <div className='border-t-2 border-gray-300 flex pl-12 hover:border-green-400 delay-100'>
                        <p className="font-semibold"><SearchIcon/> Proven Coaching Techniques</p>
                    </div>
                    <div className='border-t-2 border-gray-300 flex pl-12 hover:border-green-400 delay-100'>
                        <p className="font-semibold"><ReorderIcon/> Holistic Life Coaching</p>
                    </div>
                    <div className='border-t-2 border-gray-300 flex pl-12 hover:border-green-400 delay-100'>
                        <p className="font-semibold"><PanoramaFishEyeIcon/> Flexible Client-Centered</p>
                    </div>
                    <div className='border-t-2 border-gray-300 flex pl-12 hover:border-green-400 delay-100'>
                        <p className="font-semibold"><WorkspacePremiumIcon/> Expert Guidance</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
