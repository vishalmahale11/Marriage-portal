import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Application from "../Pages/Application";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/application" element={<Application />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
