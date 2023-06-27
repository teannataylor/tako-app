import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)

    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        setErrors([]);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({email, password})
        })
        .then((r) => {
            if(r.ok){
                r.json().then((developer) =>{ 
                onLogin(developer);
                navigate('/dashboard');
            })}
            else {
                r.json().then((err) => setErrors(err.errors))
            }

            setIsLoading(false);
        })
    }

  return (
    <div >
    <form onSubmit={handleSubmit}>
    <label >Email</label>
    <input
        htmlFor="email"
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <label>Password</label>
    <input
        htmlFor="password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
     <label>
        <input type="checkbox" checked={rememberMe} onChange={(e)=> setRememberMe(e.target.checked)} />
        Remember Me
      </label>
    
      <button className='btn' type="submit">{isLoading ? "Loading..." : "Login"}</button>
      <label>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </label>
    </form>
    </div>
  )
}

export default LoginForm


// is it possible to add a hover question mark
// for the Remember Me?