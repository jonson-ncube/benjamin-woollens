import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddressForm.css'
import { updateInfo } from '../redux/user/userActions'

export default function AddressForm() {

    const dispatch = useDispatch()

    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [suburb, setSuburb] = useState('')
    const [province, setProvince] = useState('')
    const [postal, setPostal] = useState('')
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')

    const handleRadio = () => {
        dispatch(updateInfo('x'))
    }

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(updateInfo({
            street,
            house,
            suburb,
            province,
            postal,
            name,
            contact,
            email
        }))
    }

    return (
        <div className='addressForm'>
            <form className='addressFrom__container' onSubmit={handleForm}>
                <div className='address__container'>
                    <input className='address__input' type='text' required placeholder='Street Address' onChange={e => setStreet(e.target.value)} value={street} />
                    <input className='address__input' type='text' required placeholder='House/Unit No.' onChange={e => setHouse(e.target.value)} value={house} />
                    <input className='address__input' type='text' placeholder='City' onChange={e => setSuburb(e.target.value)} value={suburb} />
                    <input className='address__input' type='text' required placeholder='Province' onChange={e => setProvince(e.target.value)} value={province} />
                    <input className='address__input' type='text' required placeholder='Postal Code' onChange={e => setPostal(e.target.value)} value={postal} />
                </div>
                <div className='address__container'>
                    <input className='address__input' type='text' required placeholder='Full Name' onChange={e => setName(e.target.value)} value={name} />
                    <input className='address__input' type='text' required placeholder='Contact No.' onChange={e => setContact(e.target.value)} value={contact} />
                    <input className='address__input' type='email' required placeholder='Email Address' onChange={e => setEmail(e.target.value)} value={email} />
                    <input className='address__button' type='submit' value='Submit' />
                    <div className="radio_button">
                        <input type='radio' onClick={handleRadio} />
                        <p><small>Collect from store</small></p>
                    </div>
                </div>
            </form>
            {/* <div className="address__form">
                <p>{street}</p>
                <p>{house}</p>
                <p>{suburb}</p>
                <p>{province}</p>
                <p>{postal}</p>
                <p>{name}</p>
                <p>{contact}</p>
                <p>{email}</p>
            </div> */}
        </div>
    )
}
