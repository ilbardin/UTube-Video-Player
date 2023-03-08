import React from 'react';
import {Stack, Box} from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

// @ts-ignore
const Videos = ({Videos}) => {
        return (
            <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
                {Videos.map((item: any, idx: any) => (
                    <Box key={idx}>
                        {item.id.videoId && <VideoCard video={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    </Box>
                ))}
            </Stack>
        )

    }
;

export default Videos;