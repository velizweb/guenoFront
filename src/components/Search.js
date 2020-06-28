import React, { useState } from "react";
import { Form, Button, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Message from "./../common/Message";
import DataModal from "../common/DataModal";

const Search = () => {
  const [documentID, setDocumentID] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const user = await axios.get(`http://localhost:8000/api/users/${documentID}`);
    setIsLoading(false);
    setDocumentID("");
    if (!user.data.name) {
      setErrorMessage(user.data.message);
      setShowMessage(true);
    } else {
      const data = await user.data;
      setUserData(data);
      setShowModal(true);
    }
  };

  return (
    <>
      {isLoading && (
        <div style={{ textAlign: "center", margin: "15px 0" }}>
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            style={{ marginRight: "10px" }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
          {"Por favor espere..."}
        </div>
      )}
      <Form>
        <Form.Row>
          <Col
            xs={4}
            style={{
              marginTop: 15,
              textAlign: "center",
              margin: "80px auto",
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Verificar DNI</Form.Label>
              <Form.Control
                type="number"
                value={documentID}
                placeholder="Ingrese el DNI"
                onChange={(e) => setDocumentID(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" disabled={documentID ? false : true} onClick={handleSubmit}>
              Buscar
            </Button>
          </Col>
        </Form.Row>
      </Form>

      {showMessage && (
        <Message message={errorMessage} show={showMessage} setShow={setShowMessage} />
      )}
      {showModal && <DataModal user={userData} show={showModal} setShow={setShowModal} />}
    </>
  );
};
export default Search;
