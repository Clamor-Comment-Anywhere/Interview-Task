import React from 'react'
import style from "../../styles/components-styles/Card.module.css"
import Image from 'next/image'
import { Props } from '@/utils/utils'

export default function Card({imgSrc,imgAlt,subTitle,content}:Props) {
    return (
        <div className={style.card}>
            <Image src={imgSrc} width={75} height={75} alt={imgAlt} />
            <h4 className={style.subTitle}>{subTitle}</h4>
            <p className={style.content}>{content}</p>
        </div>
    )
}
