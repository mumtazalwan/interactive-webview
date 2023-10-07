import React, { useEffect, useRef } from 'react'

function BgVideo({ src, isNight }) {
    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) {
            if (isNight) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [])

    return (
        <video
            ref={videoRef}
            src={src}
            autoPlay={true}
            loop
            muted
            className={`z-0 h-screen w-screen object-cover flex items-center justify-center transition__video`}
        ></video>
    )
}

export default BgVideo