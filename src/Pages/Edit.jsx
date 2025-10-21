import React from 'react'
import Header from '../componts/Header'
import { useNavigate } from 'react-router-dom'
import { getPlantById ,updatePlantById} from '../service/Apicall';
import { Button, Card, Row, Col, Container, Form } from 'react-bootstrap';
import swal from 'sweetalert';
function Edit({editID}) {
const [data,setData]=React.useState({})
React.useEffect(() => {
    gaetdata()
}, [])
const navigation=useNavigate()
console.log(editID);

 const gaetdata=async () => {
   const res= await getPlantById(editID)
   console.log(res);
  setData(res)
   
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
    const handleSubmit = async (e) => {
      e.preventDefault();
      await updatePlantById(editID,data)
      console.log('Plant updated:', data);
        swal("Success!", `${data.name} Updated successfully!`, "success");
      navigation('/all')
    };
  return (
   <div style={{backgroundColor:'black'}}>
      <Header />
      <Container className="py-5 bg-default">
        <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
          <Row className="g-0">
            {/* img Section */}
            <Col md={6}>
              <Card.Img
                src={data?.image||'plant Image placeholder'}
                
                className="w-100 h-100"
                style={{
                  objectFit: 'cover',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out'
                }}
                alt="Plant Preview"
              />
            </Col>

   
            <Col
              md={6}
              className="p-4 d-flex align-items-center"
              style={{ backgroundColor: '#f9fbe7' }}
            >
              <Card.Body>
                <Card.Title className="mb-4 text-success fw-bold fs-3 text-center">
                   Update Your Plant Info
                </Card.Title>

                <Form onSubmit={handleSubmit}>
               
                  <Form.Group className="mb-3" controlId="plantName">
                    <Form.Label>Plant Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter plant name"
                      name="name"
                      value={data?.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  
                  <Form.Group className="mb-3" controlId="plantType">
                    <Form.Label>Plant Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g. Indoor, Outdoor, Succulent"
                      name="category"
                      value={data?.category}
                      onChange={handleChange}
                    />
                  </Form.Group>

             
                  <Form.Group className="mb-3" controlId="watering">
                    <Form.Label>Watering Frequency</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="date of watering "
                      name="waterSchedule"
                      value={data?.waterSchedule}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="watering">
                    <Form.Label>Last Waterd Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" Last Waterd Date "
                      name="lastWatered"
                      value={data?.lastWatered}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="watering">
                                      <Form.Label>Sunlight</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="low/medium/high sun light"
                                        name="sunlight"
                                        value={data?.sunlight}
                                        onChange={handleChange}
                                      />
                                    </Form.Group>

             
                  <Form.Group className="mb-3" controlId="notes">
                    <Form.Label>Additional Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write care tips or notes..."
                      name="notes"
                      value={data?.notes}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Image Upload / URL */}
                  <Form.Group className="mb-3" controlId="imageUpload">
                    {/* <Form.Label>Plant Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="mb-2"
                    /> */}
                    <Form.Control
                      type="text"
                      placeholder="paste dummy image URL"
                      name="image"
                      value={data?.image}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="text-center mt-4">
                    <Button
                      variant="success"
                      type="submit"
                      disabled={!data.name}
                      className="px-4 py-2"
                      style={{ backgroundColor: '#009dffff', border: 'none' }}
                    >
                      Update Plant
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>

  )
}

export default Edit