import React from 'react';
import {useState, useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material";
import CustomCopyright from "./CustomCopyright";
import Sidebar from "./Sidebar";

const year = new Date().getFullYear();
const Feed = () => (

    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
        <Box sx={{height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3D3D3D", px: {sx: 0, md: 2}}}>
            <Sidebar/>
            <CustomCopyright author={"Ignacio Bardin"} currentYear={year}/>
        </Box>
    </Stack>

);

export default Feed;