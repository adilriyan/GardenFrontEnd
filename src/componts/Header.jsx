import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { searchPlantByName } from '../service/Apicall';
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import'./Header.css'
function Header({ set, onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const results = await searchPlantByName(searchQuery);
        if (onSearchResults) {
          onSearchResults(results);
        }
      } catch (error) {
        console.error('Error searching plants:', error);
      }
    }
  };

  return (
    <Navbar expand="lg" className="bg-custom-navbar text-light">
      <Container fluid>
        <Navbar.Brand href='/' id='naveBrand'><GiPlantsAndAnimals className='Ions'/>Green Base</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft:'45%' }}
            navbarScroll
          >
            <Link to={"/"}  id='nave-text'>Home</Link>
            <Link to={'/addPlant'} id='nave-text' >Add your Plants</Link>
            <Link to={'/all'} id='nave-text'>Plants</Link>
          </Nav>
          {
            set && 
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search Plants"
                className="me-2 rounded-pill"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch   
                variant="outline-warning" 
              type="submit"
                style={{color: '#F9E65C', borderColor: '#F9E65C'}}
                className='Ions'
                onClick={handleSearch}
                />
                

            </Form>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;