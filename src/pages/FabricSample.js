import React from 'react'
import './FabricSample.css'

import sample1 from '../assets/sample-1.jpg'
import sample2 from '../assets/sample-2.jpg'
import sample3 from '../assets/sample-3.jpg'
import sample4 from '../assets/sample-4.jpg'

export default function FabricSample() {

    return (
        <div className='fabrics__container'>
            <div className="fabrics__pics">
                <img src={sample1} alt="Sample-Fabrics" className="images" />
                <img src={sample2} alt="Sample-Fabrics" className="images" />
                <img src={sample3} alt="Sample-Fabrics" className="images" />
                <img src={sample4} alt="Sample-Fabrics" className="images" />
            </div>
            <h1>Fabrics Samples</h1>
            <div className="fabrics__copy">
                <p>Benjamin Woollens supplies samples for most of our fabrics. The sample may vary in size (approximately 5x8 cm) depending on the value of the fabric.
                Alternatively, please feel free to visit Benjamin Woollens where one of our sales professionals will provide you with a maximum of 10 samples free of charge.
                    To order samples please click the <span>‘order sample’</span>, button. For international customers, please contact customer service for sample requests.
                </p>
            </div>
        </div>
    )
}
