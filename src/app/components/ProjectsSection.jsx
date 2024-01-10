"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dubai Safari Website",
    description: "dubai safari is website to show beauty of travel to your favourite destination and enjoy of it",
    image: "/images/projects/1.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/dubai_safari_app",
    previewUrl: "https://dubai_safari.surge.sh/",
  },
  {
    id: 2,
    title: "Quiz App",
    description: "application that render to user general questions and display the result",
    image: "/images/projects/2.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/quiz_app",
    previewUrl: "https://silly-string.surge.sh/",
  },
  {
    id: 3,
    title: "TD Website",
    description: "this is a website design from template three of elzero web school channel",
    image: "/images/projects/3.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/TD?tab=readme-ov-file",
    previewUrl: "https://karimashour.github.io/TD/",
  },
  {
    id: 4,
    title: "Dictionary App",
    description: "The app displays to the user the meaning of the word",
    image: "/images/projects/4.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/Dictionary_App?tab=readme-ov-file",
    previewUrl: "https://karimashour.github.io/Dictionary_App/",
  },
  {
    id: 5,
    title: "Book Store App",
    description: "Book Store application where the user can buy and display the favourite books",
    image: "/images/projects/5.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/Book-Store",
    previewUrl: "https://book-store-website.surge.sh/",
  },
  {
    id: 6,
    title: "Movies App",
    description: "movie application that render to user movies and he can controls in it .",
    image: "/images/projects/6.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/Movie-App",
    previewUrl: "https://65479a1f30cd2a4bf9448acd--comforting-crepe-e00783.netlify.app/",
  },
  {
    id: 7,
    title: "Pokemon App",
    description: "app where user can change the render names by click button.",
    image: "/images/projects/7.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/Pokemon-Api",
    previewUrl: "https://654922bd9aa76209dfa67e88--heroic-treacle-e83d7d.netlify.app/",
  },
  {
    id: 8,
    title: "Headphones Website",
    description: "Beautiful headphone landing page using HTML, CSS and JAVASCRIPT",
    image: "/images/projects/8.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/Headphones-Design?tab=readme-ov-file",
    previewUrl: "https://karimashour.github.io/Headphones-Design/",
  },
  {
    id: 9,
    title: "my old portfolio Website",
    description: "this is my current portfolio for some of my works in web development",
    image: "/images/projects/9.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/portfolio",
    previewUrl: "https://karimashour.github.io/portfolio/",
  },
  {
    id: 10,
    title: "Info Design Website",
    description: "info-design website by bootstrab v5",
    image: "/images/projects/10.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/info-template?tab=readme-ov-file",
    previewUrl: "https://karimashour.github.io/info-template/",
  },
  {
    id: 11,
    title: "Full Stack Amazon Clone",
    description: "user can buy products from amazon clone application and also can do payment from payment page by his visa card full completely",
    image: "/images/projects/11.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/amazon-clone?tab=readme-ov-file",
    previewUrl: "https://steadfast-twist.surge.sh/",
  },
  {
    id: 12,
    title: "Shopping Cart",
    description: "website store available to users where can add products in cart and control to remove and see total price",
    image: "/images/projects/12.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/shopping-cart",
    previewUrl: "https://6558a32643f259569655ed97--silver-genie-7c1efb.netlify.app/",
  },
  {
    id: 13,
    title: "React Authentication With Firebase",
    description: "React Authentication With Firebase",
    image: "/images/projects/13.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/React_Authentication_With_Firebase",
    previewUrl: "https://655a082151cc1b32063ba372--aesthetic-meerkat-290f69.netlify.app/login",
  },
  {
    id: 14,
    title: "Employee Management Software",
    description: "software where user can [add-edit-delete] employee in the table",
    image: "/images/projects/14.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/employee-management-system-",
    previewUrl: "https://zealous-rhythm.surge.sh/",
  },
  {
    id: 15,
    title: "Full-Stack Linkedin Clone",
    description: "Build a Full-Stack Linkedin Clone With React JS | Firebase V9 | Styled Components",
    image: "/images/projects/15.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/linkedin-clone",
    previewUrl: "https://655e70221c57177c9b8ded45--musical-marzipan-d9d94e.netlify.app/",
  },
  {
    id: 16,
    title: "Order Design Template",
    description: "order amazing design website template from templatemo website",
    image: "/images/projects/16.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/order-design-",
    previewUrl: "https://karimashour.github.io/order-design-/",
  },
  {
    id: 17,
    title: "Your Phone Website",
    description: "website design built with arabic language",
    image: "/images/projects/17.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/your-phone",
    previewUrl: "https://karimashour.github.io/your-phone/",
  },
  {
    id: 18,
    title: "Coffee-Design Website",
    description: "Coffee-Design website fully responsive",
    image: "/images/projects/18.png",
    tag: ["one"],
    gitUrl: "https://github.com/Karimashour/Coffee-Design-website",
    previewUrl: "https://65638465faa039140a46ec77--fanciful-swan-c19859.netlify.app/",
  },
  {
    id: 19,
    title: "Fylo-template",
    description: "Fylo-template website fully responsive",
    image: "/images/projects/19.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Fylo-templete-Preview",
    previewUrl: "https://6566002a3b334b082e9c100b--incandescent-arithmetic-51e841.netlify.app/",
  },
  {
    id: 20,
    title: "Circle-template",
    description: "Circle-template-Design website fully responsive",
    image: "/images/projects/20.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Circle-template",
    previewUrl: "https://karimashour.github.io/Circle-template/",
  },
  {
    id: 21,
    title: "Udemy Clone - E-Commerce",
    description: "Build Udemy Clone - React JS | React E-Commerce App | React Shopping Cart UI Design",
    image: "/images/projects/21.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Udemy-Clone",
    previewUrl: "https://656a112fcd95ea1292633e82--incandescent-khapse-9ffb21.netlify.app/",
  },
  {
    id: 22,
    title: "Password-Generator-App",
    description: "Password Generator App - Using HTML CSS & JavaScript",
    image: "/images/projects/22.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Password-Generator-App",
    previewUrl: "https://karimashour.github.io/Password-Generator-App/",
  },
  {
    id: 23,
    title: "Twitter-Clone",
    description: "Tailwind CSS - Twitter Clone",
    image: "/images/projects/23.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Twitter-Clone",
    previewUrl: "https://karimashour.github.io/Twitter-Clone/",
  },
  {
    id: 24,
    title: "Template design",
    description: "fully resonsive design built in react.js library",
    image: "/images/projects/24.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/-Template?tab=readme-ov-file",
    previewUrl: "https://657314c6c999e50d2d826bc5--sensational-florentine-49241e.netlify.app/",
  },
  {
    id: 25,
    title: "XO_Game ",
    description: "XO_Game programming with javascript",
    image: "/images/projects/25.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/XO_Game",
    previewUrl: "https://karimashour.github.io/XO_Game/",
  },
  {
    id: 26,
    title: "Restaurant Website",
    description: "Responsive Restaurant Website Using React JS And Tailwind CSS",
    image: "/images/projects/26.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Restaurant-website",
    previewUrl: "https://6575cefd648ed7331817723f--starlit-palmier-c83cd3.netlify.app/",
  },
  {
    id: 27,
    title: "Tabebak Website",
    description: "simple design with html css js",
    image: "/images/projects/27.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/tabebak",
    previewUrl: "https://karimashour.github.io/tabebak/",
  },
  {
    id: 28,
    title: "Calculator app",
    description: "simple calculator application",
    image: "/images/projects/28.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/calculator",
    previewUrl: "https://karimashour.github.io/calculator/",
  },
  {
    id: 29,
    title: "Travel Website",
    description: "Travel Website multi pages",
    image: "/images/projects/29.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Travel-Website",
    previewUrl: "https://karimashour.github.io/Travel-Website/",
  },
  {
    id: 30,
    title: "Weather App",
    description: "simple website display the weather state in the world to users",
    image: "/images/projects/30.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Weather_app",
    previewUrl: "https://karimashour.github.io/Weather_app/",
  },
  {
    id: 31,
    title: "Admin-Dashboard",
    description: "fully responsive admin dashboard page using react.js library",
    image: "/images/projects/31.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/admin-dashboard",
    previewUrl: "https://658079be92f9786c0c7c6ca8--dapper-moxie-91d630.netlify.app/",
  },
  {
    id: 32,
    title: "billo template design",
    description: "billo template design",
    image: "/images/projects/32.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/BILLO",
    previewUrl: "https://karimashour.github.io/BILLO/",
  },
  {
    id: 33,
    title: "Vast-Template design",
    description: "Responsive App Landing Page Using HTML CSS JavaScript",
    image: "/images/projects/33.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Vast-Template",
    previewUrl: "https://karimashour.github.io/Vast-Template/",
  },
  {
    id: 34,
    title: "Main-Template design",
    description: "responsive website with bootstrap5",
    image: "/images/projects/34.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Main-Template",
    previewUrl: "https://main-template-ecru.vercel.app/",
  },
  {
    id: 35,
    title: "ToDo-App",
    description: "simple todo appilcation using javascript",
    image: "/images/projects/35.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/ToDo-App",
    previewUrl: "https://to-do-app-blue-eight.vercel.app/",
  },
  {
    id: 36,
    title: "Architecture-landing-page",
    description: "Architecture landing page using Tailwind CSS and React JS",
    image: "/images/projects/36.png",
    tag: ["two"],
    gitUrl: "https://github.com/Karimashour/Architecture-landing-page",
    previewUrl: "https://architecture-landing-page.vercel.app/",
  },
  {
    id: 37,
    title: "Memory Card Game",
    description: "Memory Card Game using javascript",
    image: "/images/projects/37.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/Memory-Card-Game",
    previewUrl: "https://karimashour.github.io/Memory-Card-Game/",
  },
  {
    id: 38,
    title: "Fluid Gallery Website",
    description: "fluid_gallery website",
    image: "/images/projects/38.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/fluid_gallery",
    previewUrl: "https://karimashour.github.io/fluid_gallery/",
  },
  {
    id: 39,
    title: "Travel Website",
    description: "travel landing page",
    image: "/images/projects/39.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/Travel_Website",
    previewUrl: "https://karimashour.github.io/Travel_Website/",
  },
  {
    id: 40,
    title: "Foods Website",
    description: "foods website , simple landing page",
    image: "/images/projects/40.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/foods",
    previewUrl: "https://karimashour.github.io/foods/",
  },
  {
    id: 41,
    title: "Squash Website",
    description: "squash sport landing page",
    image: "/images/projects/41.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/squash",
    previewUrl: "https://karimashour.github.io/squash/",
  },
  {
    id: 42,
    title: "Learn Website",
    description: "learn website landing page",
    image: "/images/projects/42.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/learn",
    previewUrl: "https://karimashour.github.io/learn/",
  },
  {
    id: 43,
    title: "Islamic Website",
    description: "islamic website landing page",
    image: "/images/projects/43.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/islamic-website",
    previewUrl: "https://karimashour.github.io/islamic-website/",
  },
  {
    id: 44,
    title: "Fitness Website",
    description: "fitness website landing page",
    image: "/images/projects/44.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/fitness",
    previewUrl: "https://karimashour.github.io/fitness/",
  },
  {
    id: 45,
    title: "Medic-Care Website",
    description: "Medic-Care website landing page",
    image: "/images/projects/45.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/medic-care",
    previewUrl: "https://karimashour.github.io/medic-care/",
  },
  {
    id: 46,
    title: "Helping Website",
    description: "helping website landing page",
    image: "/images/projects/46.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/helping",
    previewUrl: "https://karimashour.github.io/helping/",
  },
  {
    id: 47,
    title: "Template Two",
    description: "Template two with elzero",
    image: "/images/projects/47.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/Template-two",
    previewUrl: "https://karimashour.github.io/Template-two/",
  },
  {
    id: 48,
    title: "Template One",
    description: "Template one with elzero",
    image: "/images/projects/48.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/template-one",
    previewUrl: "https://karimashour.github.io/template-one/",
  },
  {
    id: 49,
    title: "Bootsrapv5 Elzero",
    description: "template bootstrap v5 with elzero",
    image: "/images/projects/49.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/bootsrapv5_elzero",
    previewUrl: "https://karimashour.github.io/bootsrapv5_elzero/",
  },
  {
    id: 50,
    title: "Realvine Design",
    description: "responsive real estate website",
    image: "/images/projects/50.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/realvine-design",
    previewUrl: "https://karimashour.github.io/realvine-design/",
  },
  {
    id: 51,
    title: "Bootsrapv4 Elzero",
    description: "template bootstrap v4 with elzero",
    image: "/images/projects/51.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/bootstrapv4_elzero",
    previewUrl: "https://karimashour.github.io/bootstrapv4_elzero/",
  },
  {
    id: 52,
    title: "Bootsrapv3 Elzero",
    description: "template bootstrap v3 with elzero",
    image: "/images/projects/52.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/bootstrapv3_elzero",
    previewUrl: "https://karimashour.github.io/bootstrapv3_elzero/",
  },
  {
    id: 53,
    title: "Nextjs App",
    description: "full stack responsive add products website",
    image: "/images/projects/53.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/nextjs_app",
    previewUrl: "https://nextjs-app-sandy-ten.vercel.app/",
  },
  {
    id: 54,
    title: "My Github Profile",
    description: "Discover My Github Profile my-friend",
    image: "/images/projects/54.png",
    tag: ["three"],
    gitUrl: "https://github.com/Karimashour/Karimashour",
    previewUrl: "https://github.com/Karimashour/Karimashour",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("one");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="one"
          isSelected={tag === "one"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="two"
          isSelected={tag === "two"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="three"
          isSelected={tag === "three"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
