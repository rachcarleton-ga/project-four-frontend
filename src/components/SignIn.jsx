import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    navigate('/')
  }

  return (
    <div className="signin-container">
      <div className="card-overlay centered">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} name="email" type="email" placeholder="example@example.com" value={formValues.email} required/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" name="password" placeholder="1234password" value={formValues.password} required/>
          </div>
          <button className="signin-button" disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
