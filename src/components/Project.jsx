const Project = () => {
    return (
      <div id="project" className="bg-[#333] min-h-screen flex items-center">
        <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
            My Projects
          </h1>
  
          {/* Project 1 and 2 in one row */}
         <div className="flex flex-col md:flex-col gap-10 ">
            {/* PetPals Project */}
            <div className="w-full md:w-1/2 flex flex-col items-center bg-[#333333] p-6 rounded-2xl shadow-lg  hover:shadow-[#fe5617]/70 transition-all duration-300 transform hover:scale-105">
                <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
                         Expense Tracker
               </h1>
            <p className="text-lg text-gray-200 mb-4 ">
              A feature-rich Expense Tracker application built using the MERN stack. This app helps users track their income and expenses, view detailed insights through charts, and manage their financial goals efficiently. Styled with Tailwind CSS for a modern and responsive interface.
            </p>
             <a
                 href="https://github.com/Dhanushk1404/ExpenseTracker"
                 className="text-[#fe5617] font-bold text-lg hover:underline"
             >
            Live Demo
              </a>
            </div>

  
            <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#333333] p-6 rounded-2xl shadow-lg hover:shadow-[#fe5617]/70 transition-all duration-300 transform hover:scale-105">
                <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
                   Nike Website Clone
                  </h1>
                  <p className="text-lg text-gray-200 mb-4">
                       A fully responsive Nike website clone built using the MERN stack and styled with Tailwind CSS. This project replicates the sleek design of the Nike website and includes features like product browsing, detailed product pages, and an intuitive user interface for an engaging shopping experience.
                   </p>
                 <a
                     href="https://github.com/Dhanushk1404/NikeClone"
                    className="text-[#fe5617] self-center font-bold text-lg hover:underline"
                  >
                    Link !!
                   </a>
                </div>

          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default Project;
  