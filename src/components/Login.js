import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({
    username: '',
    password: ''
})
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', form)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/bubble-page')
      })
      .catch(err => {
        console.log(err.message, 'Unable to login')
      })
  }

  const history = useHistory();

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  }, []);

  return (
      <div>
        <h1>
          Welcome to the Bubble App!
          <p>Build a login page here</p>
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:  </label>
          <input 
            type='textbox'
            name='username'
            placeholder='Username'
            onChange={handleChange}
          />
          <label htmlFor='password'>Username:  </label>
          <input 
            type='textbox'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.