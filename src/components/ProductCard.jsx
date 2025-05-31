import { useContext, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaHeart, FaBookmark, FaComment, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    toggleFavorite,
    toggleSave,
    favorites,
    savedItems,
    comments,
    addComment,
    removeComment,
  } = useContext(CartContext);

  const [commentText, setCommentText] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    toast.success(`✅ ${product.name} به سبد اضافه شد!`);
    setTimeout(() => setAddedToCart(false), 1000);
  };

  const isFavorited = favorites.some((item) => item.id === product.id);
  const isSaved = savedItems.some((item) => item.id === product.id);

  return (
    <Card
      className="m-3 shadow border-0 rounded"
      style={{ width: "20rem", background: "#fffaf0" }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <Card.Body>
        <Card.Title
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#3a3a3a",
          }}
        >
          {product.name}
        </Card.Title>
        <Card.Text style={{ color: "#795548", fontSize: "16px" }}>
          {product.price} تومان
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button
            className="w-75"
            onClick={handleAddToCart}
            style={{
              backgroundColor: addedToCart ? "#28a745" : "#343a40",
              borderColor: addedToCart ? "#28a745" : "#343a40",
            }}
          >
            🛒 افزودن
          </Button>

          <FaHeart
            style={{
              color: isFavorited ? "red" : "gray",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            onClick={() => toggleFavorite(product)}
          />

          <FaBookmark
            style={{
              color: isSaved ? "black" : "lightgray",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            onClick={() => toggleSave(product)}
          />
        </div>

        <Form className="mt-3">
          <Form.Control
            type="text"
            placeholder="نظر خود را بنویسید..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            className="mt-2 w-100"
            onClick={() => {
              if (commentText.trim()) {
                addComment(product.id, commentText);
                toast.info("💬 نظر اضافه شد");
                setCommentText("");
              }
            }}
          >
            <FaComment /> ارسال نظر
          </Button>
        </Form>

        <div className="mt-3">
          {comments[product.id]?.map((comment, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center bg-light p-2 rounded mb-1"
            >
              <span>{comment}</span>
              <FaTrash
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => {
                  removeComment(product.id, index);
                  toast.warn("❌ نظر حذف شد");
                }}
              />
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

