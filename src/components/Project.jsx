import { useState } from "react";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Travel Website",
      image: "https://uicookies.com/wp-content/uploads/2019/03/Vacation.jpg",
      description:
        "A visually stunning and fully responsive travel website built using HTML and CSS. This project offers a seamless browsing experience with captivating designs, easy navigation, and essential travel information to inspire your next adventure.",
      link: "https://github.com/your-username/travel-website",
    },
    {
      id: 2,
      title: "Nike Website Clone",
      image:
        "https://cdn.dribbble.com/users/951381/screenshots/11333730/mockup-1_4x.jpg",
      description:
        "A fully responsive Nike website clone built using the MERN stack and styled with Tailwind CSS. This project replicates the sleek design of the Nike website and includes features like product browsing, detailed product pages, and an intuitive user interface for an engaging shopping experience.",
      link: "https://github.com/Dhanushk1404/NikeClone",
    },
    {
      id: 3,
      title: "Rock Paper Scissors Game",
      image:
        "http://www.mommypeach.com/wp-content/uploads/2016/02/rock-paper-scissors-1238146.jpg",
      description:
        "A fun and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript. Features dynamic gameplay logic and an intuitive interface. Perfect for casual gaming.",
      link: "https://github.com/your-username/rock-paper-scissors",
    },
  ];

  const mainProject = {
    title: "Expense Tracker",
    image:
      "https://www.arkasoftwares.com/blog/wp-content/uploads/2022/04/expense-tracker-app.png",
    description:
      "A feature-rich Expense Tracker application built using the MERN stack. This app helps users track their income and expenses, view detailed insights through charts, and manage their financial goals efficiently. Styled with Tailwind CSS for a modern and responsive interface.",
    link: "https://github.com/Dhanushk1404/ExpenseTracker",
  };

  return (
    <div id="project" className="bg-[#333] min-h-screen flex flex-col items-center">
      <div className="max-w-[90%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617] pt-10">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center bg-[#333333] p-6 rounded-2xl shadow-lg hover:shadow-[#fe5617]/70 transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-[300px] h-[200px] object-cover"
              />
              <h1 className="text-[#fe5617] font-extrabold text-[24px] mb-4 text-center">
                {project.title}
              </h1>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-[#fe5617] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e14d15] transition-colors"
              >
                Know More
              </button>
            </div>
          ))}
        </div>

        {/* Main Project Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#fe5617]">
            Main Project : Expense Tracker
          </h2>
          <div className="mt-8 flex flex-col items-center">
            <div
              className="flex flex-col md:flex-row items-center bg-[#333333] p-8 rounded-3xl shadow-lg hover:shadow-[#fe5617]/70 transition-all duration-300 transform hover:scale-105 max-w-[90%] md:max-w-[70%]"
            >
              <img
                src={mainProject.image}
                alt={mainProject.title}
                className="rounded-lg shadow-lg w-[400px] h-[250px] object-cover md:mr-8"
              />
              <div className="mt-6 md:mt-0 max-w-[500px] text-gray-200 space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#fe5617]">
                  {mainProject.title}
                </h3>
                <p>{mainProject.description}</p>
                <a
                  href={mainProject.link}
                  className="inline-block mt-4 bg-[#fe5617] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#e14d15] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-[#333333] rounded-2xl shadow-lg p-6 max-w-[90%] md:max-w-[50%] text-gray-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-[#fe5617] transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-[#fe5617] mb-4">
              {selectedProject.title}
            </h2>
            <p className="mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              className="text-[#fe5617] font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Now!
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
