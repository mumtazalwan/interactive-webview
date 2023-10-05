import React, { useCallback, useEffect, useState, useRef } from 'react'
import PlayIcon from '../../../public/assets/icons/play.svg'
import PauseIcon from '../../../public/assets/icons/pause.svg'
import PrevIcon from '../../../public/assets/icons/previous.svg'
import NextIcon from '../../../public/assets/icons/next.svg'

function Controls({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const playAnimationRef = useRef();

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
        }
    };

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    return (
        <>
            <div className="flex items-center space-x-4 w-fit absolute left-0 right-0 mx-auto">
                <button className="w-7 h-7 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 p-1 rounded-md" onClick={handlePrevious}>
                    <img src={PrevIcon} alt="Prev Icon" />
                </button>
                <button className="w-7 h-7 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 p-1 rounded-md" onClick={togglePlayPause}>
                    {isPlaying ? (
                        <img src={PauseIcon} alt="Pause Icon" />
                    ) : (
                        <img src={PlayIcon} alt="Play Icon" />
                    )}
                </button>
                <button className="w-7 h-7 hover:bg-[hsla(0,0%,100%,.2)] hover:scale-125 transition-transform duration-300 ease-in-out p-1 rounded-md">
                    <img src={NextIcon} alt="Next Icon" onClick={handleNext} />
                </button>
            </div>
        </>
    )
}

export default Controls