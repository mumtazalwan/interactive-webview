import React from 'react'
import { BsMusicNoteBeamed } from 'react-icons/bs';

function DisplayTrack({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <div className='absolute top-0 -translate-y-20'>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={handleNext}
            />
            <div className='flex items-center gap-5'>
                <BsMusicNoteBeamed color='black' />
                <div className='flex flex-col'>
                    <span className='text-sm text-black'>{currentTrack.title}</span>
                    <span className='text-xs text-black'>{currentTrack.artist}</span>
                </div>
            </div>
        </div>
    )
}

export default DisplayTrack