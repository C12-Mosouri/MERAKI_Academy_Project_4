import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./subcategory.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SubCategorys = () => {
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/sub/${id}`)
      .then((res) => {
        console.log(res.data.result);
        setSubCategory(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>subcategory</div>
      {subCategory.map((ele) => {
        return (
          <>
            {/* <h1
              onClick={() => {
                const id = ele._id;
                setSubCategoryId(ele._id);
                navigate(`/product/${id}`);
              }}
            >
              {ele.name}
            </h1> */}
            {/* <img className="img" src={ele.img} /> */}
            <Container
              className="d-flex justify-content-center align-items-center"
              style={{ height: "55vh" }}
            >
              <Row>
                <Col md="auto">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img className="img" variant="top" src={ele.img} />
                    <Card.Body>
                      <Card.Title>{ele.name}</Card.Title>
                      <Button
                        onClick={() => {
                          const id = ele._id;
                          setSubCategoryId(ele._id);
                          navigate(`/product/${id}`);
                        }}
                        variant="primary"
                      >
                        See The Product
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default SubCategorys;
