import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>home</div>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="img1"
            src="https://wallpapers.com/images/hd/jordan-shoes-4k-b2jdj8vbdz8s5fel.jpg"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img1"
            src="https://i.pinimg.com/736x/10/a3/6b/10a36b66475f91e4ca658f276ae6037f.jpg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img1"
            src="https://media.istockphoto.com/id/1176735816/photo/blue-tennis-court-and-illuminated-indoor-arena-with-fans-upper-front-view.jpg?s=612x612&w=0&k=20&c=er_NtUH-Rv4Kj9mUPOa1C2EwM0rL3YwXwazshoXjvVA="
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div  className="category-container" onClick={()=>{
        navigate("/category")
      }}>
        <div className="category-card">
          <img
            src="https://i.pinimg.com/736x/10/a3/6b/10a36b66475f91e4ca658f276ae6037f.jpg"
            alt="Football Category"
          />
          <h3>Football</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
