import React, { useState } from 'react';
import '../../App.css';
import './SignUpIn.css';


export default function SignIn()   {

  const [username, password] = useState('')
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     password: "",
  //     logged : false
  //   };
  //   console.log(this.props);
  //   this.onChangeUserName = this.onChangeUserName.bind(this);
  //   this.onChangePassword = this.onChangePassword.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);


// onChangeUserName(e) {
//   this.setState({
//     username: e.target.value
//   });
// }

// onChangePassword(e) {
//   this.setState({
//     password: e.target.value
//   });
// }

    return (
      <div class='sign-in'>
        <img src='' class="card-img" alt=''></img>
        <div class="img-overlay-signin">
          <div class="main-block">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card">
            </img>
            <form>
              <label id="icon" for="Username"><i class="fas fa-user"></i></label>
              <input value={username} type='text' class="form-control" placeholder="Username" aria-label="Username" required/>
              <label id="icon" for="Password"><i class="fas fa-unlock-alt"></i></label>
              <input value={password} type='password' class="form-control" placeholder="Password" aria-label="Password" required/>
              <p><a href='/'>Forgot password?</a></p>
              <div class="btn-block">
                <p>By clicking Sign in, you agree on our <a href='/'>Privacy Policy</a>.</p>
                <button class="btn-sub" type="submit" href="/">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
// }