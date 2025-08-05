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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const CORE_COMPETENCIES = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "MUI",
  "Emotion",
  "Storybook",
  "Jest",
  "Cypress",
  "RESTful APIs",
  "Java",
  "Spring Boot",
  "Postman",
  "PostgreSQL",
  "Python",
  "Strapi",
  "Git",
  "Docker",
  "AWS",
  "Terraform",
  "Kubernetes",
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
        <Grid container spacing={2} my={3}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} padding={isMobile ? 2 : 4}>
            <Typography variant="h2" gutterBottom mb={2}>
              About me
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  <strong>Software Engineer</strong> with 5+ years of experience
                  based in Karlsruhe, Germany.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  <strong>Frontend-focused engineer</strong> building
                  applications using <strong>React</strong> and{" "}
                  <strong>TypeScript</strong>.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  Currently expanding cloud skills through hands-on projects
                  with <strong>AWS</strong>, <strong>Terraform</strong> and{" "}
                  <strong>Kubernetes</strong>.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  Strong in{" "}
                  <strong>full development lifecycle ownership</strong>,
                  including: Technical design, Implementation, Documentation and
                  Team collaboration.
                </Typography>
              </ListItem>
            </List>

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
              {CORE_COMPETENCIES.map((skill, index) => (
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
