
import profileImg from '../image/Arbaj-pic.jpg'; 

function Home() {
  return (
    <div id="Home" className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center mt-28 px-4">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 rounded-lg">
        <img 
          src={profileImg}
          alt="Arbaz Khan" 

          className="w-60 h-60 rounded-lg object-fill shadow " 
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white">
          <span className="typing-effect">Hi, I'm Arbaz Khan</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
        A Front-End Developer specializing in building responsive, fast, and user-friendly web applications using React and modern web technologies.
        </p>
        <a 
          href="Resume/Arbaz-Khan.pdf" 
          download 
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Download CV
        </a>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .typing-effect {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #fff;
          animation: typing 4s steps(30, end) infinite, blink 0.75s step-end infinite;
          max-width: 58%;
        }

        @keyframes typing {
          0%, 100% {
            width: 0;
          }
          50% {
            width: 100%;
          }
        }

        @keyframes blink {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: #fff;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
