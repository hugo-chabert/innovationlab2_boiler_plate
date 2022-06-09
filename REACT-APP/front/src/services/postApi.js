
import { API_URL } from '../config'
import axios from 'axios';

async function getSinglePost(pathname){
    return await axios.get(`${API_URL}/api${pathname}`).then(res => {
        return res.data.data
    }).catch(err => {
        return err
    })
}

async function getPosts(){
    return await axios.get('http://localhost:1337/api/posts?populate=*').then(res => {
        return res.data.data
    }).catch(err => {
        return err
    })
}

export default{
    getSinglePost,
    getPosts
}