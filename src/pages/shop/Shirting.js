import React from 'react'
import { useSelector } from 'react-redux'
import ShopComp from '../../components/ShopComp'

export default function Shirting() {

    const mapState = useSelector(state => state.shopState.shirting)

    return (
        <>
            <div className='bespoke__container'>
                <h2>ALL THINGS SHIRTING</h2>
                <div className="bespoke__copy">
                    <p>Shirting fabrics are predominantly made from cotton. There are various types of shirting weaves and fabrics available, this includes poplin, oxford, herringbone, twill and printed. there are also a large variety of qualities and patterns including plaid, check and plain fabrics.</p>
                    <p>Benjamin Woollens offers a wide range of Egyptian and Swiss Cottons for all your shirting requirements, be it casual or formal.</p>
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
