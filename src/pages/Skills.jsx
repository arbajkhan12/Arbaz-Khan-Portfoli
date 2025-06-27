
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 text-5xl mb-2" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-5xl mb-2" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-5xl mb-2" /> },
    { name: 'React.js', icon: <FaReact className="text-cyan-400 text-5xl mb-2" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-5xl mb-2" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-5xl mb-2" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300 text-5xl mb-2" /> },
  ];

  return (
    <div id="Skills" className="w-[90%] max-w-5xl mx-auto p-6 mt-10 bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            {skill.icon}
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
