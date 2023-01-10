import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/signup.module.css";

const Login = () => {
  let userData = JSON.parse(localStorage.getItem("signup")) || [];
  let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      email,
      password,
      role,
    };
    for (let i = 0; i < userData.length; i++) {
      if (
        userData[i].email === payload.email &&
        userData[i].password === payload.password
      ) {
        alert("Login successful");
        loginData.push(payload);
        localStorage.setItem("loginData", JSON.stringify(loginData));
        navigate("/application");
        return;
      } else {
        alert("Login successful");
        navigate("/application");
        return;
      }
    }
  };

  return (
    <>
      <Heading mt={30}>Login</Heading>
      <Box className={styles.formDiv}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" />
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <FormLabel>Role</FormLabel>
          <Select
            onChange={(e) => setRole(e.target.value)}
            placeholder="Select Role"
          >
            <option value="r1">R1 - Admin</option>
            <option value="r2">R2 - User1</option>
            <option value="r3">R3 - User2</option>
          </Select>
          <Button onClick={handleClick} colorScheme={"pink"} mt={5}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Login;
