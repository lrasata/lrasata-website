import {Box, Container} from "@mui/material";
import orionhealthLogo from "../assets/orionhealth-logo.png";
import obsLogo from "../assets/obs-logo.png";
import todoList from "../assets/todolist.png";
import themealrecipe from "../assets/themealrecipedb.png";
import questionworkflow from "../assets/question-workflow.png";
import ProjectSection from "./ProjectSection.jsx";


const WORK = [
    {
        title: "Work experience",
        projectItems: [
            {
                logo: orionhealthLogo,
                ariaLabel: "orion health",
                title: "Software engineer (Permanent, Full-time, Remote) | Apr 2022 - Feb 2025",
                description: "I contributed to the design and development of the Digital Front Door, a consumer engagement " +
                    "platform aimed at enhancing the digital experience and empowering both clinicians and patients.",
                link: "https://orionhealth.com/global/digital-front-door/#",
                buttonText: "View the project",
                tags: ["Javascript", "Typescript", "React", "Strapi", "Python"]
            },
            {
                logo: obsLogo,
                ariaLabel: "orange business services",
                title: "Full stack engineer (Permanent, Full-time, On-site) | Sept 2016 - Sept 2019",
                description: "I contributed to designing and developing the Flux Vision web portal from scratch within an Agile environment. \n",
                link: "https://www.orange-business.com/en/solutions/data-intelligence-iot/flux-vision",
                buttonText: "View the project",
                tags: ["Angular", "Typescript", "Java", "Spring Boot"]
            }
        ]
    },
    {
        title: "Experiments",
        projectItems: [
            {
                logo: todoList,
                ariaLabel: "My TODO list",
                title: "My TODO list - Full stack web application ",
                description: "This project is a full-stack application built with MongoDB, Express, React and Node.js. The purpose of this project is to serve as a training to get familiar with those technologies.",
                link: "https://github.com/lrasata/todo-list-app",
                buttonText: "Access demo and code",
                tags: ["Typescript, React", "MUI", "Redux", "Node.js", "Express", "MongoDB", "NoSQL", "Restful API"],
            },
            {
                logo: themealrecipe,
                ariaLabel: "The meal recipe database",
                title: "The meal recipe database - Frontend web application",
                description: "This project allows you to look for your favourite recipes thanks to TheMealDB API. It also shows usages of `React, Redux, Redux toolkit, Redux thunk and React router` for training purposes.",
                link: "https://github.com/lrasata/themeal-recipe-db-app",
                buttonText: "Access demo and code",
                tags: ["Typescript, React", "MUI", "Redux"],
            },
            {
                logo: questionworkflow,
                ariaLabel: "Question workflow app",
                title: "Question workflow widget - Full stack web application ",
                description: "This project works in conjunction with question-workflow-backend-app where admin users who have access to the Strapi Admin panel can define a collection of questions and possible answers. This frontend presents the workflow questions to the end-user who is able to select its answers.",
                link: "https://github.com/lrasata/question-workflow-frontend-app",
                buttonText: "Access demo and code",
                tags: ["Typescript, React", "MUI", "Redux", "Strapi", "Restful API"],
            }
        ]
    }
]

const Projects = () => {
    return <section id="work">
        <Box alignContent="center"
             sx={{minHeight: '50vh'}}>
            <Container maxWidth="xl">
                {
                    WORK.map((item, index) => (
                        <ProjectSection key={`${index}-${item.title}`} title={item.title} projectItems={item.projectItems} />
                    ))
                }
            </Container>

        </Box>
    </section>;
}

export default Projects;