function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-20"
    >
      <h1 className="text-5xl font-bold">
        Hi, I'm Sreekala K R
      </h1>

      <p className="text-gray-400 mt-3">
        Software Engineer | Angular Specialist | Node.js & Express.js | Building Scalable Web Applications
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>

        <button
          onClick={scrollToProjects}
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          View Projects
        </button>
      </div>
    </section>
  );
}

export default Hero;