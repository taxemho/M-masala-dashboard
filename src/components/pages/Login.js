import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import masala from "./images/masala.png";

const Login = ({ onLogin, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiUrl = "http://172.22.9.59:3000/login";
    console.log('Attempting to log in with', { username: email, password });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password }), // Updated payload to match API requirements
      });

      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log('Response from API:', res);

      if (res.status === "200") { // Checking the status as a string
        setIsLoggedIn(true);
        onLogin();
        navigate('/home');
      } else {
        console.log('Authentication failed:', res.message);
        alert(res.message);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert("Auth failed");
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="gg-alin">
      <div className="text-center">
        <a href="../pages/Login.js" className="logo">
          <img src={masala} alt="" className="image1" />
        </a>
      </div>
      <br />
      <div className="card login-cxxr">
        <div className="card-body">
          <div className="p-3">
            <h5 className="m-b-5 text-center welcome-login">Welcome Back!</h5>
            <br />
            <form className="form-horizontal m-t-30" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group row m-t-20">
                <div className="col-sm-6">
                  <div className="login_submit">
                    <div className="p-1 remember_me">
                      <input type="checkbox" value="remember_me" id="remember_me" />
                      <span className="ms-2 p-1">Remember Me</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  <button className="btn-primary log-in-btn-1" type="submit">Log In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="m-t-40 text-center new-tag-login">
        <p>© 2024 Mobile Masala.</p>
      </div>
    </div>
  );
};

export default Login;
