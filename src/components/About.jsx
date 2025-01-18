import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { DiJava } from "react-icons/di"; 
import { SiPostgresql } from "react-icons/si"; 

const About = () => {
  return (
    <div id="about" className="bg-[#333] min-h-screen flex items-center pt-10">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-200 text-center leading-relaxed">
  I’m <span className="font-bold text-[#fe5617]">Dhanush Kanagaraj</span>, a MERN stack developer with a solid understanding of modern web development. I specialize in building responsive and user-friendly applications using MongoDB, Express.js, React, and Node.js. I enjoy solving real-world problems and creating easy-to-use digital experiences.
  <br /><br />
  I work well in teams and love contributing to meaningful projects. I’m always eager to learn new things, improve my skills, and find better ways to develop software. Let’s work together to create something amazing!
</p>


        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill Boxes */}
            {[
              { Icon: FaHtml5, color: "#e34c26", name: "HTML5", level: "90%" },
              { Icon: SiTailwindcss, color: "#38bdf8", name: "Tailwind CSS", level: "90%" },
              { Icon: FaJsSquare, color: "#f7df1e", name: "JavaScript", level: "80%" },
              { Icon: FaReact, color: "#61dbfb", name: "React.js", level: "85%" },
              { Icon: FaNode, color: "#68a063", name: "Node.js", level: "75%" },
              { Icon: FaGithub, color: "#000000", name: "GitHub", level: "70%" },
              { Icon: SiExpress, color: "#000000", name: "Express.js", level: "80%" },
              { Icon: SiMongodb, color: "#47a248", name: "MongoDB", level: "80%" },
              { Icon: SiNextdotjs, color: "#000000", name: "Next.js", level: "70%" },
              { Icon: SiPostman, color: "#ef5b25", name: "Postman", level: "80%" },
              { Icon: DiJava, color: "#f8981d", name: "Java", level: "75%" }, 
              { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL", level: "80%" }, 
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[#444] hover:shadow-xl hover:shadow-[#fe5617]/70 transition-all duration-300 transform hover:scale-105"
              >
                <skill.Icon size={40} style={{ color: skill.color }} />
                <span className="font-bold text-gray-200 mt-2">{skill.name}</span>
                <span className="text-sm text-gray-400 font-bold mt-1">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
