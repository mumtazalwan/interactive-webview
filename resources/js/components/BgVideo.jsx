import React, { useEffect, useRef } from 'react'

function BgVideo({ src, isNight, autoPlay }) {
    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) {
            if (isNight) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isNight]);

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay={autoPlay}
            loop
            muted
            className={`z-0 h-screen w-screen object-cover flex items-center justify-center transition__video`}
        />
    )
}

export default BgVideo