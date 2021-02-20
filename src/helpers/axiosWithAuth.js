import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token


export default function axiosWithAuth() {
    return axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      }
    });
  }