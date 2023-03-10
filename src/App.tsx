import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import React from "react";


const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: "#000000"}}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path="/video/:id" element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;