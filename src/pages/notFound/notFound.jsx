import { Link } from 'react-router-dom'
import './notFound.css'

const notFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Founded</h2>
        <Link to='/' className="btn">Go Back Home</Link>
      </div>
    </section>
  )
}

export default notFound