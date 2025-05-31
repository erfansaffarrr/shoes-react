import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Form, ListGroup } from "react-bootstrap";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        {item.name} - {item.price} تومان
        <Form.Control
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          style={{ width: "60px", display: "inline", marginLeft: "10px" }}
        />
      </div>
      <Button variant="danger" onClick={() => removeFromCart(item.id)}>
        ❌ حذف
      </Button>
    </ListGroup.Item>
  );
};

export default CartItem;
