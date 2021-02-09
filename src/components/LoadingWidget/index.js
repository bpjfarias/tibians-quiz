import React from 'react'
import BloodCrab_3x from '../../../public/BloodCrab_3x.gif'
import BlueDjinn_3x from '../../../public/BlueDjinn_3x.gif'
import Bonelord_3x from '../../../public/Bonelord_3x.gif'
import Cyclops_3x from '../../../public/Cyclops_3x.gif'
import Demon_3x from '../../../public/Demon_3x.gif'
import Dragon_3x from '../../../public/Dragon_3x.gif'
import Ferumbras_3x from '../../../public/Ferumbras_3x.gif'
import GiantSpider_3x from '../../../public/GiantSpider_3x.gif'
import OrcBerserker_3x from '../../../public/OrcBerserker_3x.gif'
import Skeleton_3x from '../../../public/Skeleton_3x.gif'
import Slime_3x from '../../../public/Slime_3x.gif'

export default function LoadingWidget(){

  const LoadingImages = [
    BloodCrab_3x,
    BlueDjinn_3x,
    Bonelord_3x,
    Cyclops_3x,
    Demon_3x,
    Dragon_3x,
    Ferumbras_3x,
    GiantSpider_3x,
    OrcBerserker_3x,
    Skeleton_3x,
    Slime_3x,
]
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * (10 - 0) + 0)
  }

  return (

    <div 
      style={{
        width: "100%",
        paddingTop: "45px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
            <img
            src={LoadingImages[generateRandomNumber()]}
            alt="LoadingImage" />

    </div>

  )
}
