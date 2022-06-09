import React from 'react'
import Trademarkialogo from "../../assets/Trademarkia-logo.png"

function Header() {
    return (
        <div className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between bg-bgpurple max-w-full">
            <div className="mt-5">
                <div className="img" style={{ display: 'inline-block', paddingLeft: '10px', }}>
                    <img src={Trademarkialogo} alt="" width={30} height={30} />
                </div>
                <h1 className="font-extrabold text-textpurple px-12 -mt-8 tracking-wide text-2xl mb-3">
                    Invoice Generator
                </h1>
            </div>

            <section className="flex mt-10 flex-col items-end justify-end pr-8">
                <h2 className="text-xl font-extrabold">LegalForce RAPC Worldwide</h2>
                <p className="font-extrabold text-base"> +1 877-794-9511 </p>
                <p className="font-extrabold text-base">1580 West El Camino Real, Suite 10 <br />
                    Mountain View, California <br />
                    94040 - 2479 <br />
                    United States</p>
            </section>
        </div>
    )
}

export default Header