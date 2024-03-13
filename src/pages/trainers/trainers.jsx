import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import {trainers} from '../../data';
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import './trainers.css'
import Trainer from '../../components/Trainer';

const Trainers = () => {
  return(
  <>
  <Header title="Our Trainers" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, maxime ipsam assumenda voluptates veniam et vitae rerum sequi amet
     officia reiciendis aliquid non sit illum temporibus deleniti ut saepe.
     Omnis autem eaque deserunt repellendus perspiciatis modi iusto. Unde, blanditiis modi.
  </Header>
  <section className='trainers'>
    <div className="container trainers__container">
      {
        trainers.map(({id, image, name, job, socials})=>{
          return<Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon:<AiFillInstagram/>, link : socials[0]},
              {icon:<AiOutlineTwitter/>, link : socials[1]},
              {icon:<FaFacebookF/>, link : socials[2]},
              {icon:<FaLinkedin/>, link : socials[3]}
            ]
          }/>
        })
      }
    </div>
  </section>
  </>
  )
}

export default Trainers