'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import title from '../../../public/title.png'

function Hero() {
    const videoRef = useRef();

    // Makes the video play 2 time faster
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);
  return (
    <section id='hero'>
        <h1>MacBook Pro</h1>
        <Image
            src={title}
            alt='MacBook Title'
        />

        <video 
            ref={videoRef}
            src='videos/hero.mp4'
            autoPlay
            muted
            playsInline
        />

        <button>Buy</button>

        <p>From $1599 or $133/month for 12 months</p>
    </section>
  )
}

export default Hero
