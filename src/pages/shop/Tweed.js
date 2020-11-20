import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Tweed() {

    const mapState = useSelector(state => state.shopState.tweed)

    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS TWEED</h2>
                <div className="bespoke__copy">
                    <p><strong>Please note prices specified are per meter and exclude VAT</strong></p>
                </div>
            </div>
            <div className="bespoke__body">
                {
                    mapState.map(item => (
                        <ShopComp
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            src={item.src}
                            price={item.price}
                            comp={item.comp}
                            color={item.color}
                            width={item.width}
                            recApp={item.recApp}
                            reCare={item.reCare}
                            proCode={item.proCode}
                            country={item.country}
                        />
                    ))
                }
            </div>
        </>
    )
}
