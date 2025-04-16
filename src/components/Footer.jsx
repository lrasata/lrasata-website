import {Box, Typography, useTheme} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
    const theme = useTheme();

    return <Box textAlign="center" sx={{
        backgroundColor: theme.palette.primary.main,
        bottom: 0,
        position: "fixed",
        left: 'auto',
        right: 0,
        padding: 1
    }}
                width="100%">
        <Typography sx={{color: "white", fontSize: 12}}>
            @Copyright {new Date().getFullYear()} - Made by Liantsoa Rasata
        </Typography>
    </Box>

}

export default Footer;