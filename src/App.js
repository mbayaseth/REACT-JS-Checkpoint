import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardItems } from "./data";
import {
  Navbar,
  Form,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

const App = () => (
  <Fragment>
    <div className="App">
      {/* React-Bootstrap Navbar is here */}
      <div
        className="p-3 mlr-3"
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.15) 20px 25px 25px",
        }}
      >
        <Navbar className="container">
          <Navbar.Brand href="#home" className="h2 text-center">
            {/* logo is here */}
            <img
              style={{ height: "70px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdr45ydeHoazjWIgwjd0WYm1OZr2ybPDmHw&usqp=CAU"
              alt="Nabar logo"
            />{" "}
          </Navbar.Brand>
          {/* The flex navbar text is here */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="h3 text-primary">
              <a href="#login"> Bookmark Us</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* -------------------------------- */}

      {/* React-bootstrap cards is here */}
      <Container>
        <Row className="mt-4 g-5">
          <h1>React Bootstrap</h1>
          {cardItems.map((item) => (
            <Col
              key={item.cardTitle}
              className=" d-flex justify-content-center algin-items-stretch"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img src={item.img} alt={item.cardTitle} />
                <Card.Body
                  className="d-flex flex-column justify-content-between"
                  style={{ backgroundColor: "#FFAA33" }}
                >
                  <Card.Title>
                    <h4>{item.cardTitle}</h4>
                  </Card.Title>
                  <Card.Text>{item.cardText}</Card.Text>
                  {/* The card button is  here */}
                  <Button style={{ backgroundColor: "#527175" }}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* ------------------------------ */}

      {/*React-Bootstap Form is here */}
      <div className="container form-area p-3 mt-5 mb-5">
        <h1>Provide Feedback</h1>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="h4">Email Address</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h4">Some comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="w-25" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/* ------------------------------------ */}
    </div>
  </Fragment>
);

export default App;
