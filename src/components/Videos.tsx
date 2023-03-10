import React from 'react';
import {Box, Stack} from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({Videos, direction}: any) => {

    if (!Videos?.length)
        return <Loader/>;

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {Videos.map((item: any, idx: any) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;