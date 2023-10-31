import React from 'react'
import { cardsContent } from '@/utils/utils'
import Card from './Card'
import style from '../../styles/components-styles/Card.module.css'
export default function Cards() {
    return (
        <div className={style.con}>
            <h2 className={style.conTitle}>Why Clamor?</h2>
            <div className={style.cardsCon}>

                {
                    cardsContent.map(({ imgSrc, imgAlt, subTitle, content }) => (
                        <Card imgSrc={imgSrc} imgAlt={imgAlt} subTitle={subTitle} content={content} key={subTitle} ></Card>
                    ))
                }


            </div>
        </div>

    )
}
