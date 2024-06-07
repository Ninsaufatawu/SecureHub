import React from 'react'
import './AboutUs.css'
import data from "../../Data/index.json"
import {FaThumbsUp} from "react-icons/fa"
import {RiCustomerService2Fill} from "react-icons/ri"
import {PiCertificateFill} from "react-icons/pi"

const iconMap = {
    FaThumbsUp: FaThumbsUp,
    RiCustomerService2Fill: RiCustomerService2Fill,
    PiCertificateFill: PiCertificateFill,
  };

export const AboutUs = () => {

    
  return (
    <div className="about--container">
        <div className="about--content">
            <div className='about--image'>
            <img src="./img/about.jpeg" alt="HeroImage" />
            </div>
            <div className='about--text--description'>
                <div className="about--title">
                    <span>About Us</span>
                </div>
                <div className="info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestiae dolorem id dicta
                     architecto a corporis? Fugiat fugit optio tempore praesentium vel aut,
                      laborum voluptatem temporibus sequi ducimus molestiae cum.
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                       Deserunt rerum voluptatibus ut ullam, impedit sint quidem nostrum, 
                       natus corporis exercitationem, neque consequuntur nulla ex.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolor.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur 
                       ullam labore dolorum fugiat impedit vel nemo sunt. Velit magnam, <br /> <br />
                        adipisci cumque eveniet assumenda explicabo libero ullam, nam qui fugit quia?

                        
                </div>
                <div className="secure--btn">
                    <button>Learn More</button>
                </div>
            </div>
            <div className="about--choice">
                <div className='about--choice--container'>
                    <div className=' choice--title'>
                        <span>Why Choose Us</span>
                    </div>
                    <div className="choice--title--description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Minus tempora quas nam aliquid mollitia in blanditiis sint earum,
                            
                        </p>
                    </div>
                    <div className="choice--container">
                        {data.Choice.map((item, index) => {
                        const IconComponent = iconMap[item.icon]; 
                        return (
                            <div key={index} className="choice--items">
                                <div className="coice--inline--items">
                                    <div className='choice--icon'>
                                        {IconComponent && <IconComponent />} {}
                                    </div>
                                    <div className='choice--title item--title'>{item.title}</div>
                                </div>
                                <div className='choice--description'>{item.description}</div>
                            </div>
                            );
                            })}
                    </div>
                </div>
            </div>
        </div>
        <div className="about--partners--container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est officia vero reprehenderit atque accusantium cum voluptatem magnam obcaecati libero id, numquam laudantium at animi velit aperiam. Mollitia voluptate maxime unde!</p>
        </div>
    </div>
  )
}
