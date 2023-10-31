import Image from 'next/image'
import React from 'react'
import style from "../../styles/components-styles/LastSec.module.css"

export default function LastSec() {
    return (
        <div className={style.con}>
            <p>Explore our browser extension that adds a personal touch to your web experience. Share your thoughts on any page and who knows? Maybe you’ll find some helpful tips or tricks as well.</p>
            <Image src="/assets/clamor.png" alt='clamor screen shot' width={400} height={330} />
        </div>
    )
}
