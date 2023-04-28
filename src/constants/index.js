import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  geekStudent,
  companyLogo,
  reactLogo,
  geeksLogo,
  pokeducator,
  quickFood,
  threejs,
  tweeter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Scalable Solutions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance Developer",
    company_name: "Self Employed",
    icon: companyLogo,
    iconBg: "#383E56",
    date: "2018 - 2020",
    points: [
      "Expertise in several programming languages including Python, Java, and JavaScript",
      "Strong understanding of front-end and back-end development, as well as database design and management.",
      "Collaborated with clients to create web and mobile applications that met their specific needs and exceeded their expectations.",
      "Worked effectively in a remote environment, managing multiple projects simultaneously.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "FreeCodeCamp",
    icon: reactLogo,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "Proficient in several front-end technologies including HTML, CSS, and JavaScript.",
      "Strong understanding of RESTful APIs and GraphQL.",
      "Ability to create responsive and mobile-friendly user interfaces.",
      "Designed and implemented user interfaces that were efficient, scalable, and user-friendly.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "4Geeks Academy",
    icon: geekStudent,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "4Geeks Academy",
    icon: geeksLogo,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in Git and GitHub for version control.",
      "Assisted Fullstack Bootcamp instructors in teaching students front-end and back-end web development technologies.",
      "Participated in staff meetings and training sessions to stay up-to-date with course curriculum and best practices in teaching and learning.",
      "Provided technical support to students in debugging and troubleshooting issues with their projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I recommend Cristian as a valuable professional with a great knowledge and ability to solve problems and find the right technological solutions for each task, compensating his lack of experience with talent and creativity.",
    name: "Agustin Rodilla",
    designation: "Team Leader",
    company: "Randstad España",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "Cristian is a highly motivated and proactive individual who strives to improve every day. He welcomes constructive criticism and actively seeks out solutions to overcome challenges. I believe he has a promising future as a developer.",
    name: "Marco Gonzalo",
    designation: "Engineering Manager",
    company: "Factorial",
    image: "https://media.licdn.com/dms/image/C4D03AQG4VZcFZ8CjsQ/profile-displayphoto-shrink_100_100/0/1596885291686?e=1687996800&v=beta&t=t3ZepmLtFFsBhh205Z_zOk9Dpo7EH28gaov-e0y2YOA",
  },
  {
    testimonial:
      "Professional-level problem-solving skills and solid knowledge. Shows leadership and good practices in team projects and quickly resolves code problems. Responsible, dedicated, and highly motivated to become a great professional.",
    name: "Jesus Abril",
    designation: "CTO",
    company: "Labelgrup Network Solutions",
    image: "https://media.licdn.com/dms/image/D4D03AQEbxL24eyRByw/profile-displayphoto-shrink_200_200/0/1632380687177?e=1687996800&v=beta&t=3SVqk1sMj2Iasp3_0XZPeKpclzgjOhLTnadTwqpd1wg",
  },
  {
    testimonial:
      "I highly recommend this developer for any project. With exceptional problem-solving skills and strong technical knowledge, they consistently deliver high-quality work. I have no doubt he will continue to excel in their career.",
    name: "José Mª Linuesa",
    designation: "Development Team Lead",
    company: "TechVerse",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    testimonial:
      "Cristian has consistently demonstrated exceptional performance and a strong work ethic, making him a valuable asset to our team. His contributions have been crucial to several successful projects.",
    name: "Ana Rueda",
    designation: "Software Arquitect",
    company: "Innovatek Solutions",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const projects = [
  {
    name: "Tweeter",
    description:
      "This project develops a Twitter clone using modern tech. Users can post tweets, follow others, and engage with content. It offers a learning experience for developers and a platform for users to connect.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tweeter,
    source_code_link: "https://github.com/CleverProgrammers/twitter-clone",
  },
  {
    name: "Pokeducator!",
    description:
      "This web app uses AI to let users combine objects and experiment with different combinations. Users can compare and share their creations with others through voting and sharing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: pokeducator,
    source_code_link: "https://github.com/CristiianGB/pokeducator",
  },
  {
    name: "Quick Food",
    description:
      "This food delivery app offers a convenient online ordering experience from various restaurants with real-time tracking and personalized recommendations based on user preferences.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: quickFood,
    source_code_link: "https://github.com/CristiianGB/Food_Delivery_App",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
