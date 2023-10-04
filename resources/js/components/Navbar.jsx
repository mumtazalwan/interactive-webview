import React, { useState, useEffect } from 'react'
import PlayIcon from '../../../public/assets/icons/play.svg'
import PauseIcon from '../../../public/assets/icons/pause.svg'
import PrevIcon from '../../../public/assets/icons/previous.svg'
import NextIcon from '../../../public/assets/icons/next.svg'
import VolumeUpIcon from '../../../public/assets/icons/volume-up.svg'
import MuteIcon from '../../../public/assets/icons/mute.svg'
import FullscreenIcon from '../../../public/assets/icons/fullscreen.svg';
import ExitFullscreenIcon from '../../../public/assets/icons/exit-fullscreen.svg';
import SettingsIcon from '../../../public/assets/icons/settings.svg';

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVolumeVisible, setIsVolumeVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const hours = date.getHours() % 12 || 12;
            const minutes = date.getMinutes();
            const ampm = date.getHours() < 12 ? 'AM' : 'PM';

            const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
            setCurrentTime(formattedTime);
        };

        const intervalId = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleVolume = () => {
        setIsVolumeVisible(!isVolumeVisible);
    };

    const toggleMute = () => {
        if (isMuted) {
            setVolume(50);
        } else {
            setVolume(0);
        }
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const toggleFullscreen = () => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    };

    const enterFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
        setIsFullscreen(true);
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullscreen(false);
    };

    return (
        <div className='bg-[#121212]/75 mx-5 rounded-lg border-2 border-white/[.2] backdrop-blur-xl'>
            <nav className="flex justify-between h-12 items-center px-4 text-white">
                <div>
                    {/* Jam sama Toggle */}
                    {currentTime}
                </div>
                <div className="flex items-center space-x-4">
                    <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md">
                        <img src={PrevIcon} alt="Prev Icon" />
                    </button>
                    <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md" onClick={togglePlayPause}>
                        {isPlaying ? (
                            <img src={PauseIcon} alt="Pause Icon" />
                        ) : (
                            <img src={PlayIcon} alt="Play Icon" />
                        )}
                    </button>
                    <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md">
                        <img src={NextIcon} alt="Next Icon" />
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md" onClick={toggleVolume}>
                        <img src={VolumeUpIcon} alt="Volume Icon" />
                    </button>
                    {isVolumeVisible && (
                        <div className="p-2 rounded-lg">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-36 h-3 bg-black rounded-lg"
                                style={{
                                    WebkitAppearance: 'none',
                                    appearance: 'none',
                                    height: '8px',
                                    background: 'linear-gradient(to right, #D9D9D9 0%, #D9D9D9 ' + volume + '%, #8E8E8E ' + volume + '%, #8E8E8E 100%)',
                                    outline: 'none',
                                }}
                            />
                        </div>
                    )}
                    <button className={`hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md ${isMuted ? 'border-2 border-[#F3A952]' : ''}`} onClick={toggleMute}>
                        <img src={MuteIcon} alt="Mute Icon" />
                    </button>
                    <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md" onClick={toggleFullscreen}>
                        {isFullscreen ? (
                            <img src={ExitFullscreenIcon} alt="Exit Fullscreen Icon" />
                        ) : (
                            <img src={FullscreenIcon} alt="Fullscreen Icon" />
                        )}
                    </button>
                    <button className="hover:bg-[hsla(0,0%,100%,.2)] hover:scale-105 transition-transform duration-300 ease-in-out p-1 rounded-md">
                        <img src={SettingsIcon} alt="Settings Icon" />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar