import {Box, Button, Container, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import TechChip from "./TechChip.jsx"

const TECH_STACK = [
    'JavaScript', 'TypeScript', 'React', 'Redux', 'Mui', 'Jest',
    'Node.js', 'Express', 'Strapi', 'PostgreSQL', 'MongoDB',  'Python', 'Java', 'RESTful API', 'Postman',
    'Git', 'Docker', 'AWS', 'IntelliJ IDEA'
];

const AboutMe = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = () => {
        const link = document.createElement("a");
        link.href = "/lr-resume.pdf";
        link.setAttribute("download", "liantsoa-rasata-resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return <section id="about">
        <Container maxWidth="xl">
            <Grid container
                  spacing={2}
                  sx={{minHeight: '70vh'}}
                  alignItems="center"
                  textAlign="center"
                  my={3}>
                <Grid size={{xs: 12, sm: 12, md: 6}} padding={isMobile ? 2 : 4}>
                    <Typography variant="h2" gutterBottom mb={5}>About me</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        I'm a dedicated and highly motivated <strong>software engineer</strong> with over 5&nbsp;years of hands-on experience&nbsp;
                        <strong>in designing, developing, and testing software applications.</strong>&nbsp;Well practiced in delivering efficient, high-quality code tailored to meet client expectations and drive
                        impactful results.
                    </Typography>
                    <Button variant="contained" size="large" sx={{ mt: 5}} onClick={handleClick}>
                            Download my resume
                    </Button>
                </Grid>
                <Grid size={{xs: 12, sm: 12, md: 6}} padding={isMobile ? 2 : 4}>
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
    </section>

}

export default AboutMe;