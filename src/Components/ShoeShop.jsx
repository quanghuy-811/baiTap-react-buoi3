import { useState } from "react";
import { data } from "../../data.js";
import ProductItem from "./ProductItem.jsx";
import ModalDetail from "./Modal.jsx";

const ShoeShop = () => {
  const [shoe, setShoe] = useState(null);
  const openModal = (product) => setShoe(product);
  const closeModal = () => setShoe(null);

  return (
    <div className="container max-w-screen-xl mx-auto">
      <h1 className="text-3xl py-5 text-center">ShoeShope</h1>

      <div className="grid grid-cols-4 gap-5 ">
        {data.map((item) => {
          return <ProductItem data={item} openModal={openModal} />;
        })}
      </div>

      {shoe && <ModalDetail dataShoe={shoe} closeModal={closeModal} />}
    </div>
  );
};

export default ShoeShop;
