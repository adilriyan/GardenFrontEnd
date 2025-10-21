import React from "react";
import Header from "../componts/Header";
import { Container, Table, Image, Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPlantById, deletePlantById } from "../service/Apicall";  
import { GiPlantSeed } from "react-icons/gi";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";
function PlantGrowth({editID}) {
 const [plant, setPlant] = React.useState({});
  const navigate=useNavigate()
  React.useEffect(() => {
    fetchPlantInfo();
  }, [])
  
async function fetchPlantInfo() {
  const data = await getPlantById(editID);
  console.log(data);
  setPlant(data);
}
  async function handleDelete(id,name) {
    await deletePlantById(id)
     swal("Success!", `${name} Deleted essfully!`, "Error");
   navigate('/all')
  }

  return (
    <div>
      <Header />

      <Container className="my-5">

        <div className="text-center mb-4">
          <Card.Img
            variant="top"
            src={plant.image}
            alt={plant.name}
            style={{
              maxWidth: "400px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}

          />
        </div>

        <Table striped bordered hover responsive className="shadow-sm">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{plant.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{plant.name}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{plant.category}</td>
            </tr>
            <tr>
              <th>Water Schedule</th>
              <td>{plant.waterSchedule}</td>
            </tr>
            <tr>
              <th>Sunlight</th>
              <td>{plant.sunlight}</td>
            </tr>
            <tr>
              <th>Last Watered</th>
              <td>{plant.lastWatered}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{plant.notes}</td>
            </tr>
          </tbody>
          <tfoot >
            <GiPlantSeed  onClick={()=>{navigate('/all')}} className="Ions infos-icon"/>
              <TiEdit onClick={()=>{navigate('/edit')}} className="Ions infos-icon"/>
                <MdDelete   onClick={()=>{handleDelete(plant.id, plant.name)}} className="Ions infos-icon"/>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
}

export default PlantGrowth;
