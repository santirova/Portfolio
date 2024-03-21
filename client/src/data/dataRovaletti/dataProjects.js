import viandaexpressImg from "../../assets/projectsImages/viandaExpress.png";
import gamelabImg from "../../assets/projectsImages/gamelab.png";
import vibiImg from "../../assets/projectsImages/VIBI.png";
import miFinanzImg from "../../assets/projectsImages/MiFinanz.png"
import eventwaveImg from "../../assets/projectsImages/eventwave.png"
const dataProjects = [
  {
    name: "EventWave",
    description:
      "An online platform for seamless event management. Users can create, book, and comment on events, fostering a vibrant community of event enthusiasts.",
    technologies: [
      "Javascript",
      "React-Vite",
      "Tailwind",
      "Figma",
      "Redux Toolkit",
      "NodeJs",
      "Express",
      "Mongoose",
      "MongoDB",
    ],
    tasks: [

    ],
    deploy: "https://s12-02-m-node-react-nine.vercel.app/",
    youtube:
      "",
    repository: "https://github.com/No-Country/s12-02-m-node-react",
    image: eventwaveImg,
  },
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
    deploy: "https://mi-finanz.vercel.app",
    youtube:
      "",
    repository: "https://github.com/santirova/MiFinanz",
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
    name: "Vianda Express",
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
    deploy: "https://viandaexpress-arg.vercel.app/",
    youtube:
      "https://www.youtube.com/watch?v=9LU6qFour2M&ab_channel=SilvioJuarez",
    repository: "https://github.com/santirova/ViandaExpress",
    image:viandaexpressImg,
  },

  {
    name: "GAMELAB",
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
    deploy: "https://gamelab-arg.vercel.app/",
    youtube:null,
    repository: "https://github.com/santirova/Gamelab",
    image:gamelabImg,
  }
];

export { dataProjects };
