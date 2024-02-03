import { useState } from "react"


const Login = (props) => {

    const[email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[radio, setRadio]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
        <div className="form">
        <form className="loginform" onSubmit={handleSubmit}>
            <h2>Login</h2> 
            
            <div className="radio">
                <label htmlFor="user">User</label>
                <input value={radio} name="radio" onClick={(e) => setRadio(e.target.value)} type="radio" id="user"/>
                <label htmlFor="admin">Admin</label>
                <input value={radio} name="radio" onClick={(e) => setRadio(e.target.value)} type="radio" id="admin"/>
                <label htmlFor="client">Client</label>
                <input value={radio} name="radio" onClick={(e) => setRadio(e.target.value)} type="radio" id="client"/>
            </div>

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' autoComplete="off" id='email' required/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password'/>
            <button type="submit">Log In</button>
        </form>
        <p>Don't have an account ?</p>
        <button  type="submit" onClick={() => props.onSwitch('signup')}>Sign Up</button>
        </div>
        
  )
}

export default Login
