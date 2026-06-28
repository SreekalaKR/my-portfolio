function Projects() {
  const projects = [
    {
      title: "ClimaFlow",
      desc: "Weather Application that allows users to search for any location and view real-time weather details.",
      tech: "React.js, REST API",
      img: "https://images.unsplash.com/photo-1727373217103-d64866ce6ee8?w=400&auto=format&fit=crop&q=60",
      github: "https://github.com/SreekalaKR/weather-app",
      live: "https://weather-app-7e74.onrender.com",
    },
    {
      title: "Flavora",
      desc: "Recipe Application that allows users to search and explore various recipes with detailed ingredients and cooking instructions.",
      tech: "React.js, REST API",
      img: "https://images.unsplash.com/photo-1615196483149-f6ab06744895",
      github: "https://github.com/SreekalaKR/recipe-app",
      live: "https://flavora.onrender.com",
    },
    {
      title: "E-Pick",
      desc: "Voice Assistant that enables hands-free interaction with the system using speech recognition and text-to-speech capabilities.",
      tech: "Python, Wikipedia API",
      img: "https://images.unsplash.com/photo-1603899122724-98440dd9c400?q=80&w=1074&auto=format&fit=crop",
      github: "https://github.com/SreekalaKR/e-pick",
      live: "https://github.com/SreekalaKR/e-pick",
    },
    {
      title: "SmartMarine",
      desc: "Marine Management Application to streamline marine-related operations.",
      tech: "Angular, Node.js",
      img: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1171&auto=format&fit=crop",
      github: "https://github.com/SreekalaKR/smart-marine",
      live: "https://github.com/SreekalaKR/smart-marine",
    },
    {
      title: "BioGrip",
      desc: "Bionic Hand focused on simulating human hand movements using sensor-based controls and embedded systems to enable responsive and efficient gesture-based functionality.",
      tech: "Python, RNN, EMG",
      img: "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?w=600",
      github: "https://github.com/SreekalaKR/smart-bionic-hand",
      live: "https://github.com/SreekalaKR/smart-bionic-hand",
    },
    {
      title: "KhaamCircle",
      desc: "Web-based Job Portal designed to easily find job opportunities.",
      tech: "Java, JSP, MySQL",
      img: "https://images.unsplash.com/photo-1758874573187-33287de770d9?q=80&w=1332&auto=format&fit=crop",
      github: "https://github.com/SreekalaKR/khaam-circle",
      live: "https://github.com/SreekalaKR/khaam-circle",
    },
    {
      title: "LibraryHub",
      desc: "Library Management System to manage books and user records.",
      tech: "Angular, Node.js",
      img: "https://images.unsplash.com/photo-1709924168698-620ea32c3488?w=600&auto=format&fit=crop",
      github: "https://github.com/SreekalaKR/smart-library-system",
      live: "https://github.com/SreekalaKR/smart-library-system",
    },
    {
      title: "AstroVista",
      desc: "Web Application that provides astrology-related services such as horoscope generation, astrologer consultation booking, and user management.",
      tech: "React.js, Python",
      img: "https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?q=80&w=1208&auto=format&fit=crop",
      github: "https://github.com/SreekalaKR/astrology-app",
      live: "https://github.com/SreekalaKR/astrology-app",
    },
    {
      title: "NexCart",
      desc: "E-commerce Application for browsing products, adding items to cart, and placing orders.",
      tech: "React.js, REST API",
      img: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      github: "https://github.com/SreekalaKR/ecommerce-app",
      live: "https://github.com/SreekalaKR/ecommerce-app",
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-16 py-20 pt-24">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <p className="text-gray-400 text-center mt-2 max-w-4xl mx-auto">
        A collection of projects demonstrating my skills in building scalable,
        responsive, and user-focused web applications.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-gray-900
              border border-gray-800
              rounded-xl
              overflow-hidden
              shadow-lg
              group
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Live
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.desc}
              </p>

              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-medium">
                  {project.tech}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;