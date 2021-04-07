import axios from "axios";


const KEY='AIzaSyAjzizrdrMUl9GZoO2PHfLTJ4cXoiOQiRc';
const youtube=axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
   
});

export default youtube;