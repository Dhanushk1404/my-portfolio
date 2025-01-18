import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#333333]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            I’m <span className="text-[#fe5617]">Dhanush K</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2 text-white">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer .",
                  "Backend Developer .",
                  "Full Stack Developer .",
                  "Devops Engineer .",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 font-medium">
              A passionate MERN stack enthusiast with a strong foundation in building user-friendly web applications. Eager to learn, grow, and contribute to dynamic teams. Enthusiastic about sharing knowledge as a tutor and content creator, fostering innovation and collaboration.
          </p>

          
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold text-white">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Namakkal</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>9677459394</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>dhanushkanagaraj007@gmail.com</span>
            </div>
          </div>
         
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold shadow-lg ">
            <a href="">Download CV</a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-[50px]"
            src="/profile.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
