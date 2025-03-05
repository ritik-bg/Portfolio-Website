import hero from './assets/images/main.JPG'
import weather from './assets/images/weather.png'
import Ecommerce from './assets/images/e-commerce.png'
import Password from './assets/images/password.png'
import todo from './assets/images/Todo.png'


const logotext = "RITIK";
const meta = {
    title: "RITIK KUMAR",
    description: "I’m Ritik Kumar , a MERN stack developer currently working at dehradun",
};

const introdata = {
    title: "I’m RITIK KUMAR",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop 3D WEBSITES",
    },
    description: "I love to code and create seamless, user-friendly web experiences with the power of the MERN stack.",
    your_img_url : hero ,
};

const dataabout = {
    title: "About my self",
    aboutme: `Hi, I'm Ritik , a Computer Science graduate with experience as a MERN stack developer.
 I’m passionate about building impactful web applications and continuously improving my
 technical skills to solve real-world challenges.`,
};
const worktimeline = [{
        jobtitle: "Mern Stack Developer",
        where: "Briar Interactives IT Services And Solutions",
        date: "2024-present",
    },
    {
        jobtitle: "Mern Stack Developer Intern",
        where: "Briar Interactives IT Services And Solutions",
        date: "2024",
    },
   
];

const skills = [{
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 95,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Tailwind.css",
        value: 85,
    },
    {
        name: "Node.js",
        value: 70,
    },
    {
        name: "Express.js",
        value: 70,
    },
    {
        name: "Mongodb",
        value: 75,
    },
];

const services = [{
         title: "Full stack Development",
        description: "Building and managing web applications with frontend, backend, database, and deployment.",
    },
    {
        title: "Figma to Website",
        description: "Converting Figma designs into fully responsive and functional websites.",
    },
    {
        title: "Wordpress Websites",
        description: "Creating custom, responsive, and dynamic websites using WordPress.",
    },
];

const dataportfolio = [{
        img: weather,
        description: "The Weather App Is An Real Time WeatherApp Which Can Be Used To Get The Weatherinfo OF ANy City ",
        link: "https://weather-app-seven-beige-30.vercel.app/",
    },
  
    
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Upcoming",
        link: "#",
    },

    {
        img: Password ,
        description: "The PassWorld Is An Real Time Password Saver App Which Can Help You TO Save Your Password For Future Use",
        link:  "https://portfolio-fiix.vercel.app/",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Upcoming",
        link: "#",
    },
  

    
   
    
 
    {
        img: todo,
        description: "The To-Do List App Is An Real Time TO-Do App Wich Can Be Used To Save Your Daily Day- to - Day Task",
        link: "https://todo-list-app-seven-tawny.vercel.app/",
    },
    {
        img: Ecommerce,
        description: "Upcoming",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "rk7528001@gmail.com",
    YOUR_FONE: "+91-7037003577",
    description: "For any inquiries, feel free to contact me through my social handles or fill out the query form below. I’ll get back to you as soon as possible.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/ritik-bg",
    facebook: "https://www.facebook.com/profile.php?id=100015671325377",
    linkedin: "https://www.linkedin.com/in/ritik-kumar-288918313/",
   instagram: "https://www.instagram.com/theriti_k/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};