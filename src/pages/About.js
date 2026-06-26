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
            A Full-Stack Software Developer with a strong
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
            understanding of how technical solutions should support both users
            and business needs.
          </p>

          <p className="about-paragraph">
            My strongest area is frontend development using HTML, CSS,
            JavaScript, TypeScript, and React. I enjoy building responsive,
            interactive, and user-focused interfaces that feel intuitive, polished,
            and purposeful.
          </p>

  {/* add authentication and authroization below once done with Bubblitz - Score Manager */}
          <p className="about-paragraph">
            I have expanded my backend development skills through Node.js,
            Express.js, Prisma ORM, PostgreSQL, RESTful APIs, environment variables, 
            CORS configuration, and cloud deployment using platforms such as Vercel, 
            Render, and Neon.
          </p>

          <p className="about-paragraph">
            My recent projects include a deployed full-stack browser game featuring 
            persistent database storage, leaderboard ranking, score submission, and RESTful 
            APIs, along with responsive React applications built from concept through 
            deployment.
          </p>

          <p className="about-paragraph">
            Beyond coding, I value collaboration, continuous improvement, and
            thoughtful user experience. I enjoy solving problems through clean,
            maintainable code and continuously challenging myself by building 
            increasingly sophisticated applications that strengthen both my 
            frontend and backend skills.
          </p>

          <p className="about-paragraph">
            I look forward to contributing to meaningful software projects while 
            continuing to grow as a Full-Stack Software Developer and delivering 
            practical, user-focused solutions.
          </p>

        </div>
      </article>
    </>
  );
};

export default About;