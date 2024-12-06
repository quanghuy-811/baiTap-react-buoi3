import { Button, Card, Modal, ModalHeader } from "flowbite-react";

const ModalDetail = (props) => {
  const { dataShoe, closeModal } = props;

  return (
    <div>
      <Button>Toggle modal</Button>
      <Modal show={!!dataShoe} onClose={closeModal}>
        <Modal.Header>
          <h1 className="font-semibold text-2xl"> {dataShoe.name}</h1>
        </Modal.Header>
        <Modal.Body>
          <Card className="max-w-sm" imgSrc={dataShoe.image} horizontal>
            <p className="font-normal text-gray-700">{dataShoe.description}</p>
            <p className="font-semibold text-xl">Price: {dataShoe.price}</p>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button className="ml-auto" color="gray" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDetail;
