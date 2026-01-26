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
          "Helped build a user-centric healthcare web platform, focusing on reusable frontend components, backend improvements, developer tooling, and end-to-end observability.",
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
          "Developed features for the Flux Vision client web portal using JHipster, with a Spring Boot backend and Angular frontend, providing secure access to analytics dashboards for Orange enterprise clients.",
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
        logo: tripPlanner,
        ariaLabel: "Trip planner",
        title: "3-Tier web application",
        description:
          "Manages the infrastructure of the frontend (React+Vite) and the backend (Java+Spring) of Trip planner web app",
        link: "https://github.com/lrasata/infra-trip-planner-webapp",
        buttonText: "View on GitHub",
        tags: [
          "Fargate",
          "ECS",
          "Docker",
          "RDS",
          "S3",
          "VPC",
          "Subnets",
          "ALB",
          "Cloudfront",
          "Route53",
          "ACM",
          "API Gateway",
          "Lambda",
          "CloudWatch",
          "CI/CD",
          "Terraform",
        ],
      },
      {
        logo: imageUploader,
        ariaLabel: "File Uploader",
        title: "File uploader",
        description:
          "Serverless Terraform module for secure file uploads with optional malware scanning, thumbnail generation, and DynamoDB storage",
        link: "https://github.com/lrasata/infra-image-uploader",
        buttonText: "View on GitHub",
        tags: [
          "S3",
          "Lambda",
          "API Gateway",
          "DynamoDB",
          "CloudWatch",
          "WAF",
          "CI/CD",
          "Terraform",
        ],
      },
      {
        logo: imageModerator,
        ariaLabel: "Image moderator",
        title: "Image Moderator",
        description:
          "Serverless Terraform module that uses Rekognition to automatically scan S3 images for inappropriate content and alert admins.",
        link: "https://github.com/lrasata/infra-s3-image-moderator",
        buttonText: "View on GitHub",
        tags: ["S3", "Lambda", "Rekognition", "EventBridge", "SNS"],
      },
      {
        logo: portfolio,
        ariaLabel: "Portfolio website",
        title: "Portfolio website",
        description:
          "Manages the infrastructure for a single page application using Terraform on AWS.",
        link: "https://github.com/lrasata/infra-lrasata-website",
        buttonText: "View on GitHub",
        tags: ["Cloudfront", "s3", "WAF", "Route53", "ACM", "Terraform"],
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
