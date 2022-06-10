
import { API_URL, URL_LOGIN } from "../config";
import axios from "axios";
import jwrDecode from "jwt-decode"

async function authenticate(id){
    return axios.get(`${API_URL}/api/users/${id}`)
    .then(res => {return res.data}).catch(err => {return err})
}

function isAuthenticated(){
    const token = localStorage.getItem("authToken")

    if(token){
        const {exp: expiration} = jwrDecode(token)
    }

}

function register(username, email, password){
    axios
    .post('http://localhost:1337/api/auth/local/register', {
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
    })
    .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
    })
    .catch(error => {
        console.log('An error occurred:', error.response);
    });
}

async function login(username, password){
    axios
    .post('http://localhost:1337/api/auth/local', {
        identifier: `${username}`,
        password: `${password}`,
    })
    .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem("authToken", response.data.jwt)
        localStorage.setItem("id", response.data.user.id)
        axios.defaults.headers["Authorization"] = "Bearer " + response.data.jwt
    })
    .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
    });
}

export default{
    authenticate,
    register,
    login
}