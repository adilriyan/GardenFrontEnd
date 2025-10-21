import React, { useEffect } from 'react';
import Header from '../componts/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getPlants } from '../service/Apicall';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import swal from 'sweetalert';
import '../componts/Boutton.css'
function ViewAll({ setEditID }) {
  const [plants, setPlants] = React.useState([]);
  const [searchPerformed, setSearchPerformed] = React.useState(false);

  useEffect(() => {
    getdata();
  }, []);

  const navigate = useNavigate();

  async function getdata() {
    const data = await getPlants();
    setPlants(data);
    setSearchPerformed(false);
  }

  const handleSearchResults = (results) => {
    setPlants(results);
    setSearchPerformed(true);
  };

  return (
    <div>
      <Header set={true} onSearchResults={handleSearchResults} />
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
                <Card style={{ margin: '15px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', borderRadius: '15px' }}>
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    style={{
                      height: '250px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '15px',
                      borderTopRightRadius: '15px'
                    }} 
                  />
                  <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{item.name}</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                      {item.notes}
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Button 
                       
                        className='PlantInfoBtn Info-border-reveal'
                        
                        onClick={() => { navigate('/plantInfo'); setEditID(item.id); }}
                      >
                        Details
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
  );
}

export default ViewAll;
