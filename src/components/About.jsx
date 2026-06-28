function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-16 py-20 pt-24"
    >
      <h2 className="text-3xl font-bold text-center">
        About Me
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-blue-500 transition md:sticky md:top-28">
          <h3 className="text-xl font-semibold mb-5">
            Who I Am
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I am a Software Engineer with nearly 3 years of experience in
            designing and developing scalable, high-performance web
            applications using modern frontend and backend technologies.
          </p>

          <p className="text-gray-400 mt-5 leading-relaxed">
            My expertise includes Angular, React, Node.js, TypeScript,
            RESTful APIs, cloud technologies, and microservices architecture.
            I enjoy building clean, maintainable, and user-centric
            applications that solve real-world business problems.
          </p>

          <p className="text-gray-400 mt-5 leading-relaxed">
            I am passionate about writing quality code, improving application
            performance, and continuously learning new technologies to build
            better software.
          </p>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Currently, I am seeking opportunities where I can contribute to
            impactful projects, collaborate with talented teams, and continue
            growing as a Full Stack Software Engineer.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* EXPERIENCE */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-6">
              Experience
            </h3>

            {/* Experience 1 */}
            <div className="border-l-2 border-blue-500 pl-5 pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h4 className="text-lg font-semibold text-white">
                  Software Engineer
                </h4>

                <span className="text-sm text-gray-500">
                  November 2023 – February 2026
                </span>
              </div>

              <p className="mt-1">
                <span className="text-blue-400 font-medium">
                  ZeroNorth
                </span>
                <span className="text-gray-500 text-sm ml-1">
                  (formerly Alpha Ori India Pvt Ltd)
                </span>
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Chennai, Tamil Nadu, India
              </p>
            </div>

            {/* Experience 2 */}
            <div className="border-l-2 border-blue-500 pl-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h4 className="text-lg font-semibold text-white">
                  Software Engineer Intern
                </h4>

                <span className="text-sm text-gray-500">
                  April 2023 – October 2023
                </span>
              </div>

              <p className="mt-1">
                <span className="text-blue-400 font-medium">
                  ZeroNorth
                </span>
                <span className="text-gray-500 text-sm ml-1">
                  (formerly Alpha Ori India Pvt Ltd)
                </span>
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-6">
              Education
            </h3>

            {/* B.Tech */}
            <div className="border-l-2 border-blue-500 pl-5 pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h4 className="text-lg font-semibold text-white">
                  B.Tech in Computer Science & Engineering
                </h4>

                <span className="text-sm text-gray-500">
                  2020 – 2023
                </span>
              </div>

              <p className="text-blue-400 font-medium mt-1">
                Mar Athanasius College of Engineering
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Kothamangalam, Kerala, India
              </p>

              <span className="inline-flex items-center mt-3 px-4 py-1.5 text-sm font-medium bg-blue-600 rounded-full text-white">
                Percentage: 80%
              </span>
            </div>

            {/* Diploma */}
            <div className="border-l-2 border-blue-500 pl-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h4 className="text-lg font-semibold text-white">
                  Diploma in Computer Engineering
                </h4>

                <span className="text-sm text-gray-500">
                  2017 – 2020
                </span>
              </div>

              <p className="text-blue-400 font-medium mt-1">
                Government Polytechnic College
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Kothamangalam, Kerala, India
              </p>

              <span className="inline-flex items-center mt-3 px-4 py-1.5 text-sm font-medium bg-blue-600 rounded-full text-white">
                Percentage: 97%
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;