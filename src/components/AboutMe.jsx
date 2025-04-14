import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import TechChip from "./TechChip.jsx"

const AboutMe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return <Grid container
                 spacing={2}
                 sx={{minHeight: '70vh', backgroundColor: theme.palette.accent.default}}
                 alignItems="center"
                 textAlign="center">
        <Grid size={{xs: 12, sm: 6}} padding={6}>
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1" component="p" gutterBottom color={theme.palette.text.secondary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo vitae dui convallis ultricies.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo vitae dui convallis ultricies.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a justo vitae dui convallis ultricies.
            </Typography>
        </Grid>
        <Grid size={{xs: 12, sm: 6}}>
            <Typography variant="h4">Technology stack</Typography>
            <Box mt={3}>
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
                <TechChip label="Chip Filled" />
            </Box>
        </Grid>
    </Grid>
}

export default AboutMe;