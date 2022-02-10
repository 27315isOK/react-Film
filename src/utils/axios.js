import axios from "axios";

const All = axios.create({
    baseURL:'http://www.young1024.com:1234/'
})
// All.interceptors.response.use((res)=>{
//     return res.data
// })

export default All