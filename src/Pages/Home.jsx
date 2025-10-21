import React from 'react';
import Header from '../componts/Header'; // Note: Fixed typo from 'componts' to 'components'
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GiFireFlower } from "react-icons/gi";
import { GiGardeningShears } from "react-icons/gi";
function Home() {
  const navigate = useNavigate();

  const tips = [
   "Water plants early in the morning or late evening to reduce evaporation.",
  "Group plants with similar sunlight and watering needs together.",
  "Use compost or organic fertilizer once a month.",
  "Check soil moisture before watering — avoid waterlogging.",
  "Rotate potted plants weekly for even sunlight.",
  "Clean leaves occasionally to help them breathe.",
  "Keep track of last watering dates for each plant.",
  ];

  return (
    <>
      <Header />
      <div className="garden-theme">

        <Container className="hero-section text-center ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://ksassets.timeincuk.net/wp/uploads/sites/56/2017/07/16-Wood-and-concrete-garden-small-garden-ideas-Annaick-Guitteny-.jpg"
              alt="garden"
              className="hero-image  shadow-lg mb-4"
              style={{height:'700px',borderRadius:'15px 50px',objectFit:'cover'}}
            />
            <h1 className="fw-bold hero-title">
            Welcome to Your Home Garden Tracker 
            </h1>
            <p className="mt-3 fs-5 hero-text">
              Track your plants, monitor their growth, and learn new gardening tips every day!
            </p>
            <Button
              variant="custom"
              className="custom-button mt-4 fw-semibold px-4 py-2 rounded-pill shadow-lg"
              style={{backgroundColor:'#0C969C'}}
              onClick={() => navigate('/all')}
            >
              View My Plant List
            </Button>
          </div>
        </Container>
        
  
        <div className="tips-section py-5">
          <Container>
            <h2 className="text-center mb-5 fw-bold tips-title text-dark"><GiGardeningShears className='Ions' /> Gardening Tips </h2>
            <div className="d-flex flex-wrap justify-content-center">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="tip-card m-3 p-4 rounded-4 shadow-lg text-center"
                >
                  <p className="mb-0 fw-medium">{tip}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        <div className="inspiration-section text-center py-5">
          <h2 className="fw-bold mb-4 inspiration-title"><GiFireFlower className='Ions'/> Grow Your Happiness </h2>
          <Container className="d-flex flex-wrap justify-content-center">
            {[
              "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
              "https://cbbcfocus.b-cdn.net/wp-content/uploads/2020/07/shutterstock_1105310459.jpg"
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`garden${i}`}
                className="inspiration-image m-3 rounded-4 shadow"
              />
            ))}
          </Container>
        </div>
      </div>

    </>
  );
}

export default Home;