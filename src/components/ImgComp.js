import React from 'react'

export default function ImgComp({ src }) {

    const imgStyles = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain'
    }

    return (
        <div>
            <img src={src} alt='SliderImage' style={imgStyles} />
        </div>
    )
}
