import React from "react";
//import logo from './logo.svg';
//import './App.css';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";

function App() {
  return (
    <Container fluid>
      <Search />
    </Container>
  );
}

export default App;
