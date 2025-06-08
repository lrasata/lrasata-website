import { Box, Container } from "@mui/material";
import orionhealthLogo from "../assets/orionhealth-logo.png";
import obsLogo from "../assets/obs-logo.png";
import todoList from "../assets/todolist.png";
import themealrecipe from "../assets/themealrecipedb.png";
import questionworkflow from "../assets/question-workflow.png";
import pokedex from "../assets/pokedex.png";
import ProjectSection from "./ProjectSection.jsx";

const WORK = [
  {
    title: "Work experience",
    projectItems: [
      {
        logo: orionhealthLogo,
        ariaLabel: "orion health",
        title: "Apr 2022 - Feb 2025 | Auckland, New Zealand",
        description:
          "I contributed to designing and developing the Digital Front Door, a well-designed and user-friendly web application that empowered users in their healthcare journey. " +
          "While my primary focus was on building and maintaining a library of reusable UI components and features, I also played a role beyond frontend development. " +
          "I contributed to enhancing and maintaining our backend application built with Strapi, developed CLI tools using Python for data migration, " +
          "and helped implement an end-to-end solution for user analytics using tools like Prometheus and Grafana.",
        link: "https://orionhealth.com/global/digital-front-door/#",
        buttonText: "View the project",
        tags: [
          "Javascript",
          "Typescript",
          "React",
          "Strapi",
          "Python",
          "Git",
          "Docker",
          "AWS",
          "Grafana",
        ],
      },
      {
        logo: obsLogo,
        ariaLabel: "orange business services",
        title: "Sept 2016 - Sept 2019 | Rennes, France",
        description:
          "I contributed to designing and developing the Flux Vision client web portal, built using JHipster, a full-stack development platform. " +
          "The web application featured a Spring Boot backend and an Angular frontend. This portal enabled clients to securely access statistical reports derived from " +
          "mobile data analytics on the Orange mobile network, providing valuable insights for business and operational decision-making.",
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
        logo: todoList,
        ariaLabel: "My TODO list",
        title: "My TODO list",
        description:
          "This project is a full stack web application which I built as a practice of learning : Node.js, Express, MongoDB and Mongoose. " +
          "This web application also features a frontend built with Mui and React, it also uses Redux toolkit for state management",
        link: "https://github.com/lrasata/todo-list-app",
        buttonText: "Access demo and code",
        tags: [
          "Typescript",
          "React",
          "MUI",
          "Redux",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "NoSQL",
          "Restful API",
        ],
      },
      {
        logo: themealrecipe,
        ariaLabel: "The meal recipe database",
        title: "The meal recipe database",
        description:
          "This web application, powered by TheMealDB API, lets users search for their favorite recipes. It also serves as a training project, showcasing the use of React, Redux, Redux Toolkit, Redux Thunk, and React Router.",
        link: "https://github.com/lrasata/themeal-recipe-db-app",
        buttonText: "Access demo and code",
        tags: ["Typescript", "React", "MUI", "Redux"],
      },
      {
        logo: pokedex,
        ariaLabel: "Pokedex",
        title: "Pokedex",
        description:
          "Another full stack web application which I built as a practice of learning GraphQL. " +
          "This web application features a backend built with Node.js, Express, MongoDB and Mongoose. And the frontend is built with Mui and React.",
        link: "https://github.com/lrasata/pokedex/tree/main",
        buttonText: "Access demo and code",
        tags: [
          "Javascript",
          "Typescript",
          "React",
          "MUI",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "GraphQL",
          "NoSQL",
        ],
      },
      {
        logo: questionworkflow,
        ariaLabel: "Question workflow app",
        title: "Question workflow widget",
        description:
          "This project features a Strapi-powered backend, where admin users can define a collection of questions and possible answers through the Strapi Admin Panel. " +
          "The React-based frontend presents these workflow questions to end users, allowing them to select their responses. " +
          "It showcases how to build a lightweight full stack solution using React and Strapi.",
        link: "https://github.com/lrasata/question-workflow-frontend-app",
        buttonText: "Access demo and code",
        tags: ["Typescript", "React", "MUI", "Redux", "Strapi", "Restful API"],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="work">
      <Box alignContent="center" sx={{ minHeight: "50vh" }}>
        <Container maxWidth="xl">
          {WORK.map((item, index) => (
            <ProjectSection
              key={`${index}-${item.title}`}
              title={item.title}
              projectItems={item.projectItems}
            />
          ))}
        </Container>
      </Box>
    </section>
  );
};

export default Projects;
