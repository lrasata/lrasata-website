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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CORE_COMPETENCIES = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Git",
  "Linux CLI",
  "Helm",
  "Prometheus",
  "Grafana",
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
  "Node.js",
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
          <Grid
            display="flex"
            flexDirection="column"
            size={{ xs: 12, sm: 12, md: 6 }}
            padding={isMobile ? 2 : 4}
          >
            <Typography variant="h2" gutterBottom mb={2}>
              About me
            </Typography>

            <Typography variant="body1" component="span" gutterBottom mb={3}>
              I’m a <strong>Cloud & DevOps Engineer</strong> with a strong{" "}
              <strong>software engineering background</strong>, focused on
              building reliable, automated, cloud-native systems.
            </Typography>

            <Typography variant="body1" component="span" gutterBottom mb={3}>
              On the cloud side, I design and operate{" "}
              <strong>AWS-based infrastructure</strong> using Infrastructure as
              Code (Terraform), CI/CD pipelines, and containerized workloads.
              I’m{" "}
              <strong>
                AWS Solutions Architect – Associate and HashiCorp Terraform
                certified
              </strong>
              , with a strong focus on automation, reliability, security, and
              cost awareness.
            </Typography>

            <Typography variant="body1" component="span" gutterBottom mb={3}>
              On the software side, I spent several years as a{" "}
              <strong>full-stack engineer</strong> working on{" "}
              <strong>large-scale production systems</strong>, contributing to
              both frontend and backend applications. This allows me to
              understand developer needs and{" "}
              <strong>
                bridge the gap between application development and platform
                engineering
              </strong>
              .
            </Typography>

            <Typography variant="body1" component="span" gutterBottom mb={3}>
              I enjoy <strong>end-to-end ownership</strong>, from system design
              and implementation to documentation and collaboration across
              teams.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 5 }}
              onClick={handleClick}
            >
              ✨ Download my resume ✨
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
