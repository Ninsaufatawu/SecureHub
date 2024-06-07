import React from 'react'
import data  from '../../Data/index.json'
import './Services.css'
import {FaCameraRetro,FaRegBell} from "react-icons/fa"
import { SiThunderstore } from "react-icons/si";


const iconMap = {
    FaCameraRetro: FaCameraRetro,
    FaRegBell: FaRegBell,
    SiThunderstore: SiThunderstore
}

export const Services = () => {
  return (
    <div className="services--container">
        <div className='services--content'>
            <div className="services--title--container">
                <div className="servicese--title">
                    <h3>We Provide The <br /> Best Services</h3>
                </div>
                <div className="services--title--description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis nisi quo amet dicta aut doloribus pariatur 
                        iure necessitatibus deleniti rem consequuntur non.  
                    </p>
                    <button>Learn more</button>
                
                </div>
            </div>
            <div className="services--info">
                {data.Services.map((item, index) =>{
                    const IconComponent = iconMap[item.icon]

                    return(
                        <div key={index} className="services--info--content">
                            <div className="services--info--icon">
                                {IconComponent && <IconComponent/>}
                            </div>
                            <div className=' services--info--title'>{item.title}</div>
                            <div className='services--info--description'>{item.description}</div>
                           <div className='services--info--button'>
                                <div className=" services--info--button--content">
                                    {item.link}
                                </div>
                           </div>
                        
                         </div>
                    );
                    
                })}
                    
            </div>
        </div>
    </div>
  )
}
