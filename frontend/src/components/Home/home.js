import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/`)
      .then((result) => {
        console.log(result.data.Category);
        setImg(result.data.Category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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

      <div
        className="category-container"
        onClick={() => {
          navigate("/category");
        }}
      >
        <div className="category-card">
          <img
            src="https://i.pinimg.com/736x/10/a3/6b/10a36b66475f91e4ca658f276ae6037f.jpg"
            alt="Football Category"
          />
          <h3>Football</h3>
        </div>
      </div>
      {img.map((ele) => {
        return (
          <>
            <CardGroup>
              <Card>
                <Card.Img variant="top" className="img2" src={ele.img} />
                {/* <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body> */}
                {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  {/* <Card.Title>Card title</Card.Title> */}
                  {/*  <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
            </Card.Text> */}
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"></small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </>
        );
      })}
      
    </>
  );
};

export default Home;
