import React from 'react';
import { useState } from 'react';
import '../../App.css'; 
import './SignUpIn.css';


export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (
      <div className='sign-up'>
        <img src='' class="card-img" alt=''></img>
        <div class="img-overlay">
          <div class="main-block">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"/>
              <form>
                <label id="icon" for="Username"><i class="fas fa-user"></i></label>
                <input 
                  type='text' 
                  class="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label id="icon" for="Email"><i class="fas fa-envelope"></i></label>
                <input   
                  type='text' 
                  class="form-control" 
                  placeholder="Email" 
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label id="icon" for="Password"><i class="fas fa-unlock-alt"></i></label>
                <input   
                  type='password' 
                  class="form-control" 
                  placeholder="Password" 
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>Already have an account?<a href="/sign-in"> Sign in</a> here.</p>
                <div class="btn-block">
                  <p>By clicking Submit, you agree on our <a href='/'>Privacy Policy</a>.</p>
                  <button class="btn-sub">Register</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
}
