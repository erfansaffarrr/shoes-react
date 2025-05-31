import { Container } from "react-bootstrap";
import "../styles/main.scss"; 
const Home = () => {
  return (
    <div className="home-section">
      <Container className="text-center">
        <h1>به Allbirds خوش آمدید</h1>
        <p>بهترین کفش‌های اورجینال با بهترین قیمت</p>
      </Container>
    </div>
  );
};

export default Home;
