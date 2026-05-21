function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-16 py-20 pt-24"
    >
      <h2 className="text-3xl font-bold text-center">
        About Me
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE - ABOUT */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Who I Am
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I am a Software Engineer with close to 3 years of experience in building scalable and high-performance web applications.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I specialize in developing clean, maintainable, and user-focused applications with strong expertise in both frontend and backend development.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I enjoy solving real-world problems and continuously improving application performance, architecture, and user experience.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I am actively seeking opportunities to apply my skills in impactful projects and contribute to real-world applications while growing as a developer.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* EXPERIENCE */}
          {/* EXPERIENCE */}
<div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
  <h3 className="text-xl font-semibold mb-6">
    Experience
  </h3>

  <div className="border-l-2 border-blue-500 pl-4">
    <p className="text-white font-medium">
      Software Engineer L1
    </p>

    <p className="text-gray-400 text-sm">
      ZeroNorth | Tamilnadu, India
    </p>

    <p className="text-gray-500 text-sm">
      Nov 2023 – Feb 2026
    </p>

    <p className="text-gray-400 mt-3 text-sm">
      Employment Type: Permanent
    </p>
  </div>
   <div className="border-l-2 border-blue-500 pl-4">
    <p className="text-white font-medium">
      Software Engineer Intern
    </p>

    <p className="text-gray-400 text-sm">
      Alpha Ori India Private Limited | Tamilnadu, India
    </p>

    <p className="text-gray-500 text-sm">
      April 2023 – Oct 2023
    </p>

    <p className="text-gray-400 mt-3 text-sm">
      Employment Type: Permanent
    </p>
  </div>
</div>

          {/* EDUCATION */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">
              Education
            </h3>

            {/* ITEM 1 */}
            <div className="border-l-2 border-blue-500 pl-4 mb-6">
              <p className="text-white font-medium">
                B.Tech in Computer Science and Engineering
              </p>

              <p className="text-gray-400">
                Mar Athanasius College of Engineering, Kothamangalam | Kerala, India 
              </p>

              <p className="text-sm text-gray-500">
                2020 - 2023
              </p>

              <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-600 rounded-full">
                CGPA : 8.25
              </span>
            </div>

            {/* ITEM 2 */}
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-white font-medium">
                Diploma in Computer Engineering
              </p>

              <p className="text-gray-400">
                Govt.Polytechnic College, Kothamangalam | Kerala, India
              </p>

              <p className="text-sm text-gray-500">
                2017 - 2020
              </p>

              <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-600 rounded-full">
                CGPA : 9.7
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;