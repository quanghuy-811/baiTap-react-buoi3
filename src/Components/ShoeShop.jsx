import { useEffect, useState } from "react";
import { data } from "../../data.js";
import ProductItem from "./ProductItem.jsx";
import ModalDetail from "./Modal.jsx";
import axios from "axios";

const ShoeShop = () => {
  const [shoe, setShoe] = useState([]);
  const [data, setData] = useState(null);
  const openModal = (product) => setData(product);
  const closeModal = () => setData(null);

  const getAllProductAxios = () => {
    axios({
      url: "https://apistore.cybersoft.edu.vn/api/Product",
      method: "GET",
    })
      .then((res) => {
        setShoe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProductAxios();
  }, []);
  return (
    <div className="container max-w-screen-xl mx-auto">
      <h1 className="text-3xl py-5 text-center">ShoeShope</h1>

      <div className="grid grid-cols-4 gap-5 ">
        {shoe.map((item) => {
          return (
            <ProductItem key={item.id} data={item} openModal={openModal} />
          );
        })}
      </div>

      {data && <ModalDetail dataShoe={data} closeModal={closeModal} />}
    </div>
  );
};

export default ShoeShop;
