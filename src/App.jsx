import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PlantGrowth from './Pages/PlantGrowth'
import AddPlant from './Pages/AddPlant'
import Edit from './Pages/Edit'
import ViewAll from './Pages/ViewAll'
// import '../src/bootstrap.min.css'
import Footer from './componts/Footer'
import { useState } from 'react'
function App() {
     const [plantData, setPlantData] = useState({
    name: '',
    category: '',
    waterSchedule: '',
    sunlight:'',
    lastWatered: '',
    notes: "",
    image: ''
  });
  const [editID, setEditID] = useState();
  return (
   
   <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/edit' element={<Edit editID={editID}/>}/>
         <Route path='/addPlant' element={<AddPlant plantData={plantData} setPlantData={setPlantData}/>}/>
         <Route path='/plantInfo' element={<PlantGrowth editID={editID}/>}/>
         <Route path='/all' element={<ViewAll setEditID={setEditID}/>}/>
  
  
      </Routes>
      <Footer/>
   </>
  )
}

export default App