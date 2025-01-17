import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiOracle,
} from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="bg-[#333] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-200 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Dhanush Kanagaraj</span>, a MERN stack developer with a strong
          foundation in modern web development and a passion for solving real-world problems. I am eager to contribute
          to impactful projects and thrive in collaborative environments.
        </p>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Skill Boxes */}
            {[
              { Icon: FaHtml5, color: "#e34c26", name: "HTML5" },
              { Icon: FaCss3Alt, color: "#264de4", name: "CSS3" },
              { Icon: FaJsSquare, color: "#f7df1e", name: "JavaScript" },
              { Icon: FaReact, color: "#61dbfb", name: "React.js" },
              { Icon: FaNode, color: "#68a063", name: "Node.js" },
              { Icon: SiExpress, color: "#000000", name: "Express.js" },
              { Icon: SiMongodb, color: "#47a248", name: "MongoDB" },
              { Icon: SiNextdotjs, color: "#000", name: "Next.js" },
              { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
              { Icon: SiOracle, color: "#f80000", name: "Oracle" },
              { Icon: FaJava, color: "#007396", name: "Java" },
              { Icon: SiBootstrap, color: "#563d7c", name: "Bootstrap" },
              { Icon: SiTailwindcss, color: "#38bdf8", name: "Tailwind CSS" },
            ].map(({ Icon, color, name }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-[#444] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_rgba(254,86,23,0.6)]"
                style={{ color }}
              >
                <Icon size={40} />
                <span className="mt-2 font-bold text-gray-200">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
