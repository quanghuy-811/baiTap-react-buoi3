import { Button, Card, Modal, ModalHeader } from "flowbite-react";

const ModalDetail = (props) => {
  const { dataShoe, closeModal } = props;
  // console.log(dataShoe);

  return (
    <div>
      <Button>Toggle modal</Button>
      <Modal size="3xl" show={!!dataShoe} onClose={closeModal}>
        <Modal.Header>
          <h1 className="font-semibold text-2xl"> {dataShoe.name}</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="flex items-center space-x-4">
            <img
              src={dataShoe.image}
              alt="Example"
              className="mb-4 rounded-lg w-2/5 border border-gray-200 shadow-md"
            />
            <div className="w-3/5">
              <p className="font-normal text-gray-700">
                {dataShoe.description}
              </p>
              <p className="font-semibold text-xl my-6">
                Price: {dataShoe.price}
              </p>
            </div>
          </div>
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
