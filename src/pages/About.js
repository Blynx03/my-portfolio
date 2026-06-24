import "./about.css";

const About = () => {
  return (
    <>
      <article className="about-article-container">
        <h2 className="about-header">About Me</h2>
        <div className="about-header-caption"> - Let's build something remarkable together! -</div>

        <hr/>
        <div className="about-section-description">
          <p className="about-paragraph">
            Hi! My name is Charlie Chan, a Full-Stack Developer with a strong
            foundation in frontend development and hands-on experience building
            complete web applications from concept to deployment.
          </p>

          <p className="about-paragraph">
            Before transitioning into web development, I worked for many years in
            the printed circuit board industry as a Senior Quotation Analyst,
            where I developed strong problem-solving, cost analysis,
            communication, and technical decision-making skills.
          </p>

          <p className="about-paragraph">
            That experience shaped how I approach software development today:
            with attention to detail, patience, adaptability, and a practical
            understanding of how technical solutions should support real users
            and real business needs.
          </p>

          <p className="about-paragraph">
            My main strength is frontend development using HTML, CSS,
            JavaScript, TypeScript, and React. I enjoy building responsive,
            interactive, and user-focused interfaces that feel clear, polished,
            and purposeful.
          </p>

          <p className="about-paragraph">
            I have also expanded into backend development with Node.js,
            Express.js, Prisma ORM, PostgreSQL, RESTful APIs, environment
            variables, CORS configuration, and cloud deployment using platforms
            such as Vercel, Render, and Neon.
          </p>

          <p className="about-paragraph">
            My recent projects include responsive websites, interactive browser
            games, REST API integrations, and a deployed full-stack application
            with persistent database storage, leaderboard ranking, and score
            submission features.
          </p>

          <p className="about-paragraph">
            Beyond coding, I value collaboration, continuous improvement, and
            thoughtful user experience. I enjoy solving problems through clean,
            maintainable code and building projects that challenge me to grow as
            a developer.
          </p>

          <p className="about-paragraph">
            When I'm not coding, I enjoy hiking, biking, tennis, golf, and other
            outdoor activities that help me recharge and stay curious.
          </p>

          <p className="about-paragraph">
            I'm excited to continue growing in the software development field
            and contribute to meaningful digital experiences through practical
            problem-solving, modern web technologies, and a strong commitment to
            learning.
          </p>

        </div>
      </article>
    </>
  );
};

export default About;