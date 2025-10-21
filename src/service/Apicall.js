import Commencall from "./Commencall";
// 'http://localhost:3000/plantsData'
const baseUrl='https://gardenserver.onrender.com/plantsData'
// to get all plants data
export const getPlants=async()=>{
    const res= await Commencall('GET',baseUrl,{})
    console.log(res);
    
    return res
}
// to get single plant data by id
export const getPlantById=async(id)=>{
    return await Commencall('GET',`${baseUrl}/${id}`,{})
}
// to add new plant data
export const addNewPlant=async(data)=>{
    return await Commencall('POST',baseUrl,data)
}
// to update plant data by id
export const updatePlantById=async(id,data)=>{
    const upd= await Commencall('PUT',`${baseUrl}/${id}`,data)
    console.log(upd);
    
    return upd
}
// to delete plant data by id
export const deletePlantById=async(id)=>{
    return await Commencall('DELETE',`${baseUrl}/${id}`,{})
}
// to search plant by name
export const searchPlantByName=async(name)=>{
    return await Commencall('GET',`${baseUrl}?name_like=${name}`,{})
}