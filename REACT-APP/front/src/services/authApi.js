
import { API_URL, URL_LOGIN } from "../config";
import axios from "axios";
import jwrDecode from "jwt-decode"

async function authenticate(credentials){
    return await axios.get(`${API_URL}/api/users/1`, credentials)
    .then(res => {return res.data}).catch(err => {return err})
    // .then(data => {
    //     localStorage.setItem("authToken", data.jwt)
    //     localStorage.setItem("authToken", data.user.username)
    //     axios.defaults.headers["Authorization"] = "Bearer " + data.jwt
    //     console.log(jwtDecode(data.jwt))

    // })
}

function isAuthenticated(){
    const token = localStorage.getItem("authToken")

    if(token){
        const {exp: expiration} = jwrDecode(token)
    }

}

export default{
    authenticate
}