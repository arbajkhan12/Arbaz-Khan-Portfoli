
import flixnow from "../image/flixnow-movie .png"
import Todo from "../image/to-do-app.png"

function Projects() {
  return (
    <div id="Projects" className="w-[90%] max-w-6xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
       
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-600 transition-shadow duration-300">
          <img 
            src={flixnow} 
            alt="FlixNow Project Screenshot"
            className="w-full h-60 object-cover "
          />
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-white">FlixNow</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              A movie streaming web app built with <span className="text-white">React</span>, <span className="text-white">Redux Toolkit</span>, and <span className="text-white">React Router</span>. Key features include <span className="text-white">infinite scrolling</span>, <span className="text-white">detailed movie pages</span>, and a fully <span className="text-white">responsive design</span>.
            </p>
            <a
              href="https://arbajkhan12.github.io/FlixNow-Movie/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* To-Do List App */}
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-600 transition-shadow duration-300">
          <img
            src={Todo} 
            alt="To-Do List App Screenshot"
            className="w-full h-60 object-cover"
          />
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-white">To-Do List App</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              A sleek task management app built using <span className="text-white">React</span>. Features include <span className="text-white">dark/light mode</span>, task <span className="text-white">add, delete, rename</span>, and a clean responsive UI to help stay organized.
            </p>
            <a
              href="https://arbajkhan12.github.io/To-do-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
