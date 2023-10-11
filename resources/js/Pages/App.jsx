import BgVideo from '@/components/BgVideo';
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

function App() {
    const [isNight, setIsNight] = useState(false);

    function handleTheme() {
        setIsNight(!isNight)
    }

    return (
        <>
            <div className={`video-container bg-black overflow-y-hidden`}>
                <div className={`transition__container__video absolute ${isNight ? 'opacity-100' : 'opacity-0'}`}>
                    <BgVideo
                        src="/assets/video/lofi-cozy-house-rainy-night-moewalls-com.mp4"
                        isNight={isNight}
                        autoPlay={isNight}
                    />
                </div>
                <div className={`transition__container__video absolute ${isNight ? 'opacity-0' : 'opacity-100'}`}>
                    <BgVideo
                        src="/assets/video/lofi-cozy-house-moewalls-com.mp4"
                        isNight={!isNight}
                        autoPlay={!isNight}
                    />
                </div>
                <Navbar handelTheme={handleTheme} />
            </div>
        </>
    )
}

export default App;
