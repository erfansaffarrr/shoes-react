import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductList from "../components/ProductList";

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const [products] = useState([
    {
      id: 1,
      name: "کفش ورزشی",
      price: "500,000",
      image: "src/assets/download.jpg",
    },
    {
      id: 2,
      name: "کفش رسمی",
      price: "700,000",
      image: "src/assets/download (1).jpg",
    },
    {
      id: 3,
      name: "کفش راحتی",
      price: "450,000",
      image: "src/assets/images (1).jpg",
    },
  ]);

  return (
    <div className="text-center">
      <h1 className="mt-4">🛒 فروشگاه</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
