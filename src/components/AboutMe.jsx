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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CORE_COMPETENCIES = [
  "AWS",
  "Terraform",
  "Docker",
  "Git",
  "JavaScript",
  "TypeScript",
  "Python",
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
  "SQL",
  "Strapi",
];

const motionContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const motionItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { ref, inView } = useInView({ triggerOnce: true });

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
        <Grid container spacing={0} my={6}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} padding={isMobile ? 2 : 4}>
            <Typography variant="h2" gutterBottom mb={2}>
              About me
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  <strong>Software Engineer</strong> with 5+ years of experience
                  based in Germany.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  Experienced in building and maintaining scalable applications
                  across the <strong>frontend and backend</strong> using React,
                  TypeScript, NodeJS, Java, and Spring Boot.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  Now focusing on <strong>Cloud Engineering</strong>, developing
                  hands-on projects with <strong>AWS and Terraform</strong>.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  My <strong>full-stack background</strong> helps me bridge the
                  gap between application development and cloud infrastructure.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <Typography variant="body1" component="span" gutterBottom>
                  Strong in <strong>end-to-end ownership</strong>, from
                  technical design and implementation to documentation and team
                  collaboration.
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
              <motion.div
                initial="hidden"
                animate={inView && "visible"}
                ref={ref}
                variants={motionContainer}
              >
                {CORE_COMPETENCIES.map((skill, index) => (
                  <motion.span key={index} variants={motionItem}>
                    <TechChip key={`${skill}-${index}`} label={skill} />
                  </motion.span>
                ))}
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMe;
