import React from 'react';
import {Typography} from "@mui/material";

interface Props {
    currentYear: number;
    author: string;
}

const CustomCopyright = ({author, currentYear}: Props): JSX.Element => (
    <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: "#FFF"}}>
        Copyright {author} {currentYear}
    </Typography>
);

export default CustomCopyright;