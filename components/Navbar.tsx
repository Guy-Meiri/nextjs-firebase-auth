import Link from "next/link";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJs Firebase Auth</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <div style={{ display: "flex" }}>
                <Nav.Link
                  onClick={async () => {
                    await logout();
                    router.push("/login");
                  }}
                >
                  Logout
                </Nav.Link>

                <Nav.Link
                  onClick={async () => {
                    router.push("/dashboard");
                  }}
                >
                  Dashboard
                </Nav.Link>
              </div>
            ) : (
              <>
                <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
