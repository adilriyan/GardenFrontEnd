import React, { useEffect } from 'react'
import Header from '../componts/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { getPlants, deletePlantById } from '../service/Apicall';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import swal from 'sweetalert';
function ViewAll({setEditID}) {
  const [plants, setPlants] = React.useState([]);
  const [searchPerformed, setSearchPerformed] = React.useState(false);
  
  useEffect(() => {
    getdata()
  }, [])
  
  const navigate = useNavigate()
  
  async function getdata() {
    const data = await getPlants()
    setPlants(data)
    setSearchPerformed(false)
  }

  async function handleDelete(id,name) {
    await deletePlantById(id)
     swal("Success!", `${name} Deleted essfully!`, "Error");
    getdata()
  }

  const handleSearchResults = (results) => {
    setPlants(results);
    setSearchPerformed(true);
  }
  
  return (
    <div>
        <Header set={true} onSearchResults={handleSearchResults}/>
        <Container>
          {searchPerformed && plants.length === 0 ? (
            <Alert variant="info" className="mt-3">
              No plants found matching your search. 
              <Button variant="link" onClick={getdata}>View all plants</Button>
            </Alert>
          ) : (
            <Row>
              {plants?.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Card style={{ margin: '15px' }} key={item.id}>
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      style={{
                        height: '250px',
                        objectFit: 'cover'
                      }} 
                    />
                    <Card.Body>
                      <Card.Title style={{color:'black'}}>{item.name}</Card.Title>
                      <Card.Text style={{color:'black'}}>
                        {item.notes}
                      </Card.Text>
                      <div className="d-flex flex-wrap gap-2 justify-content-center">
                        <Button 
                          variant="primary" 
                          style={{color:'white', borderRadius:'15px'}} 
                          onClick={()=>{navigate('/plantInfo'); setEditID(item.id)}}
                        >
                          Details
                        </Button>
                        <Button 
                          variant="warning" 
                          style={{color:'white', borderRadius:'15px'}} 
                          onClick={()=>{navigate('/edit'); setEditID(item.id)}}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="danger" 
                          style={{color:'white', borderRadius:'15px'}} 
                          onClick={()=>{handleDelete(item.id, item.name)}}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
    </div>
  )
}

export default ViewAll