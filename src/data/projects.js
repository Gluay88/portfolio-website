// Personal and freelance projects, shown on the Projects page and the homepage
import MGNPro from "../assets/project_pic2.jpg";
import catTinder from "../assets/cat_tinder.jpg";
import shlfApp from "../assets/shlf_app.jpg";
import EnCiv from "../assets/enciv_icon.jpg";
import LloydPestControl from "../assets/lloyd-pest-control.jpg";
import TopNotchTech from "../assets/top-notch-tech.jpg";
import JWTAuth from "../assets/JWT.jpg";
import SneakyOnes from "../assets/sneakyones.jpg";
import Firebase from "../assets/firebase.jpg";
import LegoCars from "../assets/LegoCars.jpg";
import Friends from "../assets/80steam.jpg";
import ChatWithMeGPT from "../assets/ChatWithMe.jpg";
import Customers from "../assets/Customers.jpg";
import MorningMoms from "../assets/MorningMoms.jpg";

// Set `hidden: true` to keep a project out of the site without deleting it
const allProjects = [
  {
    title: "TopNotch Tech",
    type: "MERN E-Commerce",
    image: TopNotchTech,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://magnificent-blini-b769ee.netlify.app/",
    inProgress: true,
  },
  {
    title: "Morning Moms",
    type: "E-Commerce App",
    image: MorningMoms,
    tech: ["Liquid (Ruby)", "JSON", "JavaScript", "CSS", "REST API"],
    link: "https://morningmoms.myshopify.com/",
    hidden: true,
  },
  {
    title: "Customers-DB",
    type: "Full Stack App",
    image: Customers,
    tech: ["Node.js", "Express", "MongoDB", "TypeScript", "Postman", "TailwindCSS"],
    link: "https://github.com/Gluay88/customers-node-BACKEND",
  },
  {
    title: "Lego Cars",
    type: "E-Commerce App",
    image: LegoCars,
    tech: ["React", "TypeScript", "Vite", "Google Autocomplete"],
    link: "https://lego-shop-gluay.netlify.app/",
  },
  {
    title: "ChatWithMeGPT",
    type: "OpenAI ChatGPT App",
    image: ChatWithMeGPT,
    tech: ["OpenAI", "ChatGPT", "Node.js", "JavaScript"],
    link: "https://github.com/Gluay88/ChatWithMeGPT",
  },
  {
    title: "80s Dream Team",
    type: "Full Stack App",
    image: Friends,
    tech: ["Django", "Python", "React"],
    link: "https://80sfrienddreamteam.netlify.app/",
  },
  {
    title: "Firebase Authentication",
    type: "Full Stack App",
    image: Firebase,
    tech: ["Firebase", "Google Console", "TypeScript", "React"],
    link: "https://github.com/Gluay88/firebase-fullstack",
  },
  {
    title: "Sneaky Ones",
    type: "Full Stack App",
    image: SneakyOnes,
    tech: ["Node.js", "Express", "MySQL", "React"],
    link: "https://github.com/Gluay88/sneakyones",
  },
  {
    title: "Lloyd Pest Control",
    type: "Ruby on Rails App",
    image: LloydPestControl,
    tech: ["Ruby on Rails", "CSV", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Gluay88/lloyd-pest-control",
  },
  {
    title: "myBucketList",
    type: "JWT Authentication",
    image: JWTAuth,
    tech: ["JWT", "Redux", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Gluay88/JWT",
  },
  {
    title: "EnCiv",
    type: "Full Stack App",
    image: EnCiv,
    tech: ["MongoDB", "React", "Storybook", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/EnCiv/undebate-ssp",
  },
  {
    title: "MGNPro / BMOPro",
    type: "Graphic Builder",
    image: MGNPro,
    tech: ["JavaScript", "HTML", "CSS", "Illustrator", "Photoshop"],
    link: "https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0",
  },
  {
    title: "Shlf App",
    type: "Full Stack App",
    image: shlfApp,
    tech: ["Ruby on Rails", "React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Rydg-Tech/shlf-app",
  },
  {
    title: "Cat Tinder",
    type: "Full Stack App",
    image: catTinder,
    tech: ["Ruby on Rails", "React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Gluay88/cat-tinder-backend",
  },
];

export const projects = allProjects.filter((p) => !p.hidden);
