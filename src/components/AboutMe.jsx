import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TechChip from "./TechChip.jsx";

const CORE_COMPETENCIES = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "MUI",
  "Emotion CSS",
  "HTML",
  "CSS",
];

const OTHER_TECH_STACK = [
  "Jest",
  "Testcafe",
  "Python",
  "RESTful API",
  "Postman",
  "Java",
  "Spring",
  "PostgreSQL",
  "Strapi",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "GraphQL",
  "Git",
  "Docker",
  "AWS",
  "IntelliJ IDEA",
];

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/lr-resume.pdf";
    link.setAttribute("download", "liantsoa-rasata-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{ minHeight: "70vh" }}
          alignItems="center"
          textAlign="center"
          my={3}
        >
          <Grid size={{ xs: 12, sm: 12, md: 6 }} padding={isMobile ? 2 : 4}>
            <Typography variant="h2" gutterBottom mb={5}>
              About me
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              I’m&nbsp;a <strong>frontend engineer</strong> based in Karlsruhe,
              Germany, working with React and TypeScript. With over 5&nbsp;years
              of hands-on experience, I&nbsp;build performant, accessible web
              apps and focused on component-driven design. I&nbsp;am experienced
              in writing efficient, maintainable code to meet user and business
              needs.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 5 }}
              onClick={handleClick}
            >
              Download my resume
            </Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} padding={isMobile ? 2 : 4}>
            <Typography variant="h2" gutterBottom>
              Technology stack
            </Typography>
            <Box mt={3}>
              <Typography variant="subtitle1" gutterBottom>
                Core competencies
              </Typography>
              {CORE_COMPETENCIES.map((skill, index) => (
                <TechChip key={`${skill}-${index}`} label={skill} />
              ))}
            </Box>
            <Box mt={3}>
              <Typography variant="subtitle1" gutterBottom>
                Also familiar with{" "}
              </Typography>
              {OTHER_TECH_STACK.map((skill, index) => (
                <TechChip key={`${skill}-${index}`} label={skill} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMe;
