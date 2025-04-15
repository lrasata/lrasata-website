import {Box, Button, Container, Grid, Typography, useTheme} from "@mui/material";
import TechChip from "./TechChip.jsx"
import ContactMe from "./ContactMe.jsx";

const TECH_STACK = [
    'JavaScript', 'TypeScript', 'React', 'Redux', 'Mui', 'Jest',
    'Node.js', 'Express', 'Strapi', 'PostgreSQL', 'MongoDB',  'Python', 'Java', 'RESTful API', 'Postman',
    'Git', 'Docker', 'AWS', 'IntelliJ IDEA'
];

const AboutMe = () => {
    const theme = useTheme();

    return <Container maxWidth="xl">
        <Grid container
              spacing={2}
              sx={{minHeight: '70vh'}}
              alignItems="center"
              textAlign="center">
            <Grid size={{xs: 12, sm: 12, md: 6}} padding={6}>
                <Typography variant="h2" gutterBottom mb={5}>About me</Typography>
                <Typography variant="body1" component="p" gutterBottom color={theme.palette.text.secondary}>
                    I'm a dedicated and highly motivated <strong>software engineer</strong> with over 5&nbsp;years of hands-on experience&nbsp;
                    <strong>in designing, developing, and testing software applications.</strong>&nbsp;Well practiced in delivering efficient, high-quality code tailored to meet client expectations and drive
                    impactful results.
                </Typography>
                <Button variant="contained" size="large">Contact me</Button>
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 6}} padding={6}>
                <Typography variant="h2">Technology stack</Typography>
                <Box mt={3}>
                    {
                        TECH_STACK.map((skill, index) => (
                            <TechChip key={`${skill}-${index}`} label={skill}/>
                        ))
                    }
                </Box>
            </Grid>
        </Grid>
    </Container>

}

export default AboutMe;