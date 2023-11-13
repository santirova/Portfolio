import viandaexpressImg from "../../assets/projectsImages/viandaExpress.png";
import videogamesPiImg from "../../assets/projectsImages/videogamesPI.png";
import portfolioImg from "../../assets/projectsImages/Portafolio.png";
import vibiImg from "../../assets/projectsImages/VIBI.png";
import miFinanzImg from "../../assets/projectsImages/MiFinanz.png"
const dataProjects = [
  {
    name: "MiFinanz",
    description:
      "A web app designed to assist users in efficiently managing their personal finances by tracking expenses and income effortlessly.",
    technologies: [
      "Javascript",
      "NextJs",
      "Tailwind",
      "Figma",
      "Redux Toolkit",
      "NodeJs",
      "Express",
      "Sequelize",
      "MySQL",
    ],
    tasks: [

    ],
    deploy: "https://c14-17-ft-node-react.vercel.app/",
    youtube:
      "",
    repository: "https://github.com/No-Country/c14-17-ft-node-react",
    image: miFinanzImg,
  },
  {
    name: "Vibi",
    description:
      "Vibi is a startup committed to democratizing access to the first home in Peru. This web is under construction",
    technologies: [
      "TypeScript",
      "React",
      "NextJS",
      "Tailwind",
      "Figma",
      "NodeJs",
      "Express",
      "Prisma",
    ],
    tasks: [

    ],
    deploy: "https://vi-373evpjot-eugeniagramajo-s-team.vercel.app/home",
    youtube:
      "",
    repository: "https://github.com/EugeniaGramajo/vibi",
    image: vibiImg,
  },
  {
    name: "Vianda express",
    description:
      "Development of a healthy meal Ecommerce platform that allows customers to filter, add products to their cart, make online purchases, edit their data, access their favorites, and leave reviews. The admin can view statistics, manage orders, and make modifications to the products.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "ToolKit",
      "CSS",
      "Auth0",
      "Sweet Alert",
      "Font Awesome",
      "NodeJs",
      "Express",
      "NodeMailer",
      "MercadoPago",
      "Cloudinary",
      "PostgreSQL",
      "Sequelize",
    ],
    tasks: [
      "Diagrama E/R",
      "Desarrollo de diversos EndPoints para el funcionamiento de la app",
      "Implementacion de Cludinary en los EndPoints necesarios",
      "Desarrollo de gran parte del Panel Administrativo",
      "Filtros combinados en el front tanto para el cliente como para el administrador",
      "Implementacion de Graficos para el administrador con NivoCharts",
    ],
    deploy: "https://viandaexpress.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=9LU6qFour2M&ab_channel=SilvioJuarez",
    repository: "https://www.github.com/gastondvoskin/PFecommerce11B",
    image:viandaexpressImg,
  },

  {
    name: "Videogames PI",
    description:
      "Development of an individual full-stack application with the aim of rendering and filtering video games from an API and a proprietary database.",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "CSS",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    tasks: [
      "Complete the entire full-stack application individually following the guidelines specified by Soy Henry",
    ],
    deploy: "https://video-games-pi-vert.vercel.app",
    youtube:null,
    repository: "https://www.github.com/gastondvoskin/PFecommerce11B",
    image:videogamesPiImg,
  },
  {
    name: "Portfolio",
    description:
      "This portoflio was developed from scratch by Gastón Dvoskin and Santiago Rovaletti.",
    technologies: [
      "JavaScript",
      "React",
      "Tailwind",
      "NodeJs",
      "Express",
      "SendGrid",
    ],
    tasks: [

    ],
    deploy: "https://santiagorovaletti.vercel.app/",
    youtube:
      "",
    repository: "https://github.com/santirova/Portfolio",
    image: portfolioImg,
  },
];

export { dataProjects };
