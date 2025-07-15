import { useParallax } from "react-scroll-parallax";
import fullbg from "../assets/bg.png";
import buildings from "../assets/buildings.png";

const Hero = () => {
  const buildingsRef = useParallax({translateY:[-40,50]})

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <img alt="San Francisco Skyline" src={fullbg} className="absolute top-0 left-0 w-full h-full object-cover z-0"></img>
      <img alt="San Francisco Skyline" ref={buildingsRef.ref} src={buildings} className="absolute -bottom-20 left-0 w-full h-full object-cover z-0"></img>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-black/50 to-black/100  bg-opacity-10 z-10"></div>
      <div  className="relative z-20 h-full w-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold text-white">Christian Morales</h1>
        <p className="mt-4 text-xl">Software Engineer</p>
        {/* New Resume Download Button */}
        <a
          href="/path/to/resume.pdf" // Update with the actual path to your resume
          download
          className="mt-6 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="mt-6 text-white animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 16l-4-4m4 4l4-4m-4 4V4"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
