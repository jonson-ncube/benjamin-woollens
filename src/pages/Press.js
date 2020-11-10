import React, { useState, useEffect, useRef } from 'react'
import './Press.css'
import radioAd from '../assets/5fm.png'
import audioSong from '../assets/audio.mpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Press() {

    const [songs] = useState(
        {
            title: 'Benjamin Woollens',
            artist: 'Radio Advert',
            img_src: radioAd,
            src: audioSong
        }
    )

    const audioEl = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {

        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    }, [])

    return (
        <div className='press__container'>
            <h1>Press</h1>
            <audio src={songs.src} ref={audioEl} ></audio>
            <div className="player">
                <h4>Playing now</h4>
                <div className="press__details">
                    <img src={songs.img_src} alt="Cover-image" className='cover__pic' />
                </div>
                <h3 className="details__title">{songs.title}</h3>
                <h4 className="details__artist">{songs.artist}</h4>
                <div className="player__controls">
                    <button className="play__btn">
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={() => setIsPlaying(!isPlaying)} />
                    </button>
                </div>
            </div>
        </div>
    )
}
