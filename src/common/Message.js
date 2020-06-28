import React from "react";
import { Toast } from "react-bootstrap";

/**
 *
 * @param {string} message, Mensaje a mostrar en el Toast
 * @param {boolean} show, Indica si se debe mostrar el mensaje
 * @param {function} setShow, Maneja el estado del mensaje
 */
const Message = ({ message, show, setShow }) => {
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "red",
        color: "#fff",
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">Mensaje Error</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default Message;
