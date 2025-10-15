import { Box, Container } from "@mui/material";
import orionhealthLogo from "../assets/orionhealth-logo.png";
import obsLogo from "../assets/obs-logo.png";
import portfolio from "../assets/portfolio-infra.png";
import tripPlanner from "../assets/trip-planner-infra.png";
import imageUploader from "../assets/image-uploader.png";
import imageModerator from "../assets/image-moderator.png";
import WorkSection from "./WorkSection.jsx";
import ExperimentSection from "./ExperimentSection.jsx";

const WORK = [
  {
    title: "Work experience",
    projectItems: [
      {
        logo: orionhealthLogo,
        ariaLabel: "orion health",
        title:
          "Software Engineer | Apr 2022 - Feb 2025 | Auckland, New Zealand",
        description:
          "I helped design and develop the Digital Front Door, a user-centric web app that improved healthcare accessibility. My primary focus was building and maintaining a robust library of reusable UI components, accelerating development and ensuring consistency. Beyond frontend, I enhanced our Strapi-based backend, built Python CLI tools to streamline data migration, and implemented an end-to-end analytics solution with Prometheus and Grafana to drive data-informed decisions.",
        link: "https://orionhealth.com/global/digital-front-door/#",
        buttonText: "View the project",
        tags: [
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "MUI",
          "Emotion",
          "Storybook",
          "Strapi",
          "Python",
          "Git",
          "Prometheus",
          "Grafana",
          "Docker",
          "AWS",
        ],
      },
      {
        logo: obsLogo,
        ariaLabel: "orange business services",
        title: "Full-stack developer | Sept 2016 - Sept 2019 | Rennes, France",
        description:
          "Contributed to the design and development of the Flux Vision client web portal using JHipster, combining a Spring Boot backend with an Angular frontend. The portal enabled Orange clients to securely access data analytics reports and dashboards, delivering actionable insights that supported strategic business and operational decisions.",
        link: "https://www.orange-business.com/en/solutions/data-intelligence-iot/flux-vision",
        buttonText: "View the project",
        tags: ["Angular", "Typescript", "Java", "Spring Boot", "JHipster"],
      },
    ],
  },
  {
    title: "Hands-on projects",
    description:
      "Some of my personal projects for gaining hands-on experience. Check out my GitHub for more details.",
    projectItems: [
      {
        logo: portfolio,
        ariaLabel: "Portfolio website",
        title: "Portfolio website",
        description:
          "Manages the infrastructure for a single page application using Terraform on AWS.",
        link: "https://github.com/lrasata/infra-lrasata-website",
        buttonText: "View the project",
        tags: ["Cloudfront", "s3", "WAF", "Route53", "ACM", "Terraform"],
      },
      {
        logo: tripPlanner,
        ariaLabel: "Trip planner",
        title: "Full-stack web application",
        description:
          "Manages the infrastructure of the frontend (React+Vite) and the backend (Java+Spring) of Trip planner web app",
        link: "https://github.com/lrasata/infra-trip-planner-webapp",
        buttonText: "View the project",
        tags: [
          "Fargate",
          "RDS",
          "S3",
          "VPC",
          "Cloudfront",
          "Terraform",
          "Docker",
        ],
      },
      {
        logo: imageUploader,
        ariaLabel: "Image Uploader",
        title: "Image uploader",
        description:
          "Serverless Terraform module for secure image uploads with optional malware scanning, thumbnail generation, and DynamoDB storage.",
        link: "https://github.com/lrasata/infra-image-uploader",
        buttonText: "View the project",
        tags: ["S3", "Lambda", "API gateway", "DynamoDB"],
      },
      {
        logo: imageModerator,
        ariaLabel: "Image moderator",
        title: "Image Moderator",
        description:
          "Serverless Terraform module that uses Rekognition to automatically scan S3 images for inappropriate content and alert admins.",
        link: "https://github.com/lrasata/infra-s3-image-moderator",
        buttonText: "View the project",
        tags: ["S3", "Lambda", "Rekognition", "EventBridge", "SNS"],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="work">
      <Box alignContent="center" sx={{ minHeight: "50vh" }}>
        <Container maxWidth="xl">
          <WorkSection
            key={`${WORK[0].title}`}
            title={WORK[0].title}
            projectItems={WORK[0].projectItems}
          />
          <ExperimentSection
            key={`${WORK[1].title}`}
            title={WORK[1].title}
            description={WORK[1].description}
            projectItems={WORK[1].projectItems}
          />
        </Container>
      </Box>
    </section>
  );
};

export default Projects;
