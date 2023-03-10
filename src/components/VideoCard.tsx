import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";
import {CheckCircle} from "@mui/icons-material";

const VideoCard = ({video: {id: {videoId}, snippet}}: any) => {
    return (
        <Card sx={{width: {xs: "100%", sm: "358px", md: "320px"}, boxShadow: "none", borderRadius: 0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                           sx={{width: {xs: '100%', sm: '358px', md: "320px"}, height: 180}}/>
            </Link>
            <CardContent sx={{backgroundColor: "#1E1E1E", height: '106px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 65) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channelTitle.slice(0, 65) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{fontSize: 12, color: "gray", ml: "5px"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;