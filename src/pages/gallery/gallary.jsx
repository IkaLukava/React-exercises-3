import Header from '../../components/Header';
import HeaderImage from '../../images/help.webp';


import './gallary.css'

const gallary = () => {
  const gymLength = 15;
  const images=[];

  for(let i=1; i<=gymLength; i++ ){
    images.push(require(`../../images/gym${i}.jpg`))
  }
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus eveniet velit consectetur accusantium ratione repellat magni.
    </Header>
    <section className='gallery'>
      <div className="container gallery__container">
        {
          images.map((image,index) =>{
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default gallary