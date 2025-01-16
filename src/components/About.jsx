import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaFigma,
    FaNode,
  } from "react-icons/fa";
  import {
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiNextdotjs,
    SiNetlify,
    SiMongodb,
    SiSocketdotio,
    SiPostman,
    SiGraphql,
    SiRedux,
    SiJsonwebtokens,
    SiRender,
  } from "react-icons/si";
  import { TbBrandFramerMotion } from "react-icons/tb";
  import { DiVisualstudio } from "react-icons/di";
  import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";
  const About = () => {
    return (
      <div id="about" className="bg-[#333] min-h-screen flex items-center">
        <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
            About Me
          </h1>
  
          <p className="text-lg md:text-xl text-gray-200 text-center leading-relaxed">
            I’m <span className="font-bold text-[#fe5617]">Dhanush Kanagaraj</span>,
            an enthusiastic MERN stack developer eager to start my journey in the tech industry.
            With a strong foundation in web development, I’ve built several micro-projects to
            enhance my skills and understanding. As a learner, I’m deeply committed to continuous
            growth and passionate about crafting impactful solutions. Currently, I’m a pre-final
            year B.Tech student in Computer Science Engineering, excited to contribute to real-world
            projects and collaborate with innovative teams.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  
  