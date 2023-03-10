import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import CustomCopyright from "./CustomCopyright";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import {FetchAPI} from "../utils/FetchAPI";

let year = new Date().getFullYear();
const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        FetchAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
            <Box sx={{height: {sx: "auto", md: "92vh"}, borderRight: "1px solid #3D3D3D", px: {sx: 0, md: 2}}}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <CustomCopyright author={"Ignacio Bardin"} currentYear={year}/>
            </Box>
            <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
                    {selectedCategory} <span style={{color: "#CA0B0B"}}> videos</span>
                </Typography>
                <Videos Videos={videos}/>
            </Box>
        </Stack>
    );
};

export default Feed;