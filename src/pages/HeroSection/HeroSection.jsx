import './HeroSection.css'
import {FaPlayCircle} from "react-icons/fa"
import data from "../../Data/index.json"

export const HeroSection = () => {
  return (
    <div className="hero">
        <div className="hero--content">
          <div className="hero--text">
            <p className='hero--title'>Professional <br /> <span>Security Services <br />
            </span>
            You Can Trust
            </p>
            <p className="hero--content--text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur
              consectetur porro in eligendi doloribus quisquam modi expedita, 
              aspernatur culpa enim sunt est amet odit? Provident modi error voluptate rem.
            </p>
            <div className="hero--scores">

            </div>
          </div>
          
          <div className="hero--image">
           <div className="box">
              <div className='circle'>
                  <img src="./img/hero-image.jpg" alt="HeroImage" />
              </div>
           </div>
            <div className="play--btn">
                <div className="inner--play--btn">
                  <FaPlayCircle/>
                </div>
            </div>
          </div>
        </div>
        
        <div className="rate--container">
        {data.Users.map((item, index) => (
          <div key={index} className="rate--item">
            <div className='rate--title'>{item.title}</div>
            <div className='rate--description'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
