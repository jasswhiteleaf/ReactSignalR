import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WaitingRoom from "./components/waitingroom";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [conn, setConnection] = useState();

  const joinChatRoom = async ({ Username, Chatroom }) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5182/chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (args1, args2) => {
        //console.log("Arg1", args1);
        console.log("Arg2", args2);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", Chatroom, Username);

      setConnection(conn);
    } catch (err) {
      console.log(Username);
      console.log(Chatroom);
      console.log(err);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm={12}>
              <h1 className="font-weight-light">Welcome to F1 Chat</h1>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
        </Container>
      </main>
    </div>
  );
}

export default App;
