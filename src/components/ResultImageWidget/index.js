import React from 'react'
import Dead_Human from '../../../public/Dead_Human.gif'
import ferumbras_hat from '../../../public/ferumbras_hat.png'

const LoadingImages = [
    ferumbras_hat,
    Dead_Human,
]


export default function ResultImageWidget({ index }) {

    return (

        <div
            style={{
                height: "65px",
                display: "flex",
                justifyContent: "center",
                maxWidth: "350px",
            }}
        >
            <img
                src={LoadingImages[index]}
                alt="ResultImage" />

        </div>
    )
}