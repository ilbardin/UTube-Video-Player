import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import Videos from "./Videos";
import {FetchAPI} from "../utils/FetchAPI";
import {useParams} from 'react-router-dom';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
        FetchAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Box p={2} minHeight="95vh">
            <Typography variant="h4" fontWeight={900} mb={3} ml={{sm: "100px"}} color="white">
                Search results for: <span style={{color: "#CA0B0B"}}> "{searchTerm}"</span> videos
            </Typography>
            <Box display="flex">
                <Box sx={{mr: {sm: '100px'}}}/>
                {<Videos Videos={videos}/>}
            </Box>
        </Box>
    )
};

export default SearchFeed;