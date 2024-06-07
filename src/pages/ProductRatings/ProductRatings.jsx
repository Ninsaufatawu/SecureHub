import React from 'react'
import './ProductRatings.css'
import data from "../../Data/index.json";
import {VscLightbulbSparkle} from "react-icons/vsc"
import {FaAward} from "react-icons/fa"
import {SiTicktick} from "react-icons/si"
import {GrServices} from "react-icons/gr"


const iconMap = {
  VscLightbulbSparkle: VscLightbulbSparkle,
  FaAward: FaAward,
  SiTicktick: SiTicktick,
  GrServices: GrServices
};

export const ProductRatings = () => {
  return (
    <div className="product--rate--container">
        {data.ProductRatings.map((item, index) => {
          const IconComponent = iconMap[item.icon]; 
          return (
            <div key={index} className="product--rate">
              <div className='product--icon'>
                {IconComponent && <IconComponent />} {}
              </div>
              <div className='product--title'>{item.title}</div>
              <div className='product--description'>{item.description}</div>
            </div>
          );
        })}
      </div>
  )
}
