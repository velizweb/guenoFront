import React from "react";
import { Modal, Table, Button } from "react-bootstrap";
import Moment from "react-moment";

/**
 *
 * @param {object} user, Datos del usuario
 * @param {boolean} show, Indica si el modal debe ser mostrado
 * @param {function} setShow, Maneja el estado del modal
 */
const DataModal = ({ user, show, setShow }) => {
  return (
    <Modal show={show} onHide={setShow}>
      <Modal.Header closeButton>
        <Modal.Title>Datos del Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <td>Name/Surname:</td>
              <td>
                {user.name} / {user.surname}
              </td>
            </tr>
            <tr>
              <td>Birthday:</td>
              <td>
                <Moment format="DD MMMM YYYY">{user.birthday}</Moment>
              </td>
            </tr>
            <tr>
              <td>Scoring:</td>
              <td>{user.scoring.approved ? "APROBADO" : "RECHAZADO"}</td>
            </tr>
            <tr>
              <td>Cuit:</td>
              <td>{user.cuit}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DataModal;
