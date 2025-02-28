import React from "react";
import NavItem from "react-bootstrap/esm/NavItem";
import NavLink from "react-bootstrap/esm/NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { tokenContext } from "../../App";

const Navbars = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <>
      {["sm"].map((expand) => (
        <>
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <Navbar.Brand
                onClick={() => {
                  navigate("/home");
                }}
              >
                SouriSport
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Body>
                  <Nav className="justify-content- flex-grow-1 pe-3">
                    <Nav.Link
                      onClick={() => {
                        navigate("/home");
                      }}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => {
                        navigate("/category");
                      }}
                    >
                      Category
                    </Nav.Link>
                    {/*  <Nav.Link
                      onClick={() => {
                        navigate("/category/sub");
                      }}
                    >
                      SubCategorys
                    </Nav.Link> */}
                    {/*   <NavDropdown
                      title="Categorys"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item></NavDropdown.Item>
                    </NavDropdown> */}

                    {/* <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => {
                          navigate("/product");
                        }}
                      >
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>*/}
                  </Nav>

                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />

                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <svg
                    onClick={() => {
                      {
                        localStorage.getItem("token")
                          ? navigate("/fav")
                          : navigate("/login");
                      }
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    fill="currentColor"
                    class="bi bi-heart-pulse-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                    <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                  </svg>
                  <svg
                    className="cart"
                    onClick={() => {
                      {
                        localStorage.getItem("token")
                          ? navigate("/cart")
                          : navigate("/login");
                      }
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-cart4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                  <svg
                    onClick={() => {
                      {
                        localStorage.getItem("token")
                          ? navigate("/myprofile")
                          : navigate("/login");
                      }
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </>
      ))}
    </>
  );
};
export default Navbars;
