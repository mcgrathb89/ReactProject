import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const LearningModal = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  LearningModal.defaultProps = {
    title: "",
    url: "",
    src: "",
    alt: "",
    caption: ""
  };

  return (
    <>
      <div fluid>
        <div className="col text-left">
          <Button color="secondary" onClick={toggle}>
            Read More
          </Button>
        </div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
          <ModalBody>{props.children}</ModalBody>
          <h1 className="col text-center">Image</h1>
          <br />
          <div className="col text-center">
            <img src={props.src} alt={props.alt} width="99%" />
            <br/><br/><br/>
            <small>{props.caption}</small>
          </div>
          <br />
          <br />
          <ModalFooter>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <Button color="primary">Watch Video</Button>
            </a>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default LearningModal;
