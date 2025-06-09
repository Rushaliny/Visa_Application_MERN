import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '8em' }}>
      <Container>
        {/* Hero Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h1 className="display-4">Welcome to AirVisa</h1>
            <p className="lead">
              Easily apply for your visa, check status, and get notified — all in one place.
            </p>
            <Button variant="primary" size="lg" href="/book">Start Application</Button>
          </Col>
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Travel Visa"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Info Section */}
        <Row className="text-center mb-4">
          <Col md={4}>
            <img src="https://cdn-icons-png.flaticon.com/512/3063/3063826.png" width="80" alt="Apply" />
            <h5 className="mt-3">Quick Application</h5>
            <p>Submit your visa request in just a few clicks.</p>
          </Col>
          <Col md={4}>
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" width="80" alt="Secure" />
            <h5 className="mt-3">Secure & Trusted</h5>
            <p>Your information is always safe and encrypted.</p>
          </Col>
          <Col md={4}>
            <img src="https://cdn-icons-png.flaticon.com/512/953/953934.png" width="80" alt="Track" />
            <h5 className="mt-3">Track Your Status</h5>
            <p>Get instant updates about your visa progress.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
