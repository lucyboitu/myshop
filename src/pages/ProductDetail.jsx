import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing product ID: {id}</p>
    </div>
  );
};
export default ProductDetail;
