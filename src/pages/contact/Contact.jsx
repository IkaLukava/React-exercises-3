import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex necessitatibus impedit perspiciatis quisquam ea sed consequuntur aperiam inventore libero vel!
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='iraklilukava06@gmail.com' target='_blank' rel="noreferrer noopener"><MdEmail /></a>
          <a href='https://www.facebook.com/ika.lukava.77?mibextid=ZbWKwL' target='_blank' rel="noreferrer noopener"><FaFacebook /></a>
          <a href='https://www.instagram.com/lukava_ika/' target='_blank' rel="noreferrer noopener"><AiFillInstagram /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact