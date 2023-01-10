import React from "react";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Styles/navbar.module.css";

let links = [
  {
    to: "/",
    title: "Signup",
  },
  {
    to: "/login",
    title: "Login",
  },
  {
    to: "/application",
    title: "Application",
  },
  {
    to: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <Box className={styles.navbar}>
      {links.map((item) => (
        <NavLink key={item.to} to={item.to}>
          {item.title}
        </NavLink>
      ))}
    </Box>
  );
};

export default Navbar;
