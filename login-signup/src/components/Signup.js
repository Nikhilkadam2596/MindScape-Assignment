import { useState } from "react"

const Signup = (props) => {
  
    const[email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
        <div className="form">
        <form className="registerform" onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" autoComplete="off" placeholder="Name" id="name" required/>
            <label  htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' id='email' required/>
            <label  htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title = "Min. 8 character, 1 uppercase character, 1 lowecase character and 1 number."/>
            <button type="submit">Submit</button>
        </form>
        <p>Already have an account ?</p>
        <button  type="submit" onClick={() => props.onSwitch('login')}>Log In</button>
        </div>
        
        
  )
}

export default Signup
