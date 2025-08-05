import { Box, Container } from "@mui/material";
import orionhealthLogo from "../assets/orionhealth-logo.png";
import obsLogo from "../assets/obs-logo.png";
import todoList from "../assets/todolist.png";
import themealrecipe from "../assets/themealrecipedb.png";
import koaLogo from "../assets/koa.png";
import pokedex from "../assets/pokedex.png";
import WorkSection from "./WorkSection.jsx";
import ExperimentSection from "./ExperimentSection.jsx";

const WORK = [
  {
    title: "Work experience",
    projectItems: [
      {
        logo: orionhealthLogo,
        ariaLabel: "orion health",
        title: "Apr 2022 - Feb 2025 | Auckland, New Zealand",
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
        title: "Sept 2016 - Sept 2019 | Rennes, France",
        description:
          "Contributed to the design and development of the Flux Vision client web portal using JHipster, combining a Spring Boot backend with an Angular frontend. The portal enabled Orange clients to securely access data analytics reports and dashboards, delivering actionable insights that supported strategic business and operational decisions.",
        link: "https://www.orange-business.com/en/solutions/data-intelligence-iot/flux-vision",
        buttonText: "View the project",
        tags: ["Angular", "Typescript", "Java", "Spring Boot", "JHipster"],
      },
    ],
  },
  {
    title: "Experiments",
    projectItems: [
      {
        logo: koaLogo,
        ariaLabel: "Koa UI",
        title: "Koa UI - Design System",
        description:
          "Lightweight, themeable React component library built with Emotion and Storybook.",
        link: "https://github.com/lrasata/koa-ui",
        buttonText: "Access demo and code",
        tags: ["React", "Emotion", "Storybook", "Chromatic"],
      },
      {
        logo: todoList,
        ariaLabel: "My TODO list",
        title: "My TODO list",
        description: "MERN full stack web application",
        link: "https://github.com/lrasata/todo-list-app",
        buttonText: "Access demo and code",
        tags: ["MongoDB", "Express", "React", "Redux", "NoSQL", "Restful APIs"],
      },
      {
        logo: themealrecipe,
        ariaLabel: "The meal recipe database",
        title: "The meal recipe database",
        description:
          "Web application  showcasing React, Redux, Redux Toolkit, Redux Thunk, and React Router.",
        link: "https://github.com/lrasata/themeal-recipe-db-app",
        buttonText: "Access demo and code",
        tags: ["Typescript", "React", "Redux", "MUI"],
      },
      {
        logo: pokedex,
        ariaLabel: "Pokedex",
        title: "Pokedex",
        description:
          "Full stack web application built as a practice of learning GraphQL.",
        link: "https://github.com/lrasata/pokedex/tree/main",
        buttonText: "Access demo and code",
        tags: ["React", "MUI", "Express", "MongoDB", "GraphQL", "NoSQL"],
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
            projectItems={WORK[1].projectItems}
          />
        </Container>
      </Box>
    </section>
  );
};

export default Projects;
