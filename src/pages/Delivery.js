import React from 'react'
import './Delivery.css'


export default function Delivery() {
    return (
        <div className='delivery__container'>
            <h2>DELIVERY INFORMATION</h2>
            <div className="deliver__copy">
                <h3>South African Deliveries</h3>
                <p>We are proud to offer FREE South African delivery on all orders over <span>R 4000.00</span>. Free delivery will be calculated at checkout.</p>
                <p>South African delivery costs to major cities will be a flat rate of <span>R160.00</span> excluding VAT. All orders will be sent by <span>Fastway Couriers</span> and will
                require a signature on receipt. Your goods will be delivered within 2 - 3 working days from day of dispatch.</p>
                <p>We aim to get your parcels delivered to you within the time stated on our website, however at times there may be delays which are beyond our control
                caused by our approved third parties and suppliers. For your convenience, you will be notified by email letting you know the whereabouts of your order. </p>
                <p>South African customers can track their parcels at <span>www.fastwaycouriers.co.za</span> by entering the parcel number which will be allocated to you upon dispatch of your order.</p>
                <p>No orders will be dispatched between the 15 December and 15 January (Annual Holidays), as well as South African public holidays and weekends.</p>

                <h3>Deliveries Outside South Africa</h3>
                <p>International customers should contact Benjamin Woollens directly if they wish to place any orders. </p>
                <p>please email <a href='mailto:info@benjaminwoollens.co.za' >info@benjaminwoollens.co.za</a></p>
            </div>
        </div>
    )
}
