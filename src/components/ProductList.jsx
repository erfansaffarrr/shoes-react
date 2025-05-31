import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = ({ products, addToCart }) => {
  return (
    <Container className="mt-4">
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
