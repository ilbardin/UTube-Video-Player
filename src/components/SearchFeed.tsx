import React from 'react';
import {useState, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import Videos from "./Videos";
import {fetchFromAPI} from "../utils/FetchAPI";
import {useParams} from 'react-router-dom';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
                Search results for: <span style={{color: "#CA0B0B"}}> "{searchTerm}"</span> videos
            </Typography>
            <Videos Videos={videos}/>
        </Box>
    )
};

export default SearchFeed;