import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Home = () => {
  return (
    <>
      <div>home</div>
      <Carousel slide={false}>
        <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YDfyw3787RNSFgn16XhsjXo5LNvKy7lsIg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YDfyw3787RNSFgn16XhsjXo5LNvKy7lsIg&s"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YDfyw3787RNSFgn16XhsjXo5LNvKy7lsIg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YDfyw3787RNSFgn16XhsjXo5LNvKy7lsIg&s"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YDfyw3787RNSFgn16XhsjXo5LNvKy7lsIg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YDfyw3787RNSFgn16XhsjXo5LNvKy7lsIg&s"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
