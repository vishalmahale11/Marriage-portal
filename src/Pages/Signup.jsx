import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let userData = JSON.parse(localStorage.getItem("signup")) || [];

  const handleClick = () => {
    const payload = {
      name,
      email,
      password,
    };
    if (name === "" && email === "" && password === "") {
      alert("Input field required");
    } else {
      userData.push(payload);
      localStorage.setItem("signup", JSON.stringify(userData));
      navigate("/login");
    }
  };

  return (
    <>
      <Heading mt={30}>Signup</Heading>
      <Box className={styles.formDiv}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input onChange={(e) => setName(e.target.value)} type="text" />
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" />
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button onClick={handleClick} colorScheme={"pink"} mt={5}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Signup;
