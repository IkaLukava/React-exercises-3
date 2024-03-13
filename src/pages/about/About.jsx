import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/helpbro.jpg';
import coolBro from '../../images/helpwoman1.jpg';
import gymbro3 from '../../images/helpwomanbro.avif';
import './about.css';

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage} className="firstOne">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur labore vitae recusandae quaerat obcaecati eius nemo. Ut, possimus quaerat.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Our Story Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam voluptatem labore quos quasi ea illo minus.
             Aperiam quis quae mollitia, voluptatum officia et accusamus nam dolorum doloremque saepe tempore commodi dolor numquam repudiandae illum perferendis expedita aut cupiditate? Repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi iusto quasi aut. Blanditiis,
             officia quia? Inventore ab eaque molestiae accusantium provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad voluptatem dolorem aliquid blanditiis quidem harum quis ipsa?
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad enim laborum in harum aut quis repudiandae, omnis ducimus ab officia recusandae accusamus, molestiae placeat.
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur laudantium, impedit quos dolore voluptatibus voluptatum placeat eveniet ipsam architecto sed ea labore facilis 
           sapiente assumenda perspiciatis totam distinctio iste harum rem nam vel molestias? Pariatur nostrum vitae 
          </p>
        </div>
        <div className="about__section-image">
          <img src={coolBro} alt='Our Story Image'/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={gymbro3} alt='Our Story Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam voluptatem labore quos quasi ea illo minus.
             Aperiam quis quae mollitia, voluptatum officia et accusamus nam dolorum doloremque saepe tempore commodi dolor numquam repudiandae illum perferendis expedita aut cupiditate? Repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi iusto quasi aut. Blanditiis,
             officia quia? Inventore ab eaque molestiae accusantium provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad voluptatem dolorem aliquid blanditiis quidem harum quis ipsa?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About