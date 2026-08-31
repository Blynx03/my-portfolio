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
            I am a Full-Stack Software Developer with a strong foundation in frontend 
            development and hands-on experience designing, building, and deploying 
            complete web applications from concept to production.
          </p>

          <p className="about-paragraph">
            Before transitioning into software development, I spent many years in
            the printed circuit board industry as a Senior Quotation Analyst,
            where I developed strong problem-solving, cost analysis,
            communication, leadership, and technical decision-making skills.
          </p>

          <p className="about-paragraph">
            That experience continues to shape how I approach software development 
            today: with attention to detail, adaptability, and a practical understanding 
            of how technical solutions should support both users and business needs.
          </p>

          <p className="about-paragraph">
            My strongest area is frontend development using HTML, CSS,
            JavaScript, TypeScript, and React. I enjoy creating responsive,
            interactive, and user-focused interfaces using reusable components,
            React Hooks, Context API, and maintainable application architecture.
          </p>

          <p className="about-paragraph">
            I have expanded my full-stack capabilities through Node.js,
            Express.js, Prisma ORM, PostgreSQL, and RESTful APIs. My recent work includes
            JWT-based authentication, bcrypt password hashing, role-based access control (RBAC),
            protected API routes, CRUD operations, authorization middleware, and API testing with
            Postman.
          </p>

          <p className="about-paragraph">
            My projects include a deployed full-stack browser game with persistent data storage, 
            leaderboard ranking, score validation, and RESTful APIs, as well as a full-stack 
            administration and score management application with authentication, authorization, 
            database management, filtering, sorting, and administrative functionality. I have 
            deployed applications using Vercel, Render, and Neon PostgreSQL.
          </p>

          <p className="about-paragraph">
            Beyond coding, I value collaboration, continuous improvement, and thoughtful user 
            experience. I enjoy solving problems through clean, maintainable code and building 
            increasingly sophisticated applications that strengthen both my frontend and backend 
            skills.
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