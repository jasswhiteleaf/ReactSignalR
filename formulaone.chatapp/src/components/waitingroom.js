import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
  const [Chatroom, setChatRoom] = useState("");
  const [Username, setUserName] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom({ Username, Chatroom });
      }}
    >
      <Row className="px-5 my-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
            <Form.Control
              placeholder="Chatroom"
              onChange={(e) => setChatRoom(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col sm={12}>
          <hr></hr>
          <button type="submit" className="btn btn-primary">
            Join
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default WaitingRoom;
