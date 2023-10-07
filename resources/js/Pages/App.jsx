import Navbar from '@/components/Navbar'
import React, {useState, useEffect} from 'react'

function App() {

    const [isNight, setIsNight] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const timeoutIdRef = React.useRef();

    const handleTheme = (value, callback) => {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setInterval(() => {
            setIsNight(value);
            if (callback) {
                callback(); // Execute the callback when the transition is complete
            }
            setIsLoading(false); // Set loading to false after the transition
        }, 100);
    };

    return (
        <>
            <div className={`video-container ${isNight ? 'night' : 'day'}`}>
                <div className={`video-overlay ${isNight ? 'fade-in' : 'fade-out'}`}>
                    {isNight ? (
                        <video
                            src="/assets/video/lofi-cozy-house-rainy-night-moewalls-com.mp4"
                            autoPlay={true}
                            loop
                            muted
                            className="z-0 h-screen w-screen object-fill flex items-center justify-center"
                        ></video>
                    ) : (
                        <video
                            src="/assets/video/lofi-cozy-house-moewalls-com.mp4"
                            autoPlay={true}
                            loop
                            muted
                            className="z-0 h-screen w-screen object-fill flex items-center justify-center"
                        ></video>
                    )}
                </div>
            </div>
            <Navbar handelTheme={handleTheme}/>
        </>
    )
}

export default App;
