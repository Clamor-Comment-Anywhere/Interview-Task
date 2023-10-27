import React from 'react'
import style from "../../styles/components-styles/Hero.module.css"
import Image from 'next/image'

export default function Hero() {
    return (
        <div className={style.heroCon}>
            <div className={style.subCon}>
                <h1 className={style.heroHeader}>
                    Comment
                    <span> Anywhere
                    </span> with Clamor
                    A Private, Anonymous Web Layer
                </h1>

                <span className={style.txtCon}>
                    <p className={style.heroTxt}>It's your voice, everywhere. Join us in making the web truly</p>
                    <a href="#" className={style.link}>conversational.</a>
                </span>

                <a href='#' className={style.btn}>Get Clamor Now</a>
                <div className={style.browsers}>
                    <Image width={42} height={42} alt='chrome' src="/assets/chrome.svg" />
                    <Image width={42} height={42} alt='firefox' src="/assets/firefox.svg" />
                    <Image width={42} height={42} alt='edge' src="/assets/edge.svg" />
                </div>
            </div>

        </div>
    )
}
