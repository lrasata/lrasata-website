import {Avatar, Box, Typography, useTheme} from "@mui/material";
import avatarPic from "../assets/avatar.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroBanner = () => {
    const theme = useTheme();

    return <Box
        display="flex"
        flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" sx={{ height: '100vh', backgroundColor: theme.palette.background.default}} >
        <Avatar
            alt="Liantsoa Rasata"
            src={avatarPic}
            sx={{ width: 250, height: 250, mb: 6 }}
        />
        <Typography variant="h1" component="h1" gutterBottom>
            Hello World! I'm Liantsoa.
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
            Full Stack Engineer
        </Typography>
        <Typography variant="body1" component="p" gutterBottom color={theme.palette.text.secondary}>
            I love turning ideas into reality. Got something in mind? Let’s build it together.
        </Typography>
        <KeyboardArrowDownIcon  fontSize="large" sx={{ mt: 5}}/>


    </Box>
}

export default HeroBanner;