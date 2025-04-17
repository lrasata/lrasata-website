import {Avatar, Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import avatarPic from "../assets/avatar.png";

const HeroBanner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const dimension = isMobile ? 160 : 250;

    return <section id="home">
        <Box
            display="flex"
            flexDirection="column" justifyContent="center" alignItems="center" textAlign="center"
            sx={{ height: '100vh', backgroundColor: theme.palette.background.default, padding: '1rem' }} >

                <Avatar
                    alt="Liantsoa Rasata"
                    src={avatarPic}
                    sx={{ width: dimension, height: dimension, my: 4 }}
                />
                <Typography variant="h1" component="h1" gutterBottom mb={2}>
                    Hello World! I'm&nbsp;Liantsoa.
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom color="text.secondary">
                    Full Stack Engineer
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    I love turning ideas into reality. Got something in mind? Let’s build it together.
                </Typography>
        </Box>
    </section>

}

export default HeroBanner;