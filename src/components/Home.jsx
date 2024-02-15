import { useNavigate } from 'react-router-dom'
import travelImage from '../images/travelImage.jpg'

const Home = ({ user}) => {
  let navigate = useNavigate()

  return (
    <div className="home-container ">
        <h1>
            Welcome to Destination Wanderlust {user?.userName}!
        </h1> 
        <h3>
            Your digital diary of all the places you have been and all the places you dream of visiting
        </h3>

      <section className="welcome-signin">
        <img src={travelImage} alt="travel image" className="travel-image"></img>
      </section>
    </div>
  )
}

export default Home