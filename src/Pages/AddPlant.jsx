import React, { useState } from "react";
import Header from "../componts/Header";
import { Button, Card, Row, Col, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addNewPlant } from "../service/Apicall";
import swal from 'sweetalert';
import { GiFireFlower } from "react-icons/gi";
function AddPlant({ plantData, setPlantData }) {
  const [previewImage, setPreviewImage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
    
  };

  const handleImageUrlChange = (e) => {
    const value = e.target.value;
    setPlantData({ ...plantData, image: value });
    setPreviewImage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewPlant(plantData);
    console.log("Plant Added:", plantData);
    swal("Success!", `${plantData.name} added successfully!`, "success");

    console.log(plantData);
    
    setPreviewImage("");
    navigate("/all");
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <Container className="py-5 bg-default">
        <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
          <Row className="g-0">
            {/* img Section */}
            <Col md={6}>
              <Card.Img
                src={
                  previewImage ||
                  "https://cdn.bloomsflora.com/uploads/product/bloomsflora/JUL2025/BasketArrangementofRosesOrchidsLilies-1753861178712.webp"
                }
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
                alt="Plant Preview"
              />
            </Col>

            <Col
              md={6}
              className="p-4 d-flex align-items-center"
              style={{ backgroundColor: "#f9fbe7" }}
            >
              <Card.Body>
                <Card.Title className="mb-4 text-success fw-bold fs-3 text-center">
                   Add a New Plant
                </Card.Title>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="plantName">
                    <Form.Label>Plant Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter plant name"
                      name="name"
                      value={plantData.name}
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
                      value={plantData.category}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="watering">
                    <Form.Label>Watering Frequency</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="date of watering "
                      name="waterSchedule"
                      value={plantData.waterSchedule}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="watering">
                    <Form.Label>Last Waterd Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Waterd Date"
                      name="lastWatered"
                      value={plantData.lastWatered}
                      onChange={handleChange}
                    />
                  </Form.Group>
                    <Form.Group className="mb-3" controlId="watering">
                    <Form.Label>Sunlight</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="low/medium/high sun light"
                      name="sunlight"
                      value={plantData.sunlight}
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
                      value={plantData.notes}
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
                      value={plantData.image}
                      onChange={handleImageUrlChange}
                    />
                  </Form.Group>

                  <div className="text-center mt-4">
                    <Button
                      variant="success"
                      type="submit"
                      disabled={!plantData.name}
                      className="px-4 py-2"
                      style={{ backgroundColor: "#009dffff", border: "none" }}
                    >
                      Add Plant
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default AddPlant;
