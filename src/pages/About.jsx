import React from "react";

const About = () => {
  return (
    <div className="text-justify">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-neutral-800 mb-8">
        About Us
      </h1>
      <p className="text-base sm:text-lg text-neutral-600 mb-6">
        Welcome to{" "}
        <strong className="text-blue-600">Sacred Law Scholers</strong>, your
        trusted source for in-depth analysis, commentary, and updates on the
        latest developments in the legal world. We are a team of legal
        professionals, scholars, and writers passionate about making complex
        legal topics accessible and understandable for everyone.
      </p>
      <p className="text-base sm:text-lg text-neutral-600 mb-8">
        Founded in [Year], our mission is to provide high-quality,
        well-researched content that empowers individuals, businesses, and legal
        practitioners to stay informed and make better decisions. Whether you're
        a law student, a practicing attorney, or simply someone interested in
        the law, we aim to be your go-to resource for legal knowledge.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
        Our Mission
      </h2>
      <p className="text-base sm:text-lg text-neutral-600 mb-6">
        At <strong className="text-blue-600">Sacred Law Scholers</strong>, we
        believe that understanding the law is essential for a just and equitable
        society. Our mission is to:
      </p>
      <ul className="space-y-4 mb-8">
        <li className="flex items-start">
          <span className="text-blue-600 mr-3">✔️</span>
          <span className="text-base sm:text-lg text-neutral-700">
            <strong>Educate:</strong> Break down complex legal concepts into
            clear, actionable insights.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-3">✔️</span>
          <span className="text-base sm:text-lg text-neutral-700">
            <strong>Inform:</strong> Provide timely updates on legal news, case
            law, and legislative changes.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-3">✔️</span>
          <span className="text-base sm:text-lg text-neutral-700">
            <strong>Empower:</strong> Equip our readers with the knowledge they
            need to navigate the legal landscape confidently.
          </span>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Our Team</h2>
      <p className="text-base sm:text-lg text-neutral-600 mb-6">
        Our team consists of experienced attorneys, legal scholars, and writers
        who bring diverse perspectives and expertise to our content. We are
        united by our commitment to accuracy, clarity, and excellence in legal
        journalism.
      </p>
      <p className="text-base sm:text-lg text-neutral-600 mb-6">
        Meet some of our contributors:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Contributer
          name={"Hrishabh Jain"}
          designation={"Software Engineer"}
          description={"Proficient in Full stack development"}
        />
        <Contributer
          name={"Ayush Mishra"}
          designation={"Full-Stack Developer"}
          description={"A Developer with nische in Law"}
        />
        <Contributer name={"Priyal Jaiswal"} designation={"Senior Data analyst"} description={"A developer with very strong analytics skills"} />
      </div>

      <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
        Why Trust Us?
      </h2>
      <p className="text-base sm:text-lg text-neutral-600 mb-6">
        We pride ourselves on delivering accurate, well-researched, and unbiased
        content. Every article is thoroughly vetted by legal experts to ensure
        it meets the highest standards of quality and reliability.
      </p>
      <p className="text-base sm:text-lg text-neutral-600">
        Thank you for visiting{" "}
        <strong className="text-blue-600">Sacred Law Scholers</strong>. We look
        forward to being your trusted partner in understanding the law.
      </p>
    </div>
  );
};

const Contributer = ({ name, designation, description }) => {
  return (
    <div className="bg-neutral-100 p-4 rounded-lg rounded border border-neutral-200">
      <h3 className="text-xl font-semibold text-neutral-800">{name}</h3>
      <p className="text-sm text-neutral-600">{designation}</p>
      <p className="text-base text-neutral-700 mt-2">{description}</p>
    </div>
  );
};

export default About;
