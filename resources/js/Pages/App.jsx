import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

function App() {
    const [isNight, setIsNight] = useState(false);

    function handleTheme() {
        setIsNight(!isNight)
    }

    return (
        <>
            <div className={`video-container bg-black`}>
                <div className={`transition__container__video absolute ${isNight ? 'opacity-100' : 'opacity-0'}`}>
                    <video
                        src="/assets/video/lofi-cozy-house-rainy-night-moewalls-com.mp4"
                        autoPlay={true}
                        loop
                        muted
                        className={`z-0 h-screen w-screen object-cover flex items-center justify-center transition__video ${isNight ? 'opacity-100' : 'opacity-0'}`}
                    ></video>
                </div>
                <div className={`transition__container__video absolute ${isNight ? 'opacity-0' : 'opacity-100'}`}>
                    <video
                        // src="/assets/video/lofi-cozy-house-moewalls-com.mp4"
                        src="/assets/video/lofi-cozy-house-rainy-day-moewalls-com.mp4"
                        autoPlay={true}
                        loop
                        muted
                        className={`z-0 h-screen w-screen object-cover flex items-center justify-center transition__video ${isNight ? 'opacity-0' : 'opacity-100'}`}
                    ></video>
                </div>
            </div>
            <Navbar handelTheme={handleTheme} />
        </>
    )
}

export default App;
