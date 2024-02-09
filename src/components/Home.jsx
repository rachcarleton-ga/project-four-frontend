import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container ">
        <h1>
            Welcome to Destination Wanderlust!
        </h1> 
        <h3>
            Your digital diary of all the places you have been and all the places you dream of visiting
        </h3>

      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home