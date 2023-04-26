import './App.css';
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Tables from './features/Tables'

function App() {


  return (
    <div className="">
      <Row className="justify-content-md-center p-5">
        <Col>
          <div className="text-center bg-primary text-white mb-5 h1">
            Files List
          </div>
          <Tables />
        </Col>
      </Row>
    </div>
  );
}

export default App;