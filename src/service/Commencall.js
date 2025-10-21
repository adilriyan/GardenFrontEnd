import axios from "axios";
export const getPlants=async(method,url,data)=>{
    const config={
        method,
        url,
        data
    }
    return await axios(config).then((res)=>
        {
            return res.data
        }).catch((err)=>{
            return err
        })
}
export default getPlants