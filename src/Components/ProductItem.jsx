import { Button, Card } from "flowbite-react";

const ProductItem = (props) => {
  const { data, openModal } = props;

  return (
    <div>
      <Card
        className="max-w-md h- h-full flex flex-col justify-between"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={data.image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {data.description}
        </p>
        <p className="text-2xl font-semibold ">Price: {data.price}</p>

        <Button onClick={() => openModal(data)} color="dark" pill>
          Detail
        </Button>
      </Card>
    </div>
  );
};

export default ProductItem;
