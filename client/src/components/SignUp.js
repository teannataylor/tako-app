import React, { useState } from 'react'


function SignUp( {onLogin} ) {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirmation,setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [errors, setErrors] = useState([]);
    const [lastName, setLastName] = useState("");



        console.log(onLogin, 'helloy')
    
    const name = `${firstName} ${lastName}`


    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                email, 
                name,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((developer) => onLogin(developer));
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name:</label>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <label>Email Address:</label>
            <input
             type="text" 
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <label>Create Password:</label>
            <input
            type="password" 
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password Confirmation:</label>
            <input
            type="password" 
            id="password_confirmation"
            autoComplete="current-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button className='btn' type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            <label>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </label>
        </form>
    </div>
  )
}

export default SignUp