import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { Container, ListGroup, Button, Form } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // محاسبه مبلغ نهایی با اطمینان از عدد بودن مقادیر
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = parseInt(item.price) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return acc + price * quantity;
    }, 0);
  }, [cart]);

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <Container className="cart-container mt-5 text-center">
      <h1>سبد خرید 🛍️</h1>

      {cart.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          <ListGroup className="mb-4">
            {cart.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="text-start">
                  <strong>{item.name}</strong> <br />
                  <small>{item.price.toLocaleString()} تومان</small>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-secondary"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </Button>

                  <Form.Control
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    style={{ width: "60px", textAlign: "center" }}
                  />

                  <Button
                    variant="outline-secondary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>

                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                    حذف
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4>
            مبلغ نهایی:{" "}
            <strong>{totalPrice.toLocaleString()}</strong> تومان
          </h4>
        </>
      )}
    </Container>
  );
};

export default Cart;

