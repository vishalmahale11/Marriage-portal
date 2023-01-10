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
import styles from "./Styles/application.module.css";

const Application = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  let applicationData = JSON.parse(localStorage.getItem("data")) || [];
  let navigate = useNavigate();

  const handleClick = () => {
    const payload = {
      photo,
      name,
      gender,
    };
    applicationData.push(payload);
    localStorage.setItem("data", JSON.stringify(applicationData));
    navigate("/dashboard");
  };

  return (
    <>
      <Heading mt={30}>Application for Marriage</Heading>
      <Box className={styles.application} mt={30}>
        <FormControl isRequired>
          <FormLabel>Upload Photo</FormLabel>
          <Input
            onChange={(e) => setPhoto(e.target.value)}
            type="file"
            placeholder="Upload Photo"
          />
          <FormLabel>Name</FormLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <FormLabel>Gender</FormLabel>
          <Input
            onChange={(e) => setGender(e.target.value)}
            type="text"
            placeholder="Gender"
          />
          <Button onClick={handleClick} mt={5} colorScheme={"pink"}>
            Submit Application
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Application;
