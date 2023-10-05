import React, { useState, useEffect, useRef } from 'react'
import VolumeUpIcon from '../../../public/assets/icons/volume-up.svg'
import VolumeLowIcon from '../../../public/assets/icons/volume-low.svg'
import VolumeOffIcon from '../../../public/assets/icons/volume-off.svg'
import MuteIcon from '../../../public/assets/icons/mute.svg'
import FullscreenIcon from '../../../public/assets/icons/fullscreen.svg';
import ExitFullscreenIcon from '../../../public/assets/icons/exit-fullscreen.svg';
import SettingsIcon from '../../../public/assets/icons/settings.svg';
import { tracks } from '@/datas/track'
import Controls from './Controls'
import DisplayTrack from './DisplayTrack'
import DarkModeToggle from './DarkModeToggle'
import ProgressBar from './ProgressBar'

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [isVolumeVisible, setIsVolumeVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(100);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef()
    const progressBarRef = useRef()

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

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
        setIsMuted(false);
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

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume, audioRef]);

    return (
        <div className='bg-[#121212]/75 rounded-lg border-2 border-white/[.2] backdrop-blur-xl w-[1440px] absolute right-0 left-0 bottom-0 mx-auto mb-5'>
            <nav className="flex justify-between h-12 items-center px-4 text-white">
                <div className='flex items-center gap-5'>
                    {currentTime}
                    <DarkModeToggle />
                </div>
                <DisplayTrack
                    currentTrack={currentTrack}
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}
                    handleNext={handleNext}
                />
                <Controls
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                    tracks={tracks}
                    trackIndex={trackIndex}
                    setTrackIndex={setTrackIndex}
                    setCurrentTrack={setCurrentTrack}
                    handleNext={handleNext}
                />
                <ProgressBar
                    progressBarRef={progressBarRef}
                    audioRef={audioRef}
                    timeProgress={timeProgress}
                    duration={duration}
                />
                <div className="flex items-center space-x-4">
                    <button className="w-8 h-8 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 ease-in-out p-1 rounded-md" onClick={toggleVolume}>
                        {volume < 1 ? (
                            <img src={VolumeOffIcon} alt="Mute Icon" />
                        ) : volume < 40 ? (
                            <img src={VolumeLowIcon} alt="Volume Icon" />
                        ) : (
                            <img src={VolumeUpIcon} alt="Volume Icon" />
                        )}
                    </button>
                    {isVolumeVisible && (
                        <div className="p-2 rounded-lg">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-36 h-3 bg-black rounded-lg volume__bar"
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
                    <button className={`w-8 h-8 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 ease-in-out p-1 rounded-md ${isMuted ? 'border-2 border-[#F3A952]' : ''}`} onClick={toggleMute}>
                        <img src={MuteIcon} alt="Mute Icon" />
                    </button>
                    <button className="w-8 h-8 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 ease-in-out p-1 rounded-md" onClick={toggleFullscreen}>
                        {isFullscreen ? (
                            <img src={ExitFullscreenIcon} alt="Exit Fullscreen Icon" />
                        ) : (
                            <img src={FullscreenIcon} alt="Fullscreen Icon" />
                        )}
                    </button>
                    <button className="w-8 h-8 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 ease-in-out p-1 rounded-md">
                        <img src={SettingsIcon} alt="Settings Icon" />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar