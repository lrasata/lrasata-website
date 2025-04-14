import {Avatar, Box, Grid, Typography, useTheme} from "@mui/material";
import avatarPic from "../assets/avatar.png";

const HeroBanner = () => {
    const theme = useTheme();

    return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" sx={{ height: '100vh', backgroundColor: theme.palette.background.default}} >
        <Avatar
            alt="Liantsoa Rasata"
            src={avatarPic}
            sx={{ width: 300, height: 300, mb: 6 }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
            Hello World! I'm Liantsoa.
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
            Full Stack Developer
        </Typography>
        <Typography variant="body1" component="p" gutterBottom color={theme.palette.text.secondary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo vitae dui convallis ultricies.
        </Typography>
    </Box>
}

export default HeroBanner;